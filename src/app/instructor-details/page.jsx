import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import CourseAllOne from "@/components/CourseAllOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorDetails from "@/components/InstructorDetails";
import TestimonialsTwo from "@/components/TestimonialsTwo";
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
      <Breadcrumb title={"Instructors Details"} />

      {/* InstructorDetails */}
      <InstructorDetails />

      {/* CourseAllOne */}
      <CourseAllOne />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
