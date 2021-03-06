import "./intro.scss";

export default function Intro() {
    return (
        <div class="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/temple-cerulean-unsplash2.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Reggie Lucernas</h1>
                    <h3><span></span></h3>
                </div>
            </div>
        </div>
    )
}
