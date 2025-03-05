import BlogGridInner from "@/components/BlogGridInner";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import { blogs } from "@/data/blogs";
import Animation from "@/helper/Animation";

// export const revalidate = 60 * 60;

export const metadata = {
  title: "Blogs",
};


const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blogs"} />

      {/* BlogGridInner */}
      <BlogGridInner blogArray={blogs} />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
