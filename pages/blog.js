
import Layout from "../components/Layout.js"
import Link from "next/link"
import Head from "next/head"

const Blog = () => {
    return (
        <Layout>
            <Head>
                <title>Sneaker Blog</title>
                <meta name="description" content="Welcome to Sneaker Blog. You can find here articles about all kinds of sneakers." />
            </Head>
            <div className="blog-div">
                <h3 className="aboutus-heading">Blog</h3>

                <Link href="/blog/best-skateboarding-shoes"><a className="blog-link">Best Skateboarding Shoes</a></Link>

            </div>
        </Layout>
    )
}

export default Blog