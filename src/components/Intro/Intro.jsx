import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            // strings: ["Software Engineer", "Designer", "Woodworker", "Photographer", "Creator", "Tony Stark"]
            strings: ["This Portfolio is Under Construction"]
        });
    }, []);

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
                    <h3><span ref={textRef}></span></h3>
                </div>
            </div>
            {/* maybe add an icon button that takes you to the next div */}
        </div>
    )
};