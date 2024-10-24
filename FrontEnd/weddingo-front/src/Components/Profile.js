import React, { useEffect, useState } from "react";
import WelcomeSection from "./WelcomeSection";
import VendorSection from "./VendorSection";
import NavBar from "./NavBar";
import { BASE_URL } from "../utils/config";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileLoading from "./loading-components/ProfileLoading";
function Profile() {
  const [loding, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // احصل على التوكين من localStorage
        const token = JSON.parse(localStorage.getItem("userData")).token;

        const response = await fetch(`${BASE_URL}/api/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // تحديث الحالة بالبيانات المستلمة
        setUserData(data.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loding ? (
        <>
          <ProfileLoading />
        </>
      ) : (
        <>
          {userData && (
            <>
              <NavBar role={userData.role} />
              <WelcomeSection
                name={userData.name}
                image={userData.image}
                fav={userData.favoret.length}
                services={userData.services.length}
              />
            </>
          )}
        </>
      )}
      <VendorSection />
    </>
  );
}

export default Profile;
