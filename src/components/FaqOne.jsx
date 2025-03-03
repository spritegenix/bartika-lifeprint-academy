const FaqOne = () => {
  return (
    <section className="faq py-120 position-relative">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 d-lg-block d-none">
            <div className="faq-thumb">
              <img
                src="assets/images/thumbs/faq-img.png"
                alt=""
                data-tilt=""
                data-tilt-max={6}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="mb-40">
                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                  <span className="text-main-600 text-2xl d-flex">
                    <i className="ph-bold ph-book" />
                  </span>
                  <h5 className="text-main-600 mb-0">
                    Frequently Asked Questions (FAQs)
                  </h5>
                </div>
                <h2 className="mb-24 wow bounceIn">
                  Find Answers to Your Questions
                </h2>
                <p className="text-neutral-500 text-line-2  wow bounceInUp">
                  Welcome to our FAQs section! Here, we've compiled answers to
                  some of the most common questions our users ask.
                </p>
              </div>
              <div className="accordion common-accordion" id="accordionExample">
                <div
                  className="accordion-item"
                  data-aos="fade-up-left"
                  data-aos-duration={400}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Who are these courses for?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordion-body__desc">
                        These courses are for women 35+ who want to awaken their
                        inner power, build confidence, and create lasting peace
                        and harmony in their personal and professional lives.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up-left"
                  data-aos-duration={600}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What makes your coaching unique?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordion-body__desc">
                        I use unique method of Fingerprint interpretation for
                        talent mapping, beside this my coaching follows a
                        structured transformation journey, combining mindset
                        shifts, practical tools, and guided exercises to create
                        deep, lasting change.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up-left"
                  data-aos-duration={800}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I choose the right course?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordion-body__desc">
                        Start with Find Your SPARK if you're seeking
                        self-discovery, move to Shine Your LIGHT for confidence,
                        Taper to TORCH for structured transformation, and Fan
                        the FLAME for self-mastery and impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up-left"
                  data-aos-duration={1000}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What kind of support will I get?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordion-body__desc">
                        You’ll receive workbooks, exercises, and practical
                        challenges, plus live Q&A, private community access, and
                        personalized coaching in higher-level courses.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up-left"
                  data-aos-duration={1200}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How long do I have access to the course?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordion-body__desc">
                        You get lifetime access, so you can learn at your own
                        pace and revisit the materials anytime for
                        continued growth.
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

export default FaqOne;
