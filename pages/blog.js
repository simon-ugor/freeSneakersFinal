
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

                <Link href="/blog/most-expensive-sneakers"><a className="blog-link">Most Expensive Sneakers</a></Link>

                <Link href="/blog/most-expensive-clothing"><a className="blog-link">Most Expensive Clothing</a></Link>

                <Link href="/blog/adidas-launches-adidas-4DFWD"><a className="blog-link">Adidas Launches Adidas 4DFWD To Help Fitness Freaks Move Forward</a></Link>

            </div>
        </Layout>
    )
}

export default Blog