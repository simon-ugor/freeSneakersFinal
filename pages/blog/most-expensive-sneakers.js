import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const expensiveSneakers = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Most Expensive Sneakers</title>
                <meta name="description" content="Talking about expensive sneakers, we have seen multiple huge prices from high-fashion brand or rare collaboration. But which of these deserve to be called the most expensive sneakers? Let’s find out." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Most Expensive Sneakers</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Talking about expensive sneakers, we have seen multiple huge prices from high-fashion brand or rare collaboration. But which of these deserve to be called the most expensive sneakers? Let’s find out.</p>

                <h4 className="article-subheading">Jordan 1 Off White</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Collaboration between Air Jordan and high-fashion brand Off White came up with more models, not just Jordan 1s. Specifically Jordan 1s came in three different colorways. University blue, white and Chicago. Out of these three, Chicago colorway came up with the highest resell. Popping off with lowest ask for 4,164$ on StockX.</p>

                <h4 className="article-subheading">Dior Jordan 1</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Continuing with Jordan 1 trend, if you are looking to buy collaboration between Dior and Air Jordan, it’s not going to be cheap. Dior and Air Jordan release two versions of sneakers, Jordan 1 Retro Low Dior and Jordan 1 Retro High Dior. While resell prices are high for both of these high Dior Jordan 1s will cost you more. Lowest ask on StockX for Jordan 1 Retro High Dior is at the time 6,669$. Still not expensive enough?</p>

                <h4 className="article-subheading">Travis Scott x Nike</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>In last year’s Travis Scott released multiple sneakers in collaboration with Nike. Talking about Dunks, Jordan 1s and Air Forces, there are two models standing out with the price. Jordan 4 Retro Travis Scott Purple with incredibly high resell with lowest ask on StockX being 14,588$. But that is not all. Let’s add one more member to the collaboration – PlayStation. Nike Dunk Low Travis Scott x PlayStation resell for incredible 41,681$. If this is not expensive enough, I don’t know what is.</p>

                <h4 className="article-subheading">Nike Mag Back to the Future</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>We all know Nike Mags, right? And we all know they are rare and expensive. So how much would it cost you to rock these? Lowest ask on StockX is at the time 38,346$. A bit less than Nike x Travis Scott x PlayStation Dunks, but still huge price to pay for sneakers. Seems like Nike has the most expensive sneakers together with their collaborations. Hang on, they got even more.</p>

                <h4 className="article-subheading">Jordan 1 Retro High Shinedown Attention</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Nike back at it again, this time with Jordan 1 model you can buy for incredible 42,543$ from StockX, meaning this is our new winner. Well, not yet, Nike has more.</p>

                <h4 className="article-subheading">Nike Dunk SB Low Paris</h4>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>You thought it couldn’t get any higher? Nike comes in with another banger. This time for 54,185$ being the lowest ask on StockX. This has to be it, right? Well, we can always dig deeper and seek for sneakers that are more expensive. And trust me, you will always find some prices that will leave you breathless. But I think we’ve seen enough of incredibly high prices for today, my head is already spinning. In conclusion, if you were somehow able to cop some of these sneakers for a retail, you are a lucky guy! On the other hand, if you would like to buy these for resell, better start saving... or you can rather buy a car for the price of these sneakers. Up to you!</p>

            </div>
        </Layout>
    )
}

export default expensiveSneakers