import { useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import NewsListSection from "../Components/NewsListSection";
import ServiceDetail from "../Components/ServiceDetail";
import MinBreadcrumb from "../Components/MinBreadcrumb";

export default function SingleServicesDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
     <MinBreadcrumb
          links={[
            { title: "الخدمات", link: "/services" },
            { title: "التفاصيل", link: "services/service-detail" },
          ]}
        />
      <ServiceDetail />
      <NewsListSection />
    </>
  );
}
