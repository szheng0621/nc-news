import { useParams } from "react-router-dom";

export default function TestTopic() {
  const { topic } = useParams();
  console.log("Topic from useParams:", topic);

  return <div>{topic ? `Topic: ${topic}` : "No topic"}</div>;
}
