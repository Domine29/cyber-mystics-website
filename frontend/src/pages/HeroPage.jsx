import "./HeroPage.css";

export default function HeroPage() {
  return (
    <div>
      <div className="hero-page">
        <header>
          <a href="#">
            <img
              href="#"
              className="cm-logo"
              src="/static/hero-page/cm-logo.svg"
            />
          </a>

          <nav>
            <ul>
              <li>
                <a href="/" className="active">
                  HOME
                </a>
              </li>
              <li>
                <a href="/">JOURNAL</a>
              </li>
              <li>
                <a href="#">DREAM</a>
              </li>
              <li>
                <a href="#">TAROT</a>
              </li>
              <li>
                <a href="#">ACCOUNT</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <div className="left-col">
            <h1 className="heading">Enter a New Realm</h1>
            <p className="subheading">
              Cyber Mystics build and hone their intuitive powers while setting
              out to know themselves through analyzing symbols from dreams,
              literature, mythologies, and tarot.
            </p>
            <div className="cta-btns">
              <a href="#" className="primary-cta">
                Daily Tarot
              </a>
              <a href="#" className="primary-cta">
                Dream Journal
              </a>
            </div>
            <div className="quote-container">
              <p className="quote">
                Myths are public dreams. Dreams are private myths. Finding your
                own dream and following it will lead you to the myth-world in
                which you live.
              </p>
              <p className="quote-author">~ Joseph Campbell</p>
              <img
                src="/static/hero-page/cloud-left.svg"
                alt=""
                className="cloud-left"
              />
              <img
                src="/static/hero-page/cloud-right.svg"
                alt=""
                className="cloud-right"
              />
            </div>
          </div>
          <div className="right-col">
            <div className="cyber-mystic-container">
              <img
                className="cyber-mystic"
                src="/static/hero-page/cyber-mystic.svg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
