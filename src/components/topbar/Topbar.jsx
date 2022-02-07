import "./topbar.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div class={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Reggie Lucernas</a>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <span>GitHub</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon" />
                        <span>LinkedIn</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>Email</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
