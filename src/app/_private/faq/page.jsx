import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FAQInnerOne from "@/components/FAQInnerOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TestimonialsThree from "@/components/TestimonialsThree";
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
      <Breadcrumb title={"FAQ"} />

      {/* FAQInnerOne */}
      <FAQInnerOne />

      {/* TestimonialsThree */}
      <TestimonialsThree />

      {/* BrandTwo */}
      <BrandTwo />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
