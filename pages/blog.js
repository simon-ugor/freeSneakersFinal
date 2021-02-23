
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

                <Link href="/articles/2021-sneaker-trend-predictions"><a className="blog-link">2021 Sneaker Trend Predictions</a></Link>

                <Link href="/articles/best-nike-sb-dunk-releases"><a className="blog-link">Best Nike SB Dunk releases of 2020</a></Link>

                <Link href="/articles/new-balance-in-2020"><a className="blog-link">New Balance in 2020</a></Link>

            </div>
        </Layout>
    )
}

export default Blog