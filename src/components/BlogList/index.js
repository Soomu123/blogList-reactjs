// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(each => (
        <BlogItem eachItem={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
