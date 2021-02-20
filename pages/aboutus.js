import Layout from "../components/Layout"
import Head from "next/head"
import { useEffect } from "react"

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
                <p className="aboutus-text">You might be asking who are 
                we and what is the whole purpose of this app.. This app
                was created by just one simple idea and hours of work to
                implement it. The idea was to instantly give back what I get.
                <br /><br />Everyone wants to make money right? Thats why you can see
                ads on this webpage. But instead of keeping the money I
                rather decided to buy sneakers and pick a random winner
                every week. The more people know about this website, the better
                sneakers will be offerd to win for you. <br />Easy and simple as that.</p>
            </div>
        </Layout>
    )
}

export default AboutUs