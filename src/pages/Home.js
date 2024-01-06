import { Link } from "react-router-dom";
import hatdrawLogo from "../images/hatdraw-logo.svg";

const Home = () => {
    document.title = "Hat Draw Machine";
    return (
    <div className="flex-wrapper">
        <div className="page">
          <h2 className="section page-header">Pick a Hat</h2>
          <div className="section main-section">
    
    
            <div className="section realign">
              <Link to="/exchange-hat"><img className="hat-icon" src={hatdrawLogo} alt="Hat Logo" />
                <h2 className="hat-caption">Exchange Hat</h2>
              </Link>
              <p className="hat-description">Randomly pair a list of people together for gift exchanges or set your
                own rules</p>
            </div>
    
            <div className="section realign">
              <Link to="/raffle-hat"><img className="hat-icon" src={hatdrawLogo} alt="Hat Logo" />
                <h6 className="hat-caption">Raffle Hat</h6>
              </Link>
              <p className="hat-description">Pull names or numbers from this hat one at a time</p>
            </div>
          </div>
        </div>
        <footer className="bg-dark text-center text-light footer">
          <a className="footer-link" href="https://github.com/tymull/hatdraw-react.git">
            <p className="footer-text">Github Repository</p>
          </a>
        </footer>
    </div>
    );
};

export default Home;
