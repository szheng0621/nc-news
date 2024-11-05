import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import CommentsList from "./components/CommentsList";

function App() {
return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="/articles/:article_id/comments" element={<CommentsList />} />
    </Routes>
  </>
);

}

export default App
