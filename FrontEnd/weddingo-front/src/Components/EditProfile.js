import EditProfileSection from "./EditProfileSection";
import MinBreadcrumb from "./MinBreadcrumb";

export default function EditProfile() {
  return (
    <>
      <MinBreadcrumb
        links={[
          { title: "الملف الشخصي", link: "/profile" },
          { title: "تعديل الملف الشخصي", link: "/profile/edit-profile" },
        ]}
      />
      <EditProfileSection />
    </>
  );
}
