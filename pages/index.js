import Layout from "../components/Layout"
import Popup from "../components/Popup"

import fetch from "isomorphic-unfetch"
import { useState } from "react"

const index = () => {

    const [email, setEmail] = useState("")

    const [displayPopUp, setDisplayPopUp] = useState("none")
    const [popUpNumber, setPopUpNumber] = useState("")
    const [popUpText, setPopUpText] = useState("")
    const [opacity, setOpacity] = useState(1)


    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        //call database here
        if (email && email.includes("@") === true) {
            const newEmail = {"email": email}
            try {
                const res = await fetch("https://free-sneakers-final.vercel.app/api/entry", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/JSON"
                    },
                    body: JSON.stringify(newEmail)
                }).then(response => response.json())

                setDisplayPopUp("")
                setPopUpNumber(res.data)
                setPopUpText(res.msg)
                setOpacity(0.3)
                console.log(res.msg)
            } catch (err) {
                console.log("try to get here")
            }
        } else if (!email) {
            setDisplayPopUp("")
            setPopUpNumber("")
            setPopUpText("Please enter your email.")
            setOpacity(0.3)
        } else if (email.includes("@") === false) {
            setDisplayPopUp("")
            setPopUpNumber("")
            setPopUpText("Email must include '@'")
            setOpacity(0.3)
        }
    }

    const closePopUp = (e) => {
        e.preventDefault()
        setOpacity(1)
        setDisplayPopUp("none")
    }


    return (
        <Layout>
            <div>
                <div style={{opacity: opacity}} className="main-email-div">
                    <form>
                        <h4 className="button-label">Enter your e-mail:</h4>
                        <input value={email} onChange={handleChange} placeholder="example@example.com" className="email-input"  type="email"></input>
                        <h4 className="button-label">Generete random number:</h4>
                        <button className="generate-button" onClick={handleClick}>Generate</button>
                    </form>
                </div>
                <div style={{opacity: opacity}} className="main-howdoesitwork-div">
                    <h3 className="howdoesitwork-heading">How does it work?</h3>
                    <div className="howdoesitwork-text">
                        <p>1.) Enter you email.</p>
                        <p>2.) Click Generate button.</p>
                        <p className="margin-bottom">3.) Your random number will be sent into our database.</p>
                        <p className="margin-bottom">Every week an email with the highest number wins free sneakers!</p>
                        <p>You can generate new number every 5 hours. Simply repeat the
                            proccess and if you get higher number, it will be sent it!
                        </p>
                    </div>
                </div>
                <Popup
                    popupDisplay={displayPopUp}
                    okClick={closePopUp}
                    number={popUpNumber}
                    popupSentin={popUpText}
                />
            </div>
        </Layout>
    )
}

export default index