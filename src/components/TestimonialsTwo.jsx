"use client";
import { useRef } from "react";
import Slider from "react-slick";

const data = [
  {
    img: "/assets/images/photos/woman.png",
    name: "iBeam Academy",
    designation: "Academy",
    quote:
      "Bartika’s insightful decoding of the Genetic Brain profiling is always a jaw dropping moment .She gets to the core of the challenge faced by a client and suggests corrections in behavior in the calmest and surest way . The confidence  in her tone and clarity in expression is a treat . As a mentee , with expansive exoerience as a life coach myself , she furthers my knowledge of GBP and decoding comprehensively . A big salute to her humility .",
    rating: 5,
  },
  {
    img: "/assets/images/photos/rachel.jpg",
    name: "Rachel Chithra",
    designation: "User",
    quote:
      "Mam Interpreted my hubby's GBP report ...we are so happy to hear the way she explained made a lot of sense to us...mam is the best...my hubby being logical also said yes mam it's perfect.",
    rating: 5,
  },
  {
    img: "/assets/images/photos/boomika.jpg",
    name: "Bhoomika Sharma",
    designation: "Deputy Manager",
    quote:
      "I have done my family's brain profiling with Bartika Madam. I must say that she is the master of her profession. I got in-depth analysis of personality of all my family members. This will help in a great extent to make so many decisions. Recommended.",
    rating: 5,
  },
  {
    img: "/assets/images/photos/tejvir.jpg",
    name: "Tejvir Sadana",
    designation: "Hypnotherapist",
    quote:
      "Recently, Experienced the Services by Bartika Madam. Her Understanding and Knowledge of Fingerprints is Highly Appreciated for she could help us arrive at the findings which opened up many possibilities.",
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
              <p className="text-neutral-700 text-xl text-line-4">"{quote}"</p>
              <div className="flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 mt-28 border-dashed border-0">
                <div className="flex-align gap-24 ">
                  <img
                    src={img}
                    alt=""
                    className="w-60 h-60 object-fit-cover rounded-circle"
                  />
                  <div className="">
                    <h5 className="mb-8 fw-medium">{name}</h5>
                    <span className="text-neutral-700">{designation}</span>
                  </div>
                </div>
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
