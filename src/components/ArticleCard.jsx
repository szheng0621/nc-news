
export default function ArticleCard (props) {
    console.log (props, "props")
    const {article} = props
    return (
         <div className="column">
                <section className="card">
                <h3>{article.title}</h3>
                <p>{article.author}</p>
                <img src={article.article_img_url} alt={`${article.title}`}></img>
                </section>
        
        </div>
    )

}