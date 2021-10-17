import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const usefulTips = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Useful Tips for Styling Streetwear</title>
                <meta name="description" content="Streetwear clothing brands and outfits have become very popular in the current years. Here is a quick guide on the style of your dresses, including those cool sneakers in an attractive fashion." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Useful Tips for Styling Streetwear</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Streetwear has become the mainstream fashion statement, and it has gained many eyes on it of appreciation. But to wear it the right way, you need to know how to style your outfit items that look stylish and not some separates thrown over each other.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Streetwear clothing brands and outfits have become very popular in the current years. Here is a quick guide on the style of your dresses, including those cool sneakers in an attractive fashion. Here are some tips!</p>

                <h4 className="article-subheading">Breakdown the color</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Many movies have stayed the perfect inspiration for styling streetwear as they have the right touch of the balance of style. Bold and powerful colors are a significant sign of streetwear styling as many famous personalities already wear them in a way. You can also support the Kimono jacket to have the streetwear look ideal on you beautifully.</p>

                <h4 className="article-subheading">Don't be afraid to wear your socks in style too</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Streetwear styles are just like our normal daily styles as they keep coming on trend and then get lost in folds of time. But there is one exception in this that is the Japanese streetwear style. This streetwear style won't ever go out of fashion wearing oversized hoodies, three-quarter shorts, high socks, and sneakers.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>The color options don't matter much, but people would choose black and white as ideal cases. Don't forget to add something pop that would break down the color, such as a bright-colored top in between. In streetwear styles, sneakers are essential as well. Hence style them up in the right way too.</p>

                <h4 className="article-subheading">Keep those shoelaces swaying like the hair</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Tips for styling streetwear include having a not much caring nature. It involves doing anything that shows that you don't care much. You can keep your shoelaces open and carry them in style. This style has done wonders for many. You can match your shoes with your t-shirt and keep the rest of the outfit in the same color. The style will give off a powerful, independent look.</p>

                <h4 className="article-subheading">Mix and match different styles</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Wearing sporty items along with classic shoes is one big stylish way of carrying out streetwear style. This style is relatively new, but it is gaining a lot of fame. You can mix and match metallic and pastel colors and come up with a style of your own. The key is to keep mixing different dress-up items and give them a bonded look by matching the colors and their shades.</p>

                <h4 className="article-subheading">Either go for logos or skip them at all</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>A new trend has been rising in the streetwear outfits that are going all aboard with logos or silent. You can wear all the logos at once and give off a loud vibe, or you can go without any of them and support your style with no logos.</p>

                <p className="article-text" style={{paddingLeft: "5vw", paddingRight: "5vw"}}>These are a few top ways to style streetwear fashion so that you can make a statement wherever you go.</p>

            </div>
        </Layout>
    )
}

export default usefulTips