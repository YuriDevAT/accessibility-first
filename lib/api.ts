import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(locale: string) {
  const localeDirectory = join(postsDirectory, locale);
  return fs
    .readdirSync(localeDirectory)
    .map((file) => file.replace(/\.md$/, ''));
}

type PostData = {
  slug?: string;
  content?: string;
  [key: string]: any;
};

export function getPostBySlug(
  locale: string,
  slug: string,
  fields: string[] = []
): PostData {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, locale, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostData = {};

  fields.forEach((field) => {
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
  const posts = slugs.map((slug) => getPostBySlug(locale, slug, fields));
  return posts;
}
