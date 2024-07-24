import React, { useEffect } from "react";
import imgs from "../utils/images";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../store/actions/AboutActions";
import { fetchTestimonial } from "../store/actions/TestimonialActions";

const About = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.about);
  const { testList, testLoading, testError } = useSelector(
    (state) => state.testimonial
  );

  useEffect(() => {
    dispatch(fetchAbout());
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const {
    para1,
    para2,
    service_1_title,
    service_1_description,
    service_2_title,
    service_2_description,
    service_3_title,
    service_3_description,
    service_4_title,
    service_4_description,
  } = list;

  console.log("hello", testList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (testLoading) return <p>Loading...</p>;
  if (testError) return <p>Error: {testError}</p>;

  return (
    <>
      <article className="about  active">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>{para1}</p>

          <p>{para2}</p>
        </section>

        {/* service  */}

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={imgs.icon_design} alt="design icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service_1_title}</h4>

                <p className="service-item-text">{service_1_description}</p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src={imgs.icon_dev}
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service_2_title}</h4>

                <p className="service-item-text">{service_2_description}</p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={imgs.icon_app} alt="mobile app icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service_3_title}</h4>

                <p className="service-item-text">{service_3_description}</p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={imgs.icon_photo} alt="camera icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service_4_title}</h4>

                <p className="service-item-text">{service_4_description}</p>
              </div>
            </li>
          </ul>
        </section>

        {/* testimonials */}

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            {testList.map((item, index) => (
              <li key={index} className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src={
                        item.gender === "Male" ? imgs.avatar_1 : imgs.avatar_2
                      }
                      alt=""
                      width="60"
                    />
                  </figure>

                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    {item.name}
                  </h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>{item.message}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* testimonials */}

        {/* <div className="modal-container" data-modal-container>
            <div className="overlay" data-overlay></div>

            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img
                    src={imgs.avatar_1}
                    alt="Daniel lewis"
                    width="80"
                    data-modal-img
                  />
                </figure>

                <img src={imgs.icon_quote} alt="quote icon" />
              </div>

              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title>
                  Daniel lewis
                </h4>

                <time dateTime="2021-06-14">14 June, 2021</time>

                <div data-modal-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </section>
          </div> */}

        {/* client  */}

        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_1_color} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_2_color} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_3_color} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_4_color} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_5_color} alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src={imgs.logo_6_color} alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default About;
