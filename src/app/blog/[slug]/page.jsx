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
  const blog = blogs?.find((blog) => blog?.slug === slug);
  return {
    title: blog?.title || "Blog Details",
  };
}

const IndividualBlogPage = ({ params }) => {
  const { slug } = params;
  const blog = blogs?.find((blog) => blog.slug === slug);
  // console.log(slug);
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
      <Breadcrumb title={blog?.title} />

      {/* BlogDetailsInner */}
      <BlogDetailsInner data={blog} slug={slug} />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default IndividualBlogPage;
