import { Link } from "react-router-dom"

export default function TopicCard (props) {
    const { topic } = props
    console.log (topic, "<<<topic card")
      
  return (
    <Link to={`/topics/${topic.slug}`}>
    <p>{topic.slug}</p>
  </Link>
  )
}