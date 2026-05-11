import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = (await getCollection('blog')).filter(p => !p.data.draft);
  return rss({
    title: 'Beautifugly Blog',
    description: '技术博文、AI 创作、有趣项目 — 一个记录成长与探索的小站。',
    site: context.site!,
    items: blog
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || '',
        link: `/blog/${post.id}/`,
      })),
    customData: '<language>zh-CN</language>',
  });
}
