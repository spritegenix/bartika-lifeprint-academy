import { blogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";

const BlogDetailsInner = ({ data, slug }) => {
  console.log(slug);
  let date = data.createdAt.split("-");
  return (
    <div className="blog-page-section py-120">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="bg-main-25 rounded-16 p-12 border border-neutral-30">
              <div className="rounded-12 overflow-hidden position-relative">
                <img
                  src={data.image}
                  alt={data.title}
                  className="rounded-12 cover-img transition-2"
                />
                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">{date?.[0]}</h3>
                  {date?.[1]}
                </div>
              </div>
              <div className="pt-32 pb-24 px-16 position-relative">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24">
              <h4 className="mb-16">More Related Blogs</h4>

              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              {blogs
                .filter((blog) => blog.slug !== slug)
                .map((blog) => (
                  <React.Fragment key={blog.slug}>
                    <div className="flex-align gap-16">
                      <Link
                        href={blog.slug ? `/blog/${blog?.slug}` : `#`}
                        className="flex-shrink-0"
                      >
                        <img
                          src={blog.image}
                          alt={blog.title.slice(0, 5)}
                          className="w-80 h-80 rounded-8 object-fit-cover"
                        />
                      </Link>
                      <div className="flex-grow-1">
                        <h6 className="text-xl mb-10">
                          <Link
                            href={blog.slug ? `/blog/${blog?.slug}` : `#`}
                            className="hover-text-main-600 text-line-2"
                          >
                            {blog.title}
                          </Link>
                        </h6>
                        <span className="text-neutral-500">
                          {blog.createdAt}
                        </span>
                      </div>
                    </div>
                    <span className="d-block border border-neutral-30 my-24 border-dashed" />
                  </React.Fragment>
                ))}
            </div>
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24">
              <h4 className="mb-16">Popular Tag</h4>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <div className="flex-align flex-wrap gap-8">
                {data.tags.map((tag) => (
                  <p
                    key={tag}
                    className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsInner;
