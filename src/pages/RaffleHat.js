import RaffleForm from "../RaffleForm.js";
const RaffleHat = () => {
    document.title = "Raffle Hat";
    return (
    <div className="flex-wrapper">
        <div className="page">
          <div className="section">
            <h2 className="page-header">Raffle Hat</h2>
          </div>
          <RaffleForm/>
        </div>
        <footer className="bg-dark text-center text-light footer">
          <a className="footer-link" href="https://github.com/tymull/hatdraw-react.git">
            <p className="footer-text">Github Repository</p>
          </a>
        </footer>
    </div>
    );
};

export default RaffleHat;
