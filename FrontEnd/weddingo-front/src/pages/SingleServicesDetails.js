import { useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import NewsListSection from "../Components/NewsListSection";
import ServiceDetail from "../Components/ServiceDetail";

export default function SingleServicesDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
      <ServiceDetail />
      <NewsListSection />
    </>
  );
}
