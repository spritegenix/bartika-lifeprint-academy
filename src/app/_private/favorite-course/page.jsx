import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FavoriteCourseInner from "@/components/FavoriteCourseInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
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
      <Breadcrumb title={"Favorite Courses"} />

      {/* FavoriteCourseInner */}
      <FavoriteCourseInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
