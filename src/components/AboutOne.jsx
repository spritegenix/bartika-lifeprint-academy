"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutOne = () => {
  return (
    <section className="about py-120 position-relative z-1 mash-bg-main mash-bg-main-two">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape one animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape four animation-scalation"
      />
      <div className="position-relative">
        <div className="container">
          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div className="col-xl-6">
              <div className="about-thumbs position-relative pe-lg-5">
                <img
                  src="assets/images/shapes/shape7.png"
                  alt=""
                  className="shape seven animation-scalation"
                />
                <div className="offer-message px-24 py-12 rounded-12 bg-main-two-50 fw-medium flex-align d-inline-flex gap-16 border border-neutral-30 animation-upDown">
                  <span className="flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle">
                    <i className="ph ph-watch" />
                  </span>
                  <div>
                    <h6 className="mb-4">20% OFF</h6>
                    <span className="text-neutral-500">For All Courses</span>
                  </div>
                </div>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <img
                      src="assets/images/thumbs/about-img1.png"
                      alt=""
                      className="rounded-12 w-100"
                      data-tilt=""
                      data-tilt-max={15}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="flex-align gap-24 mb-24">
                      <div
                        className="bg-main-600 rounded-12 text-center py-24 px-2 w-50-percent"
                        data-aos="fade-right"
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className="mb-0 text-white counter">
                              {isVisible ? <CountUp  end={20} /> : null}
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className="text-white">Years of experience</span>
                      </div>
                      <div
                        className="bg-neutral-700 rounded-12 text-center py-24 px-2 w-50-percent"
                        data-aos="fade-left"
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className="mb-0 text-white counter">
                              {isVisible ? <CountUp end={500} /> : null}
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className="text-white">No. of Classes</span>
                      </div>
                    </div>
                    <img
                      src="assets/images/thumbs/about-img2.png"
                      alt=""
                      className="rounded-12 w-100"
                      data-tilt=""
                      data-tilt-max={20}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content">
                <div className="mb-40">
                  <div className="flex-align gap-8 mb-16 wow bounceInDown">
                    <span className="w-8 h-8 bg-main-600 rounded-circle" />
                    <h5 className="text-main-600 mb-0 ">
                      About Bartika Lifeprint Academy
                    </h5>
                  </div>
                  <h2 className="mb-24 wow bounceIn">
                    Discover the Power of Self-Awareness & Transformation
                  </h2>
                  <p className="text-neutral-500  wow bounceInUp">
                    At Bartika Lifeprint Academy, we empower women to break free
                    from self-doubt and rediscover their true identity.
                  </p>
                </div>
                <div
                  className="flex-align align-items-start gap-28 mb-32"
                  data-aos="fade-left"
                  data-aos-duration={200}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img src="assets/images/icons/about-img1.png" alt="" />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">Our Mission</h4>
                    <p className="text-neutral-500">
                      Imagine a world where every woman truly understands
                      herself—where she feels confident, fulfilled, and aligned
                      with her purpose. This doesn’t just bring peace within her
                      but also within her family and relationships.
                    </p>
                  </div>
                </div>
                <div
                  className="flex-align align-items-start gap-28 mb-0"
                  data-aos="fade-left"
                  data-aos-duration={400}
                >
                  <span className="w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                    <img src="assets/images/icons/about-img2.png" alt="" />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="text-neutral-500 mb-12">Our Vision</h4>
                    <p className="text-neutral-500">
                      To help 100,000 women rediscover their true selves, build
                      a strong identity, lead with confidence, and create
                      lasting harmony in their lives and the world around them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
