import BlogGridInner from "@/components/BlogGridInner";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const revalidate = 60 * 60;

export const metadata = {
  title: "Blogs",
};

export function generateStaticParams() {
  const blogArray = blogs;
  return blogArray;
}

const page = (blogArray) => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blogs"} />

      {/* BlogGridInner */}
      <BlogGridInner blogArr />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
