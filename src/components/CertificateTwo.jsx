const CertificateTwo = () => {
  return (
    <section className="certificate-two py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
      <div className="section-heading text-center">
        <h2 className="mb-24 wow bounceIn">Certified Programs</h2>
        <p className=" wow bounceInUp">
          Empower yourself with our unique courses designed to unlock your true
          potential through self-discovery and personal growth.
        </p>
      </div>
      <div className="position-relative">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 pe-lg-5">
              <div
                className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28"
                data-aos="fade-up"
                data-aos-duration={200}
              >
                <div className="flex-align gap-20 mb-12">
                  <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                    <i className="animate__wobble ph-bold ph-medal" />
                  </span>
                  <h5 className="mb-0">
                    Guidance from Experts in Self-Mastery
                  </h5>
                </div>
                <p className="text-neutral-700 text-line-2">
                  Learn from experienced mentors who specialize in
                  self-awareness, emotional resilience, and confidence-building.
                </p>
              </div>
              <div
                className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28"
                data-aos="fade-up"
                data-aos-duration={400}
              >
                <div className="flex-align gap-20 mb-12">
                  <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                    <i className="animate__wobble ph-bold ph-clock" />
                  </span>
                  <h5 className="mb-0">
                    Learn at Your Own Pace, Anytime, Anywhere
                  </h5>
                </div>
                <p className="text-neutral-700 text-line-2">
                  Our flexible programs allow you to grow and transform at a
                  pace that suits your lifestyle and commitments.
                </p>
              </div>
              <div
                className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div className="flex-align gap-20 mb-12">
                  <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                    <i className="animate__wobble ph-bold ph-star" />
                  </span>
                  <h5 className="mb-0">
                    Exclusive Resources for Personal Transformation
                  </h5>
                </div>
                <p className="text-neutral-700 text-line-2">
                  Gain access to guided exercises, expert insights, and valuable
                  tools to help you master your emotions and mindset.
                </p>
              </div>
              <div
                className="certificate-two-item animation-item"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="flex-align gap-20 mb-12">
                  <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                    <i className="animate__wobble ph-bold ph-chart-line-up" />
                  </span>
                  <h5 className="mb-0">
                    Skill-Based Learning for Confidence & Success
                  </h5>
                </div>
                <p className="text-neutral-700 text-line-2">
                  Our courses focus on practical skills that help you make
                  confident decisions, improve relationships, and achieve
                  personal fulfillment.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="certificate-two__thumb">
                <img
                  src="assets/images/thumbs/certificate-two-img.png"
                  alt="Bartika Lifeprint Academy Certificate"
                  data-tilt=""
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateTwo;
