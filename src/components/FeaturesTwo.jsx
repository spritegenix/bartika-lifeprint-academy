import Link from "next/link";

const FeaturesTwo = () => {
  return (
    <section className="features-two half-bg py-120 position-relative overflow-hidden">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape six animation-walking"
      />
      <div className="container">
        <div className="section-heading style-flex">
          <div className="section-heading__inner">
            <h2 className="mb-24 wow bounceInLeft">
              Transform Your Life: From Self-Doubt to Self-Mastery
            </h2>
          </div>
          <div className="section-heading__content wow bounceInRight">
            <p className="text-line-3">
              At Bartika Lifeprint Academy, we help women rediscover their true
              selves, build confidence, and achieve personal and professional
              success.
            </p>
            <Link
              href="/course-list-view"
              className="item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold"
            >
              Explore Our Programs
              <i className="ph ph-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={200}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon1.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Self-Discovery, Growth & Empowerment
              </h4>
              <p className="transition-1 item-hover__text ">
                Decode your personality through Fingerprint Analysis and
                Mindfulness to understand your strengths, communication style,
                and life path.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon2.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Build Confidence & Emotional Resilience
              </h4>
              <p className="transition-1 item-hover__text ">
                Learn to overcome self-doubt, manage emotions, and make life
                choices aligned with your true self.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon3.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Certified Programs & Personalized Guidance
              </h4>
              <p className="transition-1 item-hover__text ">
                Our programs offer certifications and one-on-one mentoring,
                helping you achieve personal and professional success.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
