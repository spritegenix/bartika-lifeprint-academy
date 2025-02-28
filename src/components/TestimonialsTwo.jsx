"use client";
import { useRef } from "react";
import Slider from "react-slick";

const data = [
  {
    img: "/images/testimonials/testimonials-1.jpg",
    name: "Aarav Sharma",
    designation: "Software Engineer",
    quote:
      "The courses here have been a game-changer for me. The hands-on approach and expert guidance helped me excel in my field. Highly recommend!",
    rating: 5,
  },
  {
    img: "/images/testimonials/testimonials-2.jpg",
    name: "Priya Verma",
    designation: "Digital Marketer",
    quote:
      "Amazing learning experience! The courses are well-structured, and the instructors are highly knowledgeable.",
    rating: 5,
  },
  {
    img: "/images/testimonials/testimonials-3.jpg",
    name: "Neha Kapoor",
    designation: "Entrepreneur",
    quote:
      "Bartika Lifeprint Academy helped me rediscover my strengths and build confidence. The fingerprint decoding sessions were eye-opening!",
    rating: 5,
  },
  {
    img: "/images/testimonials/testimonials-4.jpg",
    name: "Rohan Malhotra",
    designation: "Business Consultant",
    quote:
      "I was skeptical at first, but the insights I gained about my personality and decision-making style were truly life-changing.",
    rating: 5,
  },
];

const TestimonialsTwo = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="testimonials-two py-120 position-relative z-1">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book" />
            </span>
            <h5 className="text-main-600 mb-0">
              Testimonials from Happy Learners
            </h5>
          </div>
          <h2 className="mb-24 wow bounceIn">What Our Students Say</h2>
          <p className=" wow bounceInUp">
            Our students' success stories speak volumes. Here are just a few
            testimonials from our satisfied learners
          </p>
        </div>
        <Slider
          ref={sliderRef}
          {...settings}
          className="testimonials-two-slider"
        >
          {data.map(({ img, name, designation, quote, rating }, index) => (
            <div
              className="testimonials-two-item bg-main-25 rounded-12 p-32"
              data-aos="fade-up"
              data-aos-duration={400}
              key={index}
            >
              <ul className="flex-align gap-8 mb-16">
                {[...Array(rating)].map(
                  (_, index) =>
                    index + 1 <= 5 && (
                      <li
                        key={index}
                        className="text-warning-600 text-xl d-flex"
                      >
                        <i className="ph-fill ph-star" />
                      </li>
                    )
                )}
              </ul>
              <p className="text-neutral-700 text-xl">"{quote}"</p>
              <div className="flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 mt-28 border-dashed border-0">
                <div className="flex-align gap-24 ">
                  <img
                    src="assets/images/thumbs/testi-img1.png"
                    alt=""
                    className="w-60 h-60 object-fit-cover rounded-circle"
                  />
                  <div className="">
                    <h5 className="mb-8 fw-medium">{name}</h5>
                    <span className="text-neutral-700">{designation}</span>
                  </div>
                </div>
                <span className="quate text-48 d-flex opacity-25">
                  <img src={img} alt="" />
                </span>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex-center gap-16 mt-40">
          <button
            type="button"
            id="testimonials-two-prev"
            onClick={() => sliderRef.current.slickPrev()}
            className=" slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48"
          >
            <i className="ph ph-caret-left" />
          </button>
          <button
            type="button"
            id="testimonials-two-next"
            onClick={() => sliderRef.current.slickNext()}
            className=" slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48"
          >
            <i className="ph ph-caret-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;
