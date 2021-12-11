import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                {/* <div className="imgContainer">
                    maybe an image of yourself
                </div> */}
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Daniel B. Kim</h1>
                    <h3>Software Engineer<span></span></h3>
                </div>
            </div>
            {/* maybe add an icon button that takes you to the next div */}
        </div>
    )
};