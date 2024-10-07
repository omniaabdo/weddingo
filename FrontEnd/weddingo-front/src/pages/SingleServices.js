import { useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Services from "../Components/Services";

export default function SingleServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title={"Services"} active_link={"/services"} />
      <Services />
    </>
  );
}
