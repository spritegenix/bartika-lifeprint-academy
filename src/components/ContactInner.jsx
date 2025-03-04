import { courses } from "@/app/courses/data";

const ContactInner = () => {
  return (
    <>
      <section className="contact py-120">
        <div className="container">
          <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
              <span className="text-main-600 text-2xl d-flex">
                <i className="ph-bold ph-book" />
              </span>
              <h5 className="text-main-600 mb-0">Get In Touch</h5>
            </div>
            <h2 className="mb-24">Let us help you</h2>
            <p className="">
              Explore our transformative programs designed to help you step into
              your true potential.
            </p>
          </div>
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-map-pin-line" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Main Office</h4>
                  <p className="text-neutral-500">
                    502, Canal Kinship Salaiya, Bhopal MP
                  </p>
                  <a
                    href="#"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Find Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-envelope-open" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Email Address</h4>
                  <p className="text-neutral-500">info@.bartikalife.com</p>
                  <br />
                  <a
                    href="mailto:infoexample@gmail.com"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-phone-call" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Phone Number</h4>
                  <p className="text-neutral-500">+91 6266044430</p>
                  <br />
                  <a
                    href="tel:+91 6266044430"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Contact Us Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section py-240 bg-main-25 position-relative z-1">
        <img
          src="assets/images/bg/wave-bg.png"
          alt=""
          className="position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none"
        />
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="join-community__content">
                <div className="mb-40">
                  <h2 className="mb-24 wow bounceIn">
                    Get in Touch – Start Your Transformation Today!
                  </h2>
                  <p className="text-neutral-500 wow bounceInUp">
                    Have questions or ready to begin your journey of
                    self-discovery? Fill out the form below, and we’ll get back
                    to you soon!
                  </p>
                </div>
                <form action="#">
                  <div
                    className="mb-24 position-relative"
                    data-aos="fade-up-left"
                    data-aos-duration={400}
                  >
                    <input
                      type="text"
                      className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100"
                      placeholder="Enter Name..."
                    />
                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                      <i className="ph-bold ph-user-circle" />
                    </span>
                  </div>
                  <div
                    className="mb-24 position-relative"
                    data-aos="fade-up-left"
                    data-aos-duration={600}
                  >
                    <input
                      type="email"
                      className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100"
                      placeholder="Enter Email"
                    />
                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                      <i className="ph-bold ph-envelope-open" />
                    </span>
                  </div>
                  <div
                    className="mb-24 position-relative"
                    data-aos="fade-up-left"
                    data-aos-duration={800}
                  >
                    <select className="bg-white text-black border border-transparent focus:border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100 text-neutral-300">
                      <option value={""} disabled selected>
                        Select a Course
                      </option>
                      {courses.map((course) => (
                        <option key={course.slug} value={course.slug}>
                          {course.title}
                        </option>
                      ))}
                    </select>

                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                      <i className="ph-bold ph-book" />
                    </span>
                  </div>
                  <div className="mb-24">
                    <textarea
                      id="desc"
                      className="common-input rounded-24 border-transparent focus-border-main-600 h-110"
                      placeholder="Enter Your Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div
                    className="mt-40 position-relative"
                    data-aos="fade-up-left"
                    data-aos-duration={1000}
                  >
                    <button
                      type="submit"
                      className="btn btn-main rounded-pill flex-align d-inline-flex gap-8"
                    >
                      Join Now
                      <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-community__thumb text-end position-relative">
                <img
                  src="assets/images/photos/Untitled  (526 x 526 px) (1).png"
                  alt=""
                  className="wow bounceIn"
                  data-tilt=""
                  data-tilt-max={12}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
                <div className="offer-message style-two px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                  <span className="banner-box__icon flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle">
                    <i className="ph-bold ph-users" />
                  </span>
                  <div className="text-start">
                    <h6 className="mb-4">2K</h6>
                    <span className="">All Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
