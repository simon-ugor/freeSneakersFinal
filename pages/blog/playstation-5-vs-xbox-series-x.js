import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const playstationVsXbox = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>PlayStation 5 vs Xbox Series X</title>
                <meta name="description" content="PlayStation vs Xbox, Sony vs Microsoft, a never-ending battle. There was always a discussion whether PlayStation by Sony or Xbox by Microsoft is better. This trend continues with new released Sony PlayStation 5 and Microsoft Xbox Series X." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">PlayStation 5 vs Xbox Series X</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>PlayStation vs Xbox, Sony vs Microsoft, a never-ending battle. There was always a discussion whether PlayStation by Sony or Xbox by Microsoft is better. This trend continues with new released Sony PlayStation 5 and Microsoft Xbox Series X. Most of the time, choice depends on personal preference, in fact, both of these gaming consoles are very similar. Anyways, let’s learn something about them, look at their features, prices and where to get them.</p>

                <h4 className="article-subheading">Sony PlayStation 5</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Let’s introduce our first competitor, here goes PlayStation 5 by Sony. PlayStation 5, shorter PS5, was released on November 12, 2020 (dates may vary depending whether we are talking about Europe or US). There are two versions of PS5, PS5 console and PS5 Digital Edition. Main difference, excluding price, is that PS5 Digital Edition has no disc drive at all. It is an all-digital version of the PS5 console with no disc drive. Basically, all games you want to play and buy, will be stored with your PlayStation Network account in a digital form. Talking about prices, PlayStation 5 Digital Edition launches with price starting at 399$ and PlayStation 5 console at 499$. Not too bad, right? Well, until resell prices came in. PS5 quickly sold out and prices skyrocketed. If you would like to enjoy gaming on PlayStation 5, prepare 610$ for the digital version and 658$ for console version. Prices pretty much doubled very quickly and PS5 can be really difficult to get. How about its competitor?</p>

                <h4 className="article-subheading">Microsoft Xbox Series X</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Not to stay in a shadow, here comes Microsoft to fight back. Here is the rival of PlayStation 5, Microsoft Xbox Series X and his little brother Xbox Series S. On November 10, 2020, Microsoft released Xbox Series X for 500$ and Xbox Series S for 300$. While Xbox Series X, comes with an optical drive and outputs at 4K resolution, Xbox Series S is a bit more light-weight version. It has a slower processor, less internal storage, 1440p output instead of 4K and no optical drive. Same as his rival from Sony, Xbox Series X can be difficult to get. Both of these consoles sold out and there is a limited supply of them, meaning a dream come true for all resellers. As well as PlayStation 5, you can find Xbox X on StockX for prices varying from 550$ to 650$. As of right now, his lighter and cheaper brother Xbox Series S is available for purchase.</p>

                <h4 className="article-subheading">Conclusion</h4>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>As a conclusion I would say, for all the haters and die-hard fans, both consoles are equally good and each has its advantages and disadvantages. Now, the decision is on you. Whether you are a fan of Sony or Microsoft or you are just looking to buy a console to play your favorite games, I don’t think you will make a mistake if you pick any of these two. Both of the companies Sony and Microsoft are leaders of the market considering gaming consoles and both companies put their best technologies into PS5 and Xbox X. Doesn’t matter which one you choose, you won’t regret it.</p>

            </div>
        </Layout>
    )
}

export default playstationVsXbox