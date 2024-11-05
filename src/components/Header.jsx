import { Link } from "react-router-dom"

export default function Header () {

    return (
        <div className="header">
            <section className="logo">
                <Link to="/"><img src="https://geekyhumans.com/wp-content/uploads/2022/09/owl.png?ezimgfmt=ng%3Awebp%2Fngcb5%2Frs%3Adevice%2Frscb5-1" alt="NC News Header"></img></Link>
            </section>

            <section className="header-right">
                <form className="search-container" action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                </form>
                <Link to="/" >Home</Link>
                <Link to="/" >Coding</Link>
                <Link to="/" >Cooking</Link>
                <Link to="/" >Football</Link>
            </section>
                
            <section className="main-heading">
                <h1>NC News</h1>
            </section>
          
        </div>
    
    );
}