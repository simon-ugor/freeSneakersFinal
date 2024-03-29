
import Layout from "../components/Layout.js"
import Link from "next/link"
import Head from "next/head"
import { useEffect } from "react"

const Blog = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

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

                <Link href="/blog/travis-scott-sneaker-collaborations"><a className="blog-link">Travis Scott Sneaker Collaborations</a></Link>

                <Link href="/blog/playstation-5-vs-xbox-series-x"><a className="blog-link">PlayStation 5 vs Xbox Series X</a></Link>

                <Link href="/blog/adidas-bape-collaborations"><a className="blog-link">Adidas x Bape collaborations</a></Link>

                <Link href="/blog/what-are-celebrities-wearing"><a className="blog-link">What Are Celebrities Wearing?</a></Link>

                <Link href="/blog/useful-tips-for-styling-streetwear"><a className="blog-link">Useful Tips for Styling Streetwear</a></Link>

                <Link href="/blog/what-is-streetwear-fashion"><a className="blog-link">What is Streetwear Fashion?</a></Link>

                <Link href="/blog/guide-to-style-up-your-streetwear-like-a-pro"><a className="blog-link">Guide to Style Up Your Streetwear Like A Pro</a></Link>

                <Link href="/blog/top-10-streetwear-essentials"><a className="blog-link">Top 10 Streetwear Essentials You Must Have In Your Wardrobe</a></Link>

                <Link href="/blog/how-streetwear-took-over-the-fashion-world"><a className="blog-link">How Streetwear Took Over The Fashion World?</a></Link>

                <Link href="/blog/10-reasons-to-choose-streetwear-fashion"><a className="blog-link">10 Reasons to choose Streetwear fashion</a></Link>

                <Link href="/blog/how-streetwear-restyled-the-world"><a className="blog-link">How Streetwear restyled the world?</a></Link>

                <Link href="/blog/10-signs-that-represent-you-are-a-hypebeast"><a className="blog-link">10 signs that represent you are a Hypebeast</a></Link>

                <Link href="/blog/the-ultimate-guide-for-womens-streetwear"><a className="blog-link">The ultimate guide for women's streetwear</a></Link>

                <Link href="/blog/how-to-build-a-solid-streetwear-wardrobe-in-2021"><a className="blog-link">How to build a solid streetwear wardrobe in 2021?</a></Link>

                <Link href="/blog/dos-and-donts-of-luxury-streetwear"><a className="blog-link">Dos and Don'ts of luxury streetwear</a></Link>

                <Link href="/blog/what-are-different-types-of-streetwear"><a className="blog-link">What are different types of streetwear?</a></Link>

            </div>
        </Layout>
    )
}

export default Blog