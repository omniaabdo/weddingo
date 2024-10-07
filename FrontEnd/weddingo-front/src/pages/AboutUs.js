import { useEffect } from "react";
import AboutSection from "../Components/AboutSection";
import Breadcrumb from "../Components/Breadcrumb";
import NewsListSection from "../Components/NewsListSection";
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title={"ABOUT US"} active_link={"about"} />
      <AboutSection />
      <NewsListSection />
    </>
  );
}
