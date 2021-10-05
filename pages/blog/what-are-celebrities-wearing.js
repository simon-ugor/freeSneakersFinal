import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const celebritiesWearing = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>What Are Celebrities Wearing?</title>
                <meta name="description" content="What are celebrities wearing? There is a lot of celebrities with great fashion sense. Not only they have a good style, they also have enough money to afford it and good publicity to present it. Let’s have a look at some outfits of celebrities, see what they like, what they don’t like and how expensive can their outfits get." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">What Are Celebrities Wearing?</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>There is a lot of celebrities with great fashion sense. Not only they have a good style, they also have enough money to afford it and good publicity to present it. Let’s have a look at some outfits of celebrities, see what they like, what they don’t like and how expensive can their outfits get.</p>

                <h4 className="article-subheading">Lil Uzi Vert</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Lil Uzi Vert cares about his style and makes the most out of it, as mentioned in song Pretty Mami: „Can’t nobody touch my swag“, he is always looking stylish out there. In many songs, Uzi also mentions he has no stylist, apart from other celebrities. This means he always put his outfits together by himself and we can see what his fashion sense is like. It is easy to dress good when you have stylist putting your outfits together, but what is the point of that? Let’s go over one of Lil Uzi Verts outfits and see what he pulled up in.</p>

                <h4 className="article-subheading">Justin Bieber</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>The name nowadays probably everyone heard and everyone knows who Justin is. But what does he like to wear? Not only he has great fashion sense, he also owns his own brand called “Drew house” or simply just “Drew”. Nice designs with nice colors mixed with his name, Drew house has been really popping of lately. Apart from Drew house, Justin wears pretty wide variety of outfits. Let’s go over one of them and see what he is feeling.</p>

                <h4 className="article-subheading">Aminé</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>If you have not heard of Aminé yet, you better go and bump some of his great music out there. Aminé is an American rapper, singer and songwriter and you can acknowledge he has a great fashion taste from his songs only. But now let’s see what he really likes to wear and how can he put his outfits together. Here is one of his great outfits, how does it look?</p>

                <h4 className="article-subheading">Aries</h4>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>There is a chance you have not heard of Aries yet. He is not really as famous as Justin Bieber or Lil Uzi Vert, but that only adds up the vibe he puts out with his music, outfits and lifestyle overall. Anyways, let’s introduce Aries. Aries is an American singer, songwriter, rapper, YouTuber and I would say producer as well. He is a founder of Wunderworld record label and with his music and outfits, I just had to add him to the mix. Aside from amazing music Aries also has an amazing taste for fashion. Here is one of his outfits, let’s check what he wears.</p>

            </div>
        </Layout>
    )
}

export default celebritiesWearing