import { useEffect } from 'react';
import Breadcrumb from '../Components/Breadcrumb'
import ContactSection from "../Components/ContactSection";
import NewsListSection from "../Components/NewsListSection";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title={"تواصل معنا الان"} active_link={"contact"} active_title={'تواصل معنا'} />
      <ContactSection />
      <NewsListSection />
    </>
  );
}
