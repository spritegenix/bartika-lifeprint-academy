templete - https://nextjs.eduall.wowtheme7.com/index-2





import { courses } from "@/app/courses/data";
import Link from "next/link";

const ExploreCourseTwo = () => {
  return (
    <section className="explore-course py-120 bg-main-25 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape six animation-scalation"
      />
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book" />
            </span>
            <h5 className="text-main-600 mb-0">Our Courses</h5>
          </div>
          <h2 className="mb-24 wow bounceIn">
            Transform Your Life with Our Signature Courses
          </h2>
          <p className=" wow bounceInUp">
            Explore powerful courses designed to help you break free from
            self-doubt, discover your true potential, and create a fulfilling
            life.
          </p>
        </div>
        <div className="text-center">
          <div
            className="nav-tab-wrapper bg-white p-16 mb-40 d-inline-block"
            data-aos="zoom-out"
          >
            <ul
              className="nav nav-pills common-tab gap-16"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active"
                  id="pills-all-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-all"
                  type="button"
                  role="tab"
                  aria-controls="pills-all"
                  aria-selected="true"
                >
                  <i className="text-xl d-flex ph-bold ph-squares-four" />
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-level1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-level1"
                  type="button"
                  role="tab"
                  aria-controls="pills-level1"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-magic-wand" />
                  Level 1
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-level2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-level2"
                  type="button"
                  role="tab"
                  aria-controls="pills-level2"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-magic-wand" />
                  Level 2
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-level2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-level2"
                  type="button"
                  role="tab"
                  aria-controls="pills-level2"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-magic-wand" />
                  Level 3
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-level3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-level3"
                  type="button"
                  role="tab"
                  aria-controls="pills-level3"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-magic-wand" />
                  Level 4
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {/* all courses */}
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              {courses
                .filter((course) => course.category.includes("all"))
                .map((course) => (
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-duration={200}
                  >
                    <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <Link
                          href={course.slug ? `/courses/${course.slug}` : "#"}
                          className="w-100 h-100"
                        >
                          <img
                            src={course.image}
                            alt="Course Image"
                            className="course-item__img rounded-12 cover-img transition-2"
                          />
                        </Link>
                        <button
                          type="button"
                          className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                        >
                          <i className="ph ph-heart" />
                        </button>
                      </div>
                      <div className="course-item__content">
                        <div className="">
                          <h4 className="mb-28">
                            <Link
                              href={
                                course.slug ? `/courses/${course.slug}` : "#"
                              }
                              className="link text-line-2"
                            >
                              {course.title}
                            </Link>
                          </h4>
                          <p>{course.metaDescription}</p>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                          <h4 className="mb-0 text-main-two-600"></h4>
                          <Link
                            href={course.slug ? `/courses/${course.slug}` : "#"}
                            className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                            tabIndex={0}
                          >
                            View Detail
                            <i className="ph ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Level 1  */}
          <div
            className="tab-pane fade show active"
            id="pills-level1"
            role="tabpanel"
            aria-labelledby="pills-level1-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              {courses
                .filter((course) => course.category.includes("level-1"))
                .map((course) => (
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-duration={200}
                  >
                    <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <Link
                          href={course.slug ? `/courses/${course.slug}` : "#"}
                          className="w-100 h-100"
                        >
                          <img
                            src={course.image}
                            alt="Course Image"
                            className="course-item__img rounded-12 cover-img transition-2"
                          />
                        </Link>
                        <button
                          type="button"
                          className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                        >
                          <i className="ph ph-heart" />
                        </button>
                      </div>
                      <div className="course-item__content">
                        <div className="">
                          <h4 className="mb-28">
                            <Link
                              href={
                                course.slug ? `/courses/${course.slug}` : "#"
                              }
                              className="link text-line-2"
                            >
                              {course.title}
                            </Link>
                          </h4>
                          <p>{course.metaDescription}</p>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                          <h4 className="mb-0 text-main-two-600"></h4>
                          <Link
                            href={course.slug ? `/courses/${course.slug}` : "#"}
                            className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                            tabIndex={0}
                          >
                            View Detail
                            <i className="ph ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Level 2  */}
          <div
            className="tab-pane fade show active"
            id="pills-level2"
            role="tabpanel"
            aria-labelledby="pills-level2-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              {courses
                .filter((course) => course.category.includes("level-2"))
                .map((course) => (
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-duration={200}
                  >
                    <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <Link
                          href={course.slug ? `/courses/${course.slug}` : "#"}
                          className="w-100 h-100"
                        >
                          <img
                            src={course.image}
                            alt="Course Image"
                            className="course-item__img rounded-12 cover-img transition-2"
                          />
                        </Link>
                        <button
                          type="button"
                          className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                        >
                          <i className="ph ph-heart" />
                        </button>
                      </div>
                      <div className="course-item__content">
                        <div className="">
                          <h4 className="mb-28">
                            <Link
                              href={
                                course.slug ? `/courses/${course.slug}` : "#"
                              }
                              className="link text-line-2"
                            >
                              {course.title}
                            </Link>
                          </h4>
                          <p>{course.metaDescription}</p>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                          <h4 className="mb-0 text-main-two-600"></h4>
                          <Link
                            href={course.slug ? `/courses/${course.slug}` : "#"}
                            className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                            tabIndex={0}
                          >
                            View Detail
                            <i className="ph ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Level 3  */}
          <div
            className="tab-pane fade show active"
            id="pills-level3"
            role="tabpanel"
            aria-labelledby="pills-level3-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              {courses
                .filter((course) => course.category.includes("level-3"))
                .map((course) => (
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-duration={200}
                  >
                    <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <Link
                          href={course.slug ? `/courses/${course.slug}` : "#"}
                          className="w-100 h-100"
                        >
                          <img
                            src={course.image}
                            alt="Course Image"
                            className="course-item__img rounded-12 cover-img transition-2"
                          />
                        </Link>
                        <button
                          type="button"
                          className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                        >
                          <i className="ph ph-heart" />
                        </button>
                      </div>
                      <div className="course-item__content">
                        <div className="">
                          <h4 className="mb-28">
                            <Link
                              href={
                                course.slug ? `/courses/${course.slug}` : "#"
                              }
                              className="link text-line-2"
                            >
                              {course.title}
                            </Link>
                          </h4>
                          <p>{course.metaDescription}</p>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                          <h4 className="mb-0 text-main-two-600"></h4>
                          <Link
                            href={course.slug ? `/courses/${course.slug}` : "#"}
                            className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                            tabIndex={0}
                          >
                            View Detail
                            <i className="ph ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Level 4  */}
          <div
            className="tab-pane fade show active"
            id="pills-level4"
            role="tabpanel"
            aria-labelledby="pills-level4-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              {courses
                .filter((course) => course.category.includes("level-4"))
                .map((course) => (
                  <div
                    className="col-lg-4 col-sm-6 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-duration={200}
                  >
                    <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                      <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <Link
                          href={course.slug ? `/courses/${course.slug}` : "#"}
                          className="w-100 h-100"
                        >
                          <img
                            src={course.image}
                            alt="Course Image"
                            className="course-item__img rounded-12 cover-img transition-2"
                          />
                        </Link>
                        <button
                          type="button"
                          className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                        >
                          <i className="ph ph-heart" />
                        </button>
                      </div>
                      <div className="course-item__content">
                        <div className="">
                          <h4 className="mb-28">
                            <Link
                              href={
                                course.slug ? `/courses/${course.slug}` : "#"
                              }
                              className="link text-line-2"
                            >
                              {course.title}
                            </Link>
                          </h4>
                          <p>{course.metaDescription}</p>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                          <h4 className="mb-0 text-main-two-600"></h4>
                          <Link
                            href={course.slug ? `/courses/${course.slug}` : "#"}
                            className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                            tabIndex={0}
                          >
                            View Detail
                            <i className="ph ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/courses"
              className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40"
            >
              See All Courses
              <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourseTwo;
