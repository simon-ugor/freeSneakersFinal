import Layout from "../../components/Layout"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"

const SneakerTrendPredictions = () => {

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <Layout>
            <Head>
                <title>2021 Sneaker Trend Predictions</title>
                <meta name="description" content="In the event that 2020 has shown us anything, it's that anticipating the future ain't simple. Considering that, after evaluating our Sneaker Trend Predictions from a year back, it would appear that our history at guaging the fate of footwear is not something to be scoffed at." />
            </Head>
            <div className="blog-post-div">
                <h3 className="aboutus-heading">2021 Sneaker Trend Predictions</h3>
                <p style={{marginBottom: "2vh", paddingLeft: "2vw", paddingRight: "2vw"}}>
                    In the event that 2020 has shown us anything, it's that anticipating the future ain't simple. Considering that, after evaluating our Sneaker Trend Predictions from a year back, it would appear that our history at guaging the fate of footwear is not something to be scoffed at. Sneakerheads are characteristically flighty monsters, so foreseeing their developments is consistently an intense assignment. Notwithstanding, following a time of recording their exercises, we've looked profound into the SF gem ball indeed to reveal the impending patterns for 2021. Peruse on for our promotion othesis. Still Drunk on the Dunk Its an obvious fact which outline ruled 2020, and we can't see that hot streak arriving at end at any point in the near future. The mid 2000s Dunk 'Brilliant Era' kept going quite a while, and considering the new item patterns of other famous works of art from Nike, you can anticipate that the Dunk should presumably outstay its welcome, as well. There's now some warmer drops arranged, most quite the most recent Supreme x Nike SB Dunk Low assortment. In any case, the genuine inquiry is whether Virgil will at last drop his Futura coordinated effort? Answer murky, attempt once more. Discussion Brought to the Fore The to some degree serene restoration of the Forum in the two its low-and high-excellent conditions was one of adidas' features in 2020. Having quite recently brought back the fan-most loved outline in OG structure, you can anticipate that the Three Stripes should saint it in 2021 – and we're siphoned for it. Sparking our interest with restricted release joint efforts with any semblance of BSTN, Heitor da Silva, Sivasdescalzo, Footpatrol and Sneaker Politics, adidas are situated to make the 1984 symbol a standout amongst other wistfulness outlines of the new year. The 99X Factor While many fan-most loved outlines returned in 2020, it was the New Balance 992 restoration that made the most features.
                </p>
                <Image
                    src="/article1.jpg"
                    alt="Air Jordan 1"
                    width={640}
                    height={426}
                />
                <p style={{marginTop: "2vh", paddingLeft: "2vw", paddingRight: "2vw"}}>
                    Sneakerheads couldn't get enough of the exemplary model, particularly the eye-getting coordinated efforts. Also, while more sought-after versions of the 992 make certain to include in the new year, you can expect the New England brand to tidy off a couple of more 99x symbols off the rear of a champion a year. Word has it that New Balance will look to legend a couple of prior 99x outlines, likely the works of art from the pre-2000s period. The idealists can likewise possibly anticipate an increase underway of Made in USA colourways, with COVID-19 probably affecting the production network in other assembling areas. Shade of the Year: Green The move to more maintainable practices is now going all out, however expect considerably more planet-saving activities from tennis shoe brands in 2021. Nike will without a doubt increase their creation of tennis shoes produced using reused materials, while a propensity of manageability first brands will start to channel into the standard. Maybe an indication of things of come, Swiss brand On as of late dispatched the Cyclon: a 100 percent recyclable shoe, just accessible through a month to month membership administration, where individuals can restore end-of-life items back to On, in return for the most recent variant. Jump on Game! The computer games industry is at present greater than the music and entertainment worlds joined, so it's nothing unexpected we saw some prominent gaming joint efforts invade the sneakersphere in 2020. We got ventures with eSports star Ninja, just as the Cyberpunk 2077 and League of Legends establishments, yet things truly hit breaking point when Travis Scott revealed a PlayStation x Nike Dunk Low. Gamers are almost certain than at any other time to spend too much on new kicks, and the large brands unquestionably addressed the call with all around considered colourways, short the tricks. There's no uncertainty more will be stacked up in 2021, particularly unique drops to supplement the arrival of cutting edge titles.
                </p>
            </div>
        </Layout>
    )
}

export default SneakerTrendPredictions