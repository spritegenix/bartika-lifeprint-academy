import Link from "next/link";

const CourseDetails = ({ data }) => {
  console.log(data);
  return (
    <section className="course-details py-120">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-8">
            {/* Details Content Start */}
            <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12">
              <img src={data.image} alt="" className="rounded-8 cover-img" />
              <div className="p-20">
                <h2 className="mt-24 mb-24">Course Overview</h2>
                <p className="text-neutral-700">{data.overview.intro}</p>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h3 className="mb-16">What You'll Gain:</h3>
                <ul className="list-dotted d-flex flex-column gap-24">
                  {data.overview.keyTakeaways.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h4 className="mb-16">Who Is This Course For?</h4>
                <ul className="list-dotted d-flex flex-column gap-24">
                  {data.whoIsThisFor.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h4 className="mb-16">Key Learning Outcomes:</h4>
                <ul className="list-dotted d-flex flex-column gap-24">
                  {data.learningOutcomes.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Details Content End */}
            {/* Curriculum Start */}
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
              <h5 className="mb-0">Curriculum</h5>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <div
                className="accordion common-accordion style-three"
                id="accordionExampleTwo"
              >
                {data.curriculum.map((item, index) => (
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseThreeTwo" + index}
                        aria-expanded="false"
                        aria-controls="collapseThreeTwo"
                      >
                        Module {index + 1}: {item.title}
                      </button>
                    </h2>
                    <div
                      id={"collapseThreeTwo" + index}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body p-0">
                        <ul className="list-dotted d-flex flex-column gap-24">
                          {item.lessons.map((item, index) => (
                            <li>
                              <strong>
                                Lesson {index + 1}: {item.title} -{" "}
                              </strong>
                              <span className="text-neutral-700">
                                {item.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Curriculum End */}

            {/* Call to action Start */}
            <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12  mt-24">
              <div className="p-20">
                <h4 className="mb-16">Call to Action</h4>
                <p className="text-neutral-700 mb-16">{data.cta.text}</p>
                <ul className="list-dotted d-flex flex-column gap-24 mb-16">
                  {data.cta.points.map((item) => (
                    <li>
                      <p dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-700">{data.cta.lastText}</p>
              </div>
            </div>
            {/* Call to action End */}
            {/* Bonuses Start */}
            <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12  mt-24">
              <div className="p-20">
                <h4 className="mb-16">Bonuses</h4>
                <ul className="list-dotted d-flex flex-column gap-24 mb-16">
                  {data.bonuses.map((item) => (
                    <li>
                      <b>{item.title} - </b> <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Bonuses End */}
          </div>
          <div className="col-xl-4">
            <div className="course-details__sidebar border border-neutral-30 rounded-12 bg-white p-8">
              <div className="border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25">
                <span className="text-neutral-700 text-lg mb-12">Price</span>
                <div className="flex-align align-items-start flex-wrap gap-8 border-bottom border-neutral-40 pb-24 mb-24">
                  <div className="flex-align gap-12 text-neutral-700">
                    <span className="text-2xl d-flex">
                      <i className="ph-bold ph-tag" />
                    </span>
                    <span className="">From</span>
                    <h2 className="mb-0">$99.99</h2>
                  </div>
                  <button
                    type="button"
                    className="text-neutral-500 text-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Initial Price"
                  >
                    <i className="ph-bold ph-info" />
                  </button>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      <i className="ph ph-watch" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Courses Title
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Web Development
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-video-camera" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Lessons
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    16 Videos
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      <i className="ph ph-globe" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Language
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    English
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-chart-pie" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Course Level
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Beginner
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-star" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Reviews
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    4.7(5.5k)
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-question" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Quizzes
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">08</span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-clock" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Duration
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    7 Weeks
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-users" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Students
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    2.5k
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-certificate" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Certifications
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Yes
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-seal-percent" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Pass Percentage
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    88%
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-calendar-dot" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Deadline
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    01 Jun, 2024
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Instructor{" "}
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Denial Lie
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-main rounded-pill flex-center gap-8 mt-40"
                >
                  See All Reviews
                  <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                </Link>
                <div className="mt-24 flex-center gap-24">
                  <button
                    type="button"
                    className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1"
                  >
                    <i className="ph-bold ph-shopping-cart-simple" />
                  </button>
                  <div className="dropdown flex-shrink-0">
                    <button
                      className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ph-bold ph-share-network" />
                    </button>
                    <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                      <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                        <div className="card-body p-16">
                          <ul className="social-list flex-align gap-8">
                            <li className="social-list__item">
                              <a
                                href="https://www.facebook.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-facebook-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                href="https://www.twitter.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-twitter-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                href="https://www.linkedin.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-instagram-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                href="https://www.pinterest.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-pinterest-logo" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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

export default CourseDetails;
