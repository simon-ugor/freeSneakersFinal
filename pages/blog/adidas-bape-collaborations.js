import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const adidasBape = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Adidas x Bape Collaborations</title>
                <meta name="description" content="Well-known brand Adidas and Japanese fashion brand Bape (A Bathing Ape) have recently released multiple collaborations. Some like them, others not, anyways let’s have a look at most popular Adidas and Bape collaborations and their prices on the market." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Adidas x Bape Collaborations</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Well-known brand Adidas and Japanese fashion brand Bape (A Bathing Ape) have recently released multiple collaborations. Some like them, others not, anyways let’s have a look at most popular Adidas and Bape collaborations and their prices on the market.</p>

                <h4 className="article-subheading">Adidas Superstar Bape ABC Camo Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>As of right now, this is the most recent release of Adidas and Bape collaborating. Going for gold with good old classic Adidas Superstar, you pretty much can’t miss. Add Bape to the mix and the result is a great looking shoe. Price is surprisingly low on these. You can get Adidas Superstar Bape ABC Camo Green for friendly 150$ on StockX.</p>

                <h4 className="article-subheading">Adidas Dame 4 A Bathing Ape Camo</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>First of all, let’s just say there is a lot of controversy around this shoe. While some love the design and others hate it, you can’t deny this is a pretty controversial shoe to collaborate on. You decide whether you like it or not. You can buy these for lowest ask of 270$ on StockX.</p>

                <h4 className="article-subheading">Bape x Adidas SB Shark Hoodie Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Not to talk about sneakers only, let’s have a look at some clothing too. Same as Adidas Superstars, Bape Shark Hoodie is a classic. You can’t go wrong with a shark hoodie from Bape. Add Adidas to the mix and you will not miss. Prices are getting a bit higher, you can buy Bape x Adidas SB Shark Hoodie for 312$.</p>

                <h4 className="article-subheading">Bape x Adidas Football Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>We have mentioned some sneakers and clothes, what’s left? Well, you can always find something. Yes, this is exactly what you think it is, a football. Bape x Adidas Football will cost you 90$, pretty fair price.</p>

                <h4 className="article-subheading">Bape x Adidas Adizero 8.0 Gloves Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>To continue with the football collection, here are Bape x Adidas football gloves, so you can have your collection complete. Whether you play football or you like to collect special items, this piece costs 80$.</p>

                <h4 className="article-subheading">Bape x Adidas SB Jersey Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Can’t leave out this jersey, otherwise football collection will not be complete. Let’s finish of the football topic with this Adidas x Bape Jersey. Talking about price, lowest ask on StockX is 130$, still not bad for what it is.</p>

                <h4 className="article-subheading">Bape x Adidas Riddell Helmet Green</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Okay, I was lying. But I swear this is the last football collection piece we will mentioned. You simply can’t leave this one out, right? But this one will cost you a little bit more. You can find this Bape x Adidas Riddell Helmet for lowest ask of 560$ on StockX.</p>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>Well, after talking about all the essential football items, there is nothing left, that’s pretty much it. Now it’s up to you to decide, whether you are a football fan, Adidas fan or Bape fan and if it is worth it to get some of these pieces. But one thing is for sure, Adidas and Bape have been releasing some great looking sneakers and clothing as a result of their collaboration and hopefully we can look forward to seeing more of these.</p>

            </div>
        </Layout>
    )
}

export default adidasBape