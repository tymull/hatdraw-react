import { Link } from "react-router-dom";
import hatdrawLogo from "../images/hatdraw-logo.svg";

const Home = () => {
    document.title = "Hat Draw Machine";
    return (
    <div class="flex-wrapper">
        <div class="page">
          <h2 class="section page-header">Pick a Hat</h2>
          <div class="section main-section">
    
    
            <div class="section realign">
              <Link to="/exchange-hat"><img class="hat-icon" src={hatdrawLogo} alt="Hat Logo" />
                <h2 class="hat-caption">Exchange Hat</h2>
              </Link>
              <p class="hat-description">Randomly pair a list of people together for gift exchanges or set your
                own rules</p>
            </div>
    
            <div class="section realign">
              <Link to="/raffle-hat"><img class="hat-icon" src={hatdrawLogo} alt="Hat Logo" />
                <h6 class="hat-caption">Raffle Hat</h6>
              </Link>
              <p class="hat-description">Pull names or numbers from this hat one at a time</p>
            </div>
          </div>
        </div>
        <footer class="bg-dark text-center text-light footer">
          <a class="footer-link" href="https://github.com/tymull/hatdraw-react.git">
            <p class="footer-text">Github Repository</p>
          </a>
        </footer>
    </div>
    );
};

export default Home;
