import RaffleForm from "../RaffleForm.js";
const RaffleHat = () => {
    document.title = "Raffle Hat";
    return (
    <div class="flex-wrapper">
        <div class="page">
          <div class="section">
            <h2 class="page-header">Raffle Hat</h2>
          </div>
          <RaffleForm/>
        </div>
        <footer class="bg-dark text-center text-light footer">
          <a class="footer-link" href="https://github.com/tymull/hatdraw-react.git">
            <p class="footer-text">Github Repository</p>
          </a>
        </footer>
    </div>
    );
};

export default RaffleHat;
