import { useEffect, useState } from "react";
import { getTopics } from "../apiCall";
import TopicCard from "./TopicCard";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics)
      setIsLoading(false)
    })
  }, [])
  
  if (isLoading) return <p>...I'm Loading</p>;
 
    return ( 
        <ul >
        {topics.map((topic) => {
          return <TopicCard key={topic.slug} topic={topic}/>;
        })}     
        </ul>     
    );
  
  
}
