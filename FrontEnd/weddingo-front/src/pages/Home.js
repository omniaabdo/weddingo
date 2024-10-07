import HeroSection from "../Components/home-component/HeroSection";
import HomeSingleService from "../Components/home-component/HomeSingleService";
import Services from "../Components/home-component/Services";

/*Dresses Images */
import dress_1 from "../assets/img/single-services/dresses/1.jpg";
import dress_2 from "../assets/img/single-services/dresses/2.jpg";
import dress_3 from "../assets/img/single-services/dresses/3.jpg";
import dress_4 from "../assets/img/single-services/dresses/4.jpg";
/*Care Rent img */
import car_1 from "../assets/img/single-services/cars/1.jpg";
import car_2 from "../assets/img/single-services/cars/2.jpg";
import car_3 from "../assets/img/single-services/cars/3.jpg";
import car_4 from "../assets/img/single-services/cars/4.jpg";
/*locations Rent img */
import location_1 from "../assets/img/single-services/locations/1.jpg";
import location_2 from "../assets/img/single-services/locations/2.jpg";
import location_3 from "../assets/img/single-services/locations/3.jpg";
import location_4 from "../assets/img/single-services/locations/4.jpg";
import NewsListSection from "../Components/NewsListSection";
import { useEffect } from "react";

const singleServiceData = [
  {
    sup_title: "Find a wedding dress that's uniquely you",
    title: "Dress catalog",
    des: "Discover the latest trends in wedding dresses by top designers and bridesmaid dresses. Choose your favorite from our catalog!",
    go_to: "/about",
    data: [
      {
        name: "Carolena Mecatora",
        img: dress_1,
      },
      {
        name: "classes Style",
        img: dress_2,
      },
      {
        name: "Modern Close",
        img: dress_3,
      },
      {
        name: "Joane Malkom",
        img: dress_4,
      },
    ],
    dir: "ltr",
  },
  {
    sup_title: "Find the Perfect Ride for Your Journey",
    title: "Car Rental Catalog",
    des: "Explore our wide range of vehicles for rent, from economy cars to luxury models. Choose the perfect car for your trip!",
    go_to: "/rentals",
    data: [
      {
        name: "Ford Mustang",
        img: car_1,
      },
      {
        name: "Chevrolet Camaro",
        img: car_2,
      },
      {
        name: "Tesla Model 3",
        img: car_3,
      },
      {
        name: "BMW X5",
        img: car_4,
      },
    ],
    dir: "rtl",
  },
  {
    sup_title: "Find the Perfect Wedding Location",
    title: "Wedding Venue Catalog",
    des: "Explore breathtaking wedding venues that cater to your every desire. Choose the perfect location to celebrate your special day!",
    go_to: "/venues",
    data: [
      {
        name: "Sunset Beach Resort",
        img: location_1,
      },
      {
        name: "Mountain View",
        img: location_2,
      },
      {
        name: "Royal Garden Palace",
        img: location_3,
      },
      {
        name: "Lakeside Villa",
        img: location_4,
      },
    ],
    dir: "ltr",
  },
];

export default function Home() {

  useEffect(()=>{},[
    window.scrollTo(0,0)
  ])
  return (
    <>
      <HeroSection />
      <Services />
      {singleServiceData.map((item) => (
        <HomeSingleService
          dir={item.dir}
          sup_title={item.sup_title}
          title={item.title}
          des={item.des}
          go_to={item.go_to}
          data={item.data}
        />
      ))}
      <NewsListSection />
    </>
  );
}
