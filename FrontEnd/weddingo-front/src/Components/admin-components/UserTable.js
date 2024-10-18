import { useState } from "react";
import { FaDesktop, FaEdit, FaTrash } from "react-icons/fa";

export default function UserTable() {
  const [users, setUsers] = useState([
    {
      fullName: "John Doe",
      email: "john.doe@example.com",
      type: "user", // or "vendor"
    },
    {
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      type: "vendor", // or "user"
    },
    {
      fullName: "Michael Johnson",
      email: "michael.johnson@example.com",
      type: "user",
    },
    {
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      type: "vendor",
    },
  ]);
  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">الاسم</th>
            <th scope="col">البريد الالكتروني</th>
            <th scope="col">النوع</th>
            <th scope="col">تحكم</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <>
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.type === "user" ? (
                    <>
                      <span class="badge text-bg-primary">مستخدم</span>
                    </>
                  ) : (
                    <>
                      <span class="badge text-bg-warning">بائع</span>
                    </>
                  )}
                </td>
                <td className="d-flex flex-wrap gap-1 justify-content-center">
                  {/* <div class="dropup-center dropup">
                    <button
                      class="btn btn-secondary"
                      data-bs-toggle="dropdown"
                    >
                     <FaDesktop/>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          تعديل
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          حذف
                        </a>
                      </li>
                     
                     
                    </ul>
                  </div> */}

                  <button className="btn btn-danger" title="حذف">
                    <FaTrash />
                  </button>
                  <button className="btn btn-warning" title="تعديل">
                    <FaEdit className="text-light" />
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}
