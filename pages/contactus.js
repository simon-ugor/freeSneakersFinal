import Layout from "../components/Layout"
import Head from "next/head"
import { useEffect } from "react"

const ContactUs = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return (
        <Layout>
            <Head>
                <title>Contact Us - FreeSneakers.xyz</title>
                <meta name="description" content="Contact FreeSneakers.xyz" />
            </Head>
            <div className="aboutus-div">
                <h3 className="aboutus-heading">Contact Us</h3>
                <p className="aboutus-text">For any questions or
                troubleshooting you can always contact us at:</p>
                <br />
                <p className="aboutus-text">coldenwebdev@gmail.com</p>
            </div>
        </Layout>
    )
}

export default ContactUs