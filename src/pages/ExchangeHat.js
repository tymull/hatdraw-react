const ExchangeHat = () => {
    document.title = "Exchange Hat";
    return (
    <div className="flex-wrapper">
        <div className="page">
          <div className="section">
            <h2 className="page-header">Exchange Hat</h2>
          </div>
          <div className="section main-section">
            <div className="section">
              <form>
                <div className="form-group">
                  <label className="label-instructions" for="exchangeHatTextarea">Enter
                    each entry (name, number, etc.) on its own line in the field below.
                    You can also upload a previous list.</label>
                  <textarea className="form-control form-control-lg" id="exchangeHatTextarea" rows="7" placeholder="Name 1"></textarea>
                  {/*Could have done something like "Name 1&#10;Name 2&#10;etc..." to show lines, but it doesn't work on safari or iphones. Would need
                    to use jQuery for that*/}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Draw</button>
                </div>
              </form>
            </div>
            <div className="section">
              <p className="p-description">This hat is great for gift exchanges or setting up random partners
                from a list. You can select people that must specifically give or
                receive from someone in particular, while keeping the rest random. You
                can send the results to a list of emails if you provide them, or you
                can save your own copy.</p>
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

export default ExchangeHat;
