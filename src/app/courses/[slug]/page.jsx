import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import CourseDetails from "@/components/CourseDetails";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";
import { courses } from "../data";
import FooterTwo from "@/components/FooterTwo";

export async function generateMetadata({ params }) {
  const courseObject = courses.find((course) => course.slug === params.slug);
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: courseObject.title,
  };
}

const IndividualCoursePage = ({ params }) => {
  const courseObject = courses.find((course) => course.slug === params.slug);
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={courseObject.title} />

      {/* CourseDetails */}
      <CourseDetails data={courseObject} />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterTwo />
    </>
  );
};

export default IndividualCoursePage;
