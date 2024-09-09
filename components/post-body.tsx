import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
  category: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-[80ch] mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
