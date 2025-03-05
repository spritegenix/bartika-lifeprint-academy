import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ContactInner from "@/components/ContactInner";
import FooterTwo from "@/components/FooterTwo";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact Us"} />

      {/* ContactInner */}
      <ContactInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterTwo />
    </>
  );
};

export default page;
