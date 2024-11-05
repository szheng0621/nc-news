import { Link } from "react-router-dom"

export default function ArticleCard (props) {
    const {article} = props
    return (
         <div className="column">
                <section className="card">
                <Link to={ `/articles/${article.article_id}` }><h3>{article.title}</h3></Link>
                <p>{article.author}</p>
                <img src={article.article_img_url} alt={`${article.title}`}></img>
                </section>
        
        </div>
    )

}