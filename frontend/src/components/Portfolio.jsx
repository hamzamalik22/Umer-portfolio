import React from "react";
import imgs from "../utils/images";

const Portfolio = () => {
  return (
    <>
      <>
        <article className="portfolio active">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            {/* <ul className="filter-list">
              <li className="filter-item">
                <button className="active" data-filter-btn>
                  All
                </button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web design</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Applications</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>

            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-selecct-value>
                  Select category
                </div>

                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>

              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item>All</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web design</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Applications</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web development</button>
                </li>
              </ul>
            </div> */}

            <ul className="project-list">
              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_1} alt="finance" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Finance</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_2} alt="orizon" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Orizon</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_3} alt="fundo" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Fundo</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_4} alt="brawlhalla" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Brawlhalla</h3>

                  <p className="project-category">Applications</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_5} alt="dsm." loading="lazy" />
                  </figure>

                  <h3 className="project-title">DSM.</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_6} alt="metaspark" loading="lazy" />
                  </figure>

                  <h3 className="project-title">MetaSpark</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_7} alt="summary" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Summary</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src={imgs.project_8}
                      alt="task manager"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Task Manager</h3>

                  <p className="project-category">Applications</p>
                </a>
              </li>

              <li className="project-item  active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={imgs.project_9} alt="arrival" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Arrival</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </>
    </>
  );
};

export default Portfolio;
