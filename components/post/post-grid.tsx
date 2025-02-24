import PostPreview from './post-preview';
import type Post from '../../interfaces/post';

type Props = {
  posts: Post[];
};

const PostGrid = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readingTime={post.readingTime}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
};

export default PostGrid;
