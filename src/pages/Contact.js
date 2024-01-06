import FactFinder from "../FactFinder.js";

const Contact = () => {
    document.title = "Contact";
    return (
    <div className="flex-wrapper">
        <div className="page">
          <div className="section">
            <h2 className="page-header">Contact</h2>
          </div>
          <div className="section">
            <p className="constraints">Feel free to send me a message and let me know what you think.
              I am still building this website and am open to suggestions.</p>
            <form className="form-resize" method="POST" action="https://formspree.io/f/xrgdjkdj">
              <div className="form-group">
                <label className="label-instructions" for="clientEmail">Your email address:</label>
                <input type="email" name="email" className="form-control form-control-lg" id="clientEmail" aria-describedby="emailHelp" required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label className="label-instructions" for="contactMessage">Your message:</label>
                <textarea name="message" className="form-control form-control-lg" id="contactMessage" rows="10" required></textarea>
              </div>
              {/*If I don't want message to actually send with formspree then need
                to delete name attribute from above*/}
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>
            <FactFinder />
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

export default Contact;
