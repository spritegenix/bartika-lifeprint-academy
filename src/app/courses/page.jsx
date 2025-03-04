import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import CourseGridView from "@/components/CourseGridView";
import FooterOne from "@/components/FooterOne";
import FooterTwo from "@/components/FooterTwo";
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
      <Breadcrumb title={"Courses"} />

      {/* CourseGridView */}
      <CourseGridView />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default page;
