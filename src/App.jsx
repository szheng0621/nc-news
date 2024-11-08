import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import CommentsList from "./components/CommentsList";
import Topics from "./components/Topics";
import TestTopic from "./components/TestTopic";
import ArticlesByTopic from "./components/ArticlesByTopic";


function App() {
return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="/articles/:article_id/comments" element={<CommentsList />} />
      <Route path="/topics/:topic" element={<ArticlesByTopic /> }/>
      <Route path="/topics" element={<Topics/>} />
      <Route path="/test/:topic" element={<TestTopic />} />
    </Routes>
  </>
);

}

export default App
