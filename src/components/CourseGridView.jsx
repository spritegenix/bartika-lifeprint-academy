import { courses } from "@/app/courses/data";
import Link from "next/link";

const CourseGridView = () => {
  return (
    <section className="course-grid-view py-120">
      <div className="container">
        <div className="row gy-4">
          {courses.map((course) => (
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link
                    href={course.slug ? `/courses/${course.slug}` : "#"}
                    className="w-100 h-100"
                  >
                    {course?.image && (
                      <img
                        src={course?.image}
                        alt="Course Image"
                        className="course-item__img rounded-12 cover-img transition-2"
                      />
                    )}
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
                        href={course.slug ? `/courses/${course.slug}` : "#"}
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
    </section>
  );
};

export default CourseGridView;
