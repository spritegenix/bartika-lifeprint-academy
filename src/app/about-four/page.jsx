import AboutFourV2 from "@/components/AboutFourV2";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CounterThreeV2 from "@/components/CounterThreeV2";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import PopularTeacherOne from "@/components/PopularTeacherOne";
import ReviewOne from "@/components/ReviewOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "EduAll - LMS, Tutors, Education & Online Course NEXT JS Template",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us 04"} />

      {/* AboutFourV2 */}
      <AboutFourV2 />

      {/* CounterThree */}
      <CounterThreeV2 />

      {/* PopularTeacherOne */}
      <PopularTeacherOne />

      {/* ReviewOne */}
      <ReviewOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
