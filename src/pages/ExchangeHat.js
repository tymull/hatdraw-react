const ExchangeHat = () => {
    document.title = "Exchange Hat";
    return (
    <div class="flex-wrapper">
        <div class="page">
          <div class="section">
            <h2 class="page-header">Exchange Hat</h2>
          </div>
          <div class="section main-section">
            <div class="section">
              <form>
                <div class="form-group">
                  <label class="label-instructions" for="exchangeHatTextarea">Enter
                    each item (name, number, etc.) on its own line in the field below.
                    You can also upload a previous list.</label>
                  <textarea class="form-control form-control-lg" id="exchangeHatTextarea" rows="7" placeholder="Name 1"></textarea>
                  {/*Could have done something like "Name 1&#10;Name 2&#10;etc..." to show lines, but it doesn't work on safari or iphones. Would need
                    to use jQuery for that*/}
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Draw</button>
                </div>
              </form>
            </div>
            <div class="section">
              <p class="p-description">This hat is great for gift exchanges or setting up random partners
                from a list. You can select people that must specifically give or
                receive from someone in particular, while keeping the rest random. You
                can send the results to a list of emails if you provide them, or you
                can save your own copy.</p>
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

export default ExchangeHat;
