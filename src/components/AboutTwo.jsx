const AboutTwo = () => {
  return (
    <section className="about-two py-120 position-relative z-1 bg-main-25">
      <div className="position-relative">
        <div className="container">
          <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
            <div className="col-xl-6 pe-xl-5">
              <div className="about-two__thumb position-relative">
                <img
                  src="assets/images/thumbs/about-two-img.png"
                  className="rounded-16 cover-img wow bounceIn"
                  alt="Bartika Lifeprint Academy"
                  data-tilt=""
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
                <span className="shadow-main-three w-80 h-80 flex-center bg-main-three-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown">
                  <img
                    src="assets/images/icons/bulb-icon.png"
                    className=""
                    alt="Bartika Lifeprint Academy"
                  />
                </span>
                <div className="offer-message  two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16 animation-upDown">
                  <span className="flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle">
                    <i className="ph ph-watch" />
                  </span>
                  <div>
                    <h6 className="mb-4">20% OFF</h6>
                    <span className="">For All Courses</span>
                  </div>
                </div>
                <div className="offer-message style-two  me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                  <span className="flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle">
                    <img src="assets/images/icons/stars-white.png" alt="" />
                  </span>
                  <div>
                    <span className="text-lg text-neutral-700 d-block">
                      4.6
                      <span className="text-neutral-100">(2.4k)</span>
                    </span>
                    <span className="text-neutral-500">AVG Reviews</span>
                  </div>
                </div>
                <div className="position-absolute inset-block-end-0 inset-inline-end-0 me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                  <div className="text-center">
                    <img
                      src="assets/images/icons/circle-progress.png"
                      className="d-sm-flex d-none mb-24"
                      alt=""
                    />
                    <h6 className="mb-4 text-neutral-700 text-2xl">Excelent</h6>
                    <span className="text-sm text-neutral-500">
                      90% Satisfied Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two-content">
                <div className="mb-40">
                  <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                    <span className="text-main-600 text-2xl d-flex">
                      <i className="ph-bold ph-book" />
                    </span>
                    <h5 className="text-main-600 mb-0">Why Choose Us</h5>
                  </div>
                  <h2 className="mb-24 wow bounceIn">
                    Helping Women Rediscover Their True Identity
                  </h2>
                  <p className="text-neutral-500 wow bounceInUp">
                    At Bartika Lifeprint Academy, we guide women who feel lost
                    to break free from self-doubt and rediscover their true
                    selves using Fingerprint Personality Decoding and
                    Mindfulness. This journey unlocks confidence, emotional
                    harmony, and self-mastery.
                  </p>
                </div>
                <div className="grid-cols-2">
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon1.png"
                        className="animate__swing"
                        alt="Strength Identification"
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        Identify Your Strengths
                      </h6>
                      <p className="text-neutral-500 ">
                        Leverage your natural strengths for personal and
                        professional growth.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon2.png"
                        className="animate__swing"
                        alt="Emotional Resilience"
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        Build Emotional Resilience
                      </h6>
                      <p className="text-neutral-500 ">
                        Understand and manage emotional patterns to create
                        lasting emotional balance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon3.png"
                        className="animate__swing"
                        alt="Financial Empowerment"
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        Financial Empowerment
                      </h6>
                      <p className="text-neutral-500 ">
                        Know your financial orientation and make empowered money
                        decisions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-align align-items-start gap-20 animation-item"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                  >
                    <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                      <img
                        src="assets/images/icons/choose-us-icon4.png"
                        className="animate__swing"
                        alt="Personal Growth"
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h6 className="text-neutral-800 text-xl fw-medium mb-8">
                        Personal Growth & Confidence
                      </h6>
                      <p className="text-neutral-500 ">
                        Make confident choices aligned with your true self.
                      </p>
                    </div>
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

export default AboutTwo;
