import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const whatIsStreetwear = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>What is Streetwear Fashion?</title>
                <meta name="description" content="A few years ago no one knew much about streetwear fashion. Slowly and gradually people started to understand the meaning and significance of this type of fashion." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">What is Streetwear Fashion?</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>A few years ago no one knew much about streetwear fashion. Slowly and gradually people started to understand the meaning and significance of this type of fashion. As the name suggests, it is the type of clothing and attire you wear when you go out on streets to run an errand nearby, or when you come out of your apartment to skateboard through the neighborhood.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>This type of fashion mainly comprises casual and informal clothing, without spending too much time thinking about what to wear. Some of the articles that are commonly worn in streetwear fashion are basketball caps, trousers, hoodies and sneakers.</p>

                <h4 className="article-subheading">Emergence of Streetwear</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Streetwear fashion is influenced by various street cultures in the1970s such as the hip hop culture in New York and the surf culture which is still a part of many neighborhoods in Los Angeles. Another means of inspiration is Japanese culture.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>However, streetwear fashion gained popularity in the 1990s when a lot of clothing brands realized its importance. American Football teams started launching their merchandise, with their team logos on t-shirts, hoodies and caps. A surfboard designer began making shirts with similar designs that were on skateboards. This is how this fashion mainly transferred in the surf culture.</p>

                <h4 className="article-subheading">Hypebeast culture</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Hypebeast culture is responsible for the immense growth of streetwear fashion. The way this trend has spread across the globe is mainly due to the popularity of hypebeast.</p>
                
                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Initially, people were not big fans of the hypebeast culture as they thought it is a derogatory term because of which, the culture became very unpopular. However, as years passed, many people started accepting this streetwear fashion and it became the face of streetwear fashion.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Hypebeasts are mainly those who buy streetwear clothing in order to impress others. These are groups of people who wear different brands at the same time to boast their clothing articles and the trends they follow.</p>

                <h4 className="article-subheading">Sneakers</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>It is impossible not to discuss sneakers when it comes to streetwear. Sneakers have been an integral part of street fashion for a long time and their popularity has only extended decade after decade.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>The sneaker culture mainly came about when Michael Jordan released his signature shoes. Jordan being an inspiration for many and a brand on his own, made people follow his style. From then, this fashion has only evolved. Now, different styles of sneakers of various brands are available. Michael Jordan even launched his own sneakers brand ‘Jordans’ in collaboration with Nike.</p>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>Streetwear fashion has now emerged as a whole industry and many famous brands are trying their best to capture market share. Many people are fond of this culture as it allows you to be fashionable with the utmost comfort in your clothes. Some people are so enthusiastic about streetwear that they collect different launched items and are the first ones to buy the special editions that are very pricey. If the size of this industry is analyzed, it doesn’t seem to lose its popularity for over a decade.</p>

            </div>
        </Layout>
    )
}

export default whatIsStreetwear