import Link from "next/link";

const BlogGridInner = () => {
  return (
    <div className="blog-page-section py-120">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6">
            <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
              <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <Link href="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/blog-two-img1.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>
              <div className="pt-32 pb-24 px-16 position-relative">
                <h4 className="mb-28">
                  <Link href="/blog-details" className="link text-line-2">
                    Navigating the Job Market: Advice for Graduates
                  </Link>
                </h4>
                <div className="flex-align gap-14 flex-wrap my-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    href="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                    tabIndex={0}
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridInner;
