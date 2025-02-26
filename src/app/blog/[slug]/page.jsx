import BlogDetailsInner from "@/components/BlogDetailsInner";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import { blogs } from "@/data/blogs";
import Animation from "@/helper/Animation";

export const revalidate = 60 * 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await blogs?.find((blog) => blog?.slug === slug);
  return {
    title: blog?.title || "Blog Details",
  };
}

const IndividualBlogPage = async ({ params }) => {
  const { slug } = await params;
  const blog = await blogs?.find((blog) => blog.slug === slug);
  // console.log(blog);
  if (!blog) {
    notFound();
  }
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog Details"} />

      {/* BlogDetailsInner */}
      <BlogDetailsInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default IndividualBlogPage;
