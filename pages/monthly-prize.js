import Layout from "../components/Layout"

import Image from "next/image"

const monthlyPrize = () => {
    return (
        <Layout>
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