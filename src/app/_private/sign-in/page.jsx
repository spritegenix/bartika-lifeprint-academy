import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SignInInner from "@/components/SignInInner";
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
      <Breadcrumb title={"Sign In"} />

      {/* SignInInner */}
      <SignInInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
