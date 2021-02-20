
import Image from "next/image"

const Loading = (props) => {
    return (
        <div style={{display: props.loadingDisplay}} className="loading-div">
            <Image
                src="/loading.gif"
                alt="Loading"
                width={64}
                height={64}
            />
        </div>
    )
}

export default Loading