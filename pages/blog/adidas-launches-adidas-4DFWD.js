import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const adidasLaunches = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Adidas Launches Adidas 4DFWD</title>
                <meta name="description" content="Adidas Launches Adidas 4DFWD To Help Fitness Freaks Move Forward. Recently, Adidas launched an innovative technology in the brand’s data-driven 3D printed midsole. This new technology has been named 4DFWD." />
            </Head>
            <div className="blog-post-div">

                <h3 className="aboutus-heading">Adidas Launches Adidas 4DFWD To Help Fitness Freaks Move Forward.</h3>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Recently, Adidas launched an innovative technology in the brand’s data-driven 3D printed midsole. This new technology has been named 4DFWD. You might be wondering how this technology will help you as a user of Adidas shoes. The brand has created this technology with years of athlete data. This data joints hands with 3D printing to provide runners with a new running experience. This is the role of Adidas 4DFWD.</p>

                <h4 className="article-subheading">4D Lattice Midsole Technology from Adidas</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>About four years ago, Adidas launched the 4D Lattice Midsole Technology. The brand did it in partnership with Carbon. Adidas brought together the Digital Light Synthesis Technology of Carbon with athletic data for producing precision-turned 3D printed midsoles.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>Adidas 4D footwear holds the pride of being the first in the world to use technology to fine-tune midsoles to particular patterns. This technology ensures that athletes get precision performance in every step they take.</p>

                <h4 className="article-subheading">The Birth Of Adidas 4DFWD</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>With the same purpose in mind, Adidas 4DFWS Lattice Midsole has been launched now. The purpose of this technology is to create midsoles that flatten forward upon vertical impression. This technology has been created from 40% bio-based material made from 1 of out of 5 million probable lattice structures. When you compare the midsole created with this technology with previous generations of midsoles you will find that they have three times as much forward motion. It happened in vertical loading mechanical testing conditions.</p>

                <h4 className="article-subheading">What happens due to Adidas 4DFWD Lattice Midsole?</h4>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>As a result of this technology, most athletes, who tested midsoles made with this technology, stated that the peak braking force they experience during running has reduced considerably. The reason is that midsoles made with this technology redirect these vertical forces into horizontal forward motion. Most athletes also stated that these midsoles deliver running economy similar to ultra-boost midsoles.</p>

                <p className="article-text" style={{marginBottom: "2vh", paddingLeft: "5vw", paddingRight: "5vw"}}>In short, 4D Lattice Midsole Technology is undoubtedly a revolution!</p>

            </div>
        </Layout>
    )
}

export default adidasLaunches