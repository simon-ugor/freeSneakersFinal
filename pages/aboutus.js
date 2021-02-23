import Layout from "../components/Layout"
import Head from "next/head"
import { useEffect } from "react"
import Link from "next/link"

const AboutUs = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return (
        <Layout>
            <Head>
                <title>About Us - FreeSneakers.xyz</title>
                <meta name="description" content="About Us - FreeSneakers.xyz" />
            </Head>
            <div className="aboutus-div">
                <h3 className="aboutus-heading">About Us</h3>
                <p className="aboutus-text">
                    Giving back to the community! <br /> Win free sneakers just by entering your email! Try your luck and generate a random number. Every month, highest number wins <Link href="/monthly-prize"><a className="aboutus-link">monthly prize</a></Link>! <br /> You can generate new number every 5 hours, so make sure you don't miss out on chance to be the winner. Simply repeat the proccess, enter the same email you have used the first time, click generate and if your number is higher then the previous one, it will be sent in. <br /> Make sure you enter your email correctly! Every month, winner will be contacted via this email to receive the prize!
                </p>
            </div>
        </Layout>
    )
}

export default AboutUs