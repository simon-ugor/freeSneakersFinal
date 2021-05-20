import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const bestSkateShoes = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Best Skateboarding Shoes</title>
                <meta name="description" content="Fashion is one thing and it always looks good when you connect fashion with skateboarding. But aside from fashion, what are the best and most comfortable sneakers for skateboarding? The answer is simple, skate what feels best for you." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Best Skateboarding Shoes</h3>

                <h4 className="article-subheading">What are the best skateboarding shoes?</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Fashion is one thing and it always looks good when you connect fashion with skateboarding. But aside from fashion, what are the best and most comfortable sneakers for skateboarding? The answer is simple, skate what feels best for you. Anyway, let’s have a look at what options there are and what are the go-to sneakers of the world’s best skateboarders. We can split sneakers in two categories – sneakers for skating and sneakers not for skating.  That also doesn’t mean you can’t skate sneakers that are not made for skating. Most famous examples could be Nike Air Force 1 or Air Jordan 1. Some examples of sneakers made for skating are Nike SB Charge, Etnies Joslin, Globe Tilt or Nike SB Nyjah Free by famous skateboarder Nyjah Houston.</p>

                <div className="article-image-div">
                    <Image
                        src="/best-skateboarding-shoes1.jpg"
                        alt="Vans Old Skool"
                        width={640}
                        height={426}
                    />
                </div>

                <h4 className="article-subheading">Nyjah Huston - Nike SB Nyjah</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Nyjah Houston, one of the best skateboarders in the world has already decided what he likes to skate the most. This must be pretty obvious, when we consider he has his own sneakers – Nike SB Nyjah Free and Nike SB Nyjah Free 2.</p>

                <h4 className="article-subheading">Chris Joslin - Etnies Joslin 2</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Chris Joslin, world class skateboarder owns sneakers with his name on them as well. Introducing the Joslin 2 from Etnies and Joslin. What else would he skate if not sneakers with his own name, right?</p>

                <h4 className="article-subheading">Louie Lopez - Converse CONS Louie Lopez Pro</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Louie Lopez, American skateboarder from Los Angeles collaborated with Converse and here is the result. Converse CONS Louie Lopez Pro. You are probably not going to see Louie skate anything else, why would he even do that right?</p>

                <h4 className="article-subheading">Instagram Skaters</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Maybe we have to look away from all the pros having their own shoes. Let’s rather look on Instagram and all the so-called trendy skaters. What will we find? All sorts of sneakers from Nike Dunks to Air Jordan 1s and high-fashion sneakers, for example Off-White. Why is this? Are they only trying to be trendy or do they feel good skating in shoes not made for skating? Sometimes this may look as only a stupid trend, but it doesn’t have to be true. Many skaters skating in Jordan 1s have a good reason to do so. As most skateboarding shoes are low, they don’t provide skater with ankle support to avoid injuries. High Jordan 1s provide this support and for some skaters these are comfortable to skate. Also, not sure if you noticed but Dunks as well have SB in their name. We call them by name Dunks while the full name is Nike SB Dunk low. So why not to skate them? Well, apart from the reason they might be expensive and hard to get, there is no other reason why not to skate in Nike SB Dunks.</p>

                <div className="article-image-div">
                    <Image
                        src="/best-skateboarding-shoes2.jpg"
                        alt="Vans Old Skool"
                        width={640}
                        height={426}
                    />
                </div>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Talking about skating in high-fashion sneakers like Off-Whites or all sorts of expensive shoes, purpose of this is probably just to be trendy. But there is nothing wrong with that! Of course, skateboard grip tape will destroy your shoes, if you can afford it, go for it and get those Instagram clips. You might as well look fire when you’re skating your favorite spot or skatepark.</p>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>So, what should you skate in? In the end, it is all about the preference. There is no wrong or right, skate what suits you the best.</p>

            </div>
        </Layout>
    )
}

export default bestSkateShoes