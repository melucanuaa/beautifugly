import { getCollection } from 'astro:content';

export async function GET() {
  const blog = await getCollection('blog');
  const works = await getCollection('works');
  const projects = await getCollection('projects');

  const items = [
    ...blog.filter(p => !p.data.draft).map(post => ({
      title: post.data.title,
      description: post.data.description || '',
      url: `/blog/${post.id}/`,
      tags: post.data.tags,
    })),
    ...works.filter(w => !w.data.draft).map(work => ({
      title: work.data.title,
      description: work.data.description || '',
      url: `/works/${work.id}/`,
      tags: work.data.tags,
    })),
    ...projects.filter(p => !p.data.draft).map(project => ({
      title: project.data.title,
      description: project.data.description,
      url: `/projects/${project.id}/`,
      tags: project.data.tags,
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}
