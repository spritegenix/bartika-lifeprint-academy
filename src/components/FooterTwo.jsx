import { courses } from "@/app/courses/data";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className="footer bg-neutral-900 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape five animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape one animation-scalation"
      />
      <div className="py-120 ">
        <div className="container container-two">
          <div className="row gy-5">
            <div
              className="col-lg-3 col-sm-6 col-xs-6"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Quick Link
                </h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      href="/about-us"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      href="http://blogs.bartikalifeprintacademy.com"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      href="/contact-us"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Courses
                </h4>
                <ul className="footer-menu">
                  {courses.map((course) => (
                    <li className="mb-16">
                      <Link
                        href={course.slug ? `/courses/${course.slug}` : "#"}
                        className="text-white hover-text-main-600 hover-text-decoration-underline"
                      >
                        {course.title.split(`–`)[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Contact Us
                </h4>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-phone" />
                  </span>
                  <div className="">
                    <Link
                      href="tel:+91 6266044430"
                      className="text-white d-block hover-text-main-600 mb-4"
                    >
                      +91 6266044430
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-envelope-open" />
                  </span>
                  <div className="">
                    <Link
                      href="/mailto:eduAll@gmail.com"
                      className="text-white d-block hover-text-main-600 mb-0"
                    >
                      info@bartikalife.com
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-0">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-map-trifold" />
                  </span>
                  <div className="">
                    <span className="text-white d-block mb-4">
                      502, Canal Kinship
                    </span>
                    <span className="text-white d-block mb-0">
                      Salaiya, Bhopal MP
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-6"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Subscribe Here
                </h4>
                <p className="text-white">
                  Enter your email address to register to our newsletter
                  subscription
                </p>
                <form action="#" className="mt-24 position-relative">
                  <input
                    type="email"
                    className="form-control bg-neutral-700 placeholder-white shadow-none border border-neutral-700 text-white rounded-pill h-52 ps-24 pe-48 focus-border-main-600"
                    placeholder="Email..."
                  />
                  <button
                    type="submit"
                    className="w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                  >
                    <i className="ph ph-paper-plane-tilt" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* bottom Footer */}
        <div className="bottom-footer border-top border-dashed border-neutral-600 border-0 py-32">
          <div className="container container-two">
            <div className="bottom-footer__inner flex-between gap-16 flex-wrap">
              <div className="footer-item__logo mb-0" data-aos="zoom-in-right">
                <Link href="/">
                  {" "}
                  <img src="/assets/images/logo/logo-white.png" alt="" />
                </Link>
              </div>
              <p
                className="text-white text-line-1 fw-normal"
                data-aos="zoom-in"
              >
                {" "}
                Copyright © 2025{" "}
                <span className="fw-semibold">
                  Bartika Lifeprint Academy.
                </span>{" "}
                All Rights Reserved. Designed and Developed by{" "}
                <Link href="https://www.spritegenix.com" target="_blank">
                  Sprite Genix
                </Link>
              </p>
              <ul
                className="social-list flex-align gap-24"
                data-aos="zoom-in-left"
              >
                <li className="social-list__item">
                  <Link
                    href="https://www.instagram.com/lifeprintcoachbartika?igsh=MTNycjdhYmlvNXBlMA=="
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-instagram-logo" />
                  </Link>
                </li>
                <li className="social-list__item">
                  <Link
                    href="http://www.youtube.com/@brainnyou-aapkibartika"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-youtube-logo" />
                  </Link>
                </li>
                <li className="social-list__item">
                  <Link
                    href="https://www.linkedin.com/in/bartika-sharma-06aab01b4"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-linkedin-logo" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
