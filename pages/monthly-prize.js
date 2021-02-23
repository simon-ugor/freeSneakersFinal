import Layout from "../components/Layout"

import Head from "next/head"

import Image from "next/image"

const monthlyPrize = () => {
    return (
        <Layout>
            <Head>
                <title>FreeSneakers.xyz - Monthly Prize</title>
                <meta name="description" content="Win free sneakers monthly just by entering your email! Try your luck and generate a random number. Highest number wins! Check out this months prize." />
            </Head>
            <div className="aboutus-div">
                <h3 className="aboutus-heading">Win this month!</h3>
                <h3 className="aboutus-heading">02-2021</h3>
                <p className="aboutus-text">OFF WHITE - OUT OF OFFICE LOW TOP SNEAKERS</p>
                <div className="image-div">
                    <Image
                        src="/ow.png"
                        href="Off White Sneakers"
                        width={440}
                        height={250}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default monthlyPrize