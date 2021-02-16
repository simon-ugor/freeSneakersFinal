
import Layout from "../components/Layout.js"
import Link from "next/link"

const Blog = () => {
    return (
        <Layout>
            <div className="blog-div">
                <h3 className="aboutus-heading">Blog</h3>

                <Link href="/articles/firstblogarticle"><a className="blog-link">First blog article</a></Link>

            </div>
        </Layout>
    )
}

export default Blog