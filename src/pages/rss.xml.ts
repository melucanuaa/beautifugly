import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: Request) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Beautifugly Blog',
    description: '技术博文、AI 创作、有趣项目',
    site: context.url,
    items: blog
      .filter(post => !post.data.draft)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.id}/`,
      })),
    customData: '<language>zh-CN</language>',
  });
}
