import FactFinder from "../FactFinder.js";

const Contact = () => {
    document.title = "Contact";
    return (
    <div class="flex-wrapper">
        <div class="page">
          <div class="section">
            <h2 class="page-header">Contact</h2>
          </div>
          <div class="section">
            <p class="constraints">Feel free to send me a message and let me know what you think.
              I am still building this website and am open to suggestions.</p>
            <form class="form-resize" method="POST" action="https://formspree.io/f/xrgdjkdj">
              <div class="form-group">
                <label class="label-instructions" for="clientEmail">Your email address:</label>
                <input type="email" name="email" class="form-control form-control-lg" id="clientEmail" aria-describedby="emailHelp" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label class="label-instructions" for="contactMessage">Your message:</label>
                <textarea name="message" class="form-control form-control-lg" id="contactMessage" rows="10" required></textarea>
              </div>
              {/*If I don't want message to actually send with formspree then need
                to delete name attribute from above*/}
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>
            </form>
            <FactFinder />
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

export default Contact;
