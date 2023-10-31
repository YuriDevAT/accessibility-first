import markdownStyles from './markdown-styles.module.css'
import PostType from '../interfaces/post'

type Props = {
  content: string
  category: string
}

const PostBody = ({ content, category }: Props) => {
  return (
    <div className={`max-w-2xl mx-auto ${category == "UX Research" ? "research" : "general"}`}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody