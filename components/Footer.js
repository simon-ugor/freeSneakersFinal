
import Link from "next/link"

const Bottom = () => {
    return (
        <div className="bottom-main-div">
            <div className="bottom-div">

                <div className="bottom-div1">
                    <Link href="/blog"><a className="link">Blog</a></Link>
                </div>

                <div className="bottom-div2">
                    <Link href="/"><a className="link">Homepage</a></Link>
                </div>

                <div className="bottom-div3">
                    <Link href="/aboutus"><a className="link">About Us</a></Link>  
                </div>

            </div>
            <div className="bottom-div02">
                
                <div className="bottom-div1">
                    <Link href="/privacypolicy"><a className="link">Privacy Policy</a></Link>
                </div>

                <div className="bottom-div2">
                    <Link href="/termsandconditions"><a className="link">Terms and Conditions</a></Link>
                </div>
                
                <div className="bottom-div3">
                    <Link href="/contactus"><a className="link">Contact Us</a></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Bottom