import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  tags: string;
  category: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  ogPost: {
    url: string;
  };
  content: string;
  readingTime: number;
};

export default PostType;
