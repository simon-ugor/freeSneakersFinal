
import Header from "./Header.js"
import Footer from "./Footer.js"

const Layout = (props) => {
    return (
        <div className="App">
            <Header />
            {props.children}
            <Footer />
            <div className="background-div"></div>
        </div>
    )
}

export default Layout