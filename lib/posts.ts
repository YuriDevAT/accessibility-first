import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPropsContext } from 'next';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getPostSlugs(locale: string) {
  const localeDirectory = path.join(postsDirectory, locale);
  return fs.readdirSync(localeDirectory);
}

export function getPostBySlug(locale: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, locale, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: any = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(locale: string, fields: string[] = []) {
  const slugs = getPostSlugs(locale);
  const posts = slugs.map(slug => getPostBySlug(locale, slug, fields));
  return posts;
}
