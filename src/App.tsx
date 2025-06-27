import "./App.css";

function App() {
  return (
    <>
      <body>
        <header>
          <span className="logo">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              YaraLogo
            </a>
          </span>
          <div>
            <select name="options" className="opt">
              <option selected value="one">
                One
              </option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
            </select>

            <button type="button" className="help-icon">
              ??
            </button>
            <button type="button" className="profile-icon">
              P
            </button>
            <button type="button" className="menu-icon">
              M
            </button>
          </div>
        </header>

        <main>
          <aside>
            <nav>
              <ul>
                <li>Home</li>
                <li>Events</li>
                <li>NEws</li>
                <li>Podcasts</li>
              </ul>
            </nav>
          </aside>

          <div className="container">
            <section className="hero">
              <h3 className="hero__title">Welcome Martin</h3>
              <p className="hero__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, qui. Eveniet eum, facere ex fugiat deleniti.
              </p>
            </section>

            <div className="content">
              {/* <!-- Section 1 --> */}
              <section className="section section--solutions">
                <h5 className="section__subTitle">Section subtitle 1</h5>
                <h3 className="section__title">Section title 1</h3>

                <div className="flex-container">
                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>
                </div>
              </section>

              {/* <!-- Section 2 --> */}
              <section className="section section--featured">
                <h5 className="section__subTitle">Section subtitle 2</h5>
                <h3 className="section__title">Section title 2</h3>

                <div className="flex-container">
                  <article className="card card--horizontal">
                    <div className="flex-container">
                      <figure>
                        <img
                          src="src/assets/fertilizer_list.jpeg"
                          alt="image"
                        />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card card--horizontal card--horizontal-reversed max-width-100">
                    <div className="flex-container">
                      <figure>
                        <img
                          src="src/assets/fertilizer_list.jpeg"
                          alt="image"
                        />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>
                </div>
              </section>

              {/* <!-- Section 3 --> */}
              <div className="flex-container">
                <section className="section section--events">
                  <div className="flex-container space-between">
                    <h3 className="section__title">Section title 3</h3>
                    <button className="button--with-border" type="button">
                      See all
                    </button>
                  </div>

                  <div className="flex-container">
                    <article className="card">
                      <figure>
                        <img src="src/assets/soil.jpg" alt="image" />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                      <div className="card__cta">
                        <button type="button">Button</button>
                      </div>
                    </article>

                    <article className="card">
                      <figure>
                        <img src="src/assets/soil.jpg" alt="image" />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                      <div className="card__cta">
                        <button type="button">Button</button>
                      </div>
                    </article>
                  </div>
                </section>

                <section className="section section--podcast column">
                  <div className="flex-container space-between">
                    <h3 className="section__title">Section title 3</h3>
                    <button className="button--with-border" type="button">
                      See all
                    </button>
                  </div>

                  <article className="card card--horizontal max-width-100">
                    <div className="flex-container">
                      <figure>
                        <img src="src/assets/soil.jpg" alt="image" />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card card--horizontal max-width-100">
                    <div className="flex-container">
                      <figure>
                        <img src="src/assets/soil.jpg" alt="image" />
                      </figure>
                      <div className="card__content">
                        <span className="card__content-title">Card title</span>
                        <span className="card__content-subtitle">
                          Card subtitle
                        </span>
                        <p className="card__content-description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquid aliquam hic dolore cupiditate repellat
                          quo! Reiciendis, reprehenderit vel.
                        </p>
                      </div>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>
                </section>
              </div>

              {/* <!-- Section 4 --> */}
              <section className="section section--news">
                <div className="flex-container space-between">
                  <h3 className="section__title">Section title 4</h3>
                  <button type="button">See all</button>
                </div>

                <div className="flex-container">
                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>

                  <article className="card">
                    <figure>
                      <img src="src/assets/soil.jpg" alt="image" />
                    </figure>
                    <div className="card__content">
                      <span className="card__content-title">Card title</span>
                      <span className="card__content-subtitle">
                        Card subtitle
                      </span>
                      <p className="card__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid aliquam hic dolore cupiditate repellat
                        quo! Reiciendis, reprehenderit vel.
                      </p>
                    </div>
                    <div className="card__cta">
                      <button type="button">Button</button>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
