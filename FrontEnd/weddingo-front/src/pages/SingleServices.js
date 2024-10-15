import { useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Services from "../Components/Services";
import MinBreadcrumb from "../Components/MinBreadcrumb";

export default function SingleServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Breadcrumb title={"Services"} active_link={"/services"} /> */}
      <MinBreadcrumb
          links={[
            { title: "الخدمات", link: "/services" },
          ]}
        />
      <Services />
    </>
  );
}
