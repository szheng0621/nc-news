import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";

function App() {
return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
    </Routes>
  </>
);

}

export default App
