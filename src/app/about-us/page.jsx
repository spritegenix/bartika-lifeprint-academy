import AboutOne from "@/components/AboutOne";
import AboutTwo from "@/components/AboutTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateTwo from "@/components/CertificateTwo";
import FeaturesTwo from "@/components/FeaturesTwo";
import FooterThree from "@/components/FooterThree";
import FooterTwo from "@/components/FooterTwo";
import HeaderOne from "@/components/HeaderOne";
import InfoSectionOne from "@/components/InfoSectionOne";
import JoinCommunityOne from "@/components/JoinCommunityOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutOne */}
      <AboutOne />

      {/* FeaturesTwo */}
      <FeaturesTwo />

      {/* InfoSectionOne */}
      <InfoSectionOne />

      {/* AboutTwo */}
      <AboutTwo />

      {/* CertificateTwo */}
      <CertificateTwo />

      {/* JoinCommunityOne */}
      <JoinCommunityOne />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default page;
