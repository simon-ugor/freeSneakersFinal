import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const expensiveClothing = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Most Expensive Clothing</title>
                <meta name="description" content="What is the most expensive clothing you can buy? There sure are some expensive pieces with prices that will leave us breathless. Let’s dig deep and look how expensive can clothes get." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Most Expensive Clothing</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>We have already talked about and seen the most expensive sneakers. But how about clothing? There sure are some expensive pieces with prices that will leave us breathless. Let’s dig deep and look how expensive can clothes get.</p>

                <h4 className="article-subheading">Nike x Drake Certified Lover Boy Bomber Jacket</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>When it came to sneakers, we have seen a lot of successful Nike collaborations at top places of our ranking. Well, here is another one. This Nike x Drake collaboration will cost you 2,682$ on StockX. Pretty expensive already? Just wait until you see the prices coming up in our ranking. Get ready.</p>

                <h4 className="article-subheading">Supreme x Louis Vuitton Box Logo Hooded Sweatshirt</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>With this long name comes item we have probably all seen already. This red Supreme box logo hoodie with Louis Vuitton monogram print all over it released as a result of Supreme x LV collaborations. This hoodie can be bought from StockX starting at 5,395$ which, not going lie, is a lot for a hoodie. But hold on, this is just a beginning.</p>

                <h4 className="article-subheading">Supreme x Louis Vuitton Jacquard Denim Chore Coat</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Seems like Supreme x LV collaborations are taking over this price ranking. This Supreme Louis Vuitton Denim Chore Coat can be bought on StockX for 6,641$, but wait until you see the next Supreme x LV item. No but really, we have to move on and explore other brands as well.</p>

                <h4 className="article-subheading">Gucci x The North Face Print Jacket Beige/Ebony</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>This pretty recent Gucci and TNF collaboration was worn by A$AP Rocky and other famous rappers. No surprise resell price sky-rocketed incredibly high. What’s your guess? You can buy this recent piece on StockX for 8,367$. If that is not expensive, I don’t know what is. Maybe we should check on Supreme and Louis Vuitton collaborations and ask them what is really expensive. Let’s do that.</p>

                <h4 className="article-subheading">Supreme x Louis Vuitton Leather Baseball Jacket</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Well, that was really quick show off for some other brands but we are already back with the good old Supreme x LV. So, what does it mean really expensive? This red Supreme leather baseball jacket with Louis Vuitton monogram print all over tops our ranking with incredible price of 12,030$ on StockX. Yes, that price really has 5 digits. Seems like there is no collaboration or clothing piece more expensive than Supreme x LV collaborations. Or is there?</p>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>There is always possibility to dig even deeper and look for even more expensive clothing. And trust me when I say, you will always find some prices that will leave you breathless. But my head is already spinning so let’s close our ranking and crown our winner. Now, not just single winner, let’s rather talk for the whole collaboration. Supreme x LV collaboration simply took over StockX most expensive clothes with crazy resell prices. If you were able to cop some of these items for retail, trust me, you are really lucky. But if not, and you are looking to buy these for resell, better start saving, it’s not going to be cheap.</p>

            </div>
        </Layout>
    )
}

export default expensiveClothing