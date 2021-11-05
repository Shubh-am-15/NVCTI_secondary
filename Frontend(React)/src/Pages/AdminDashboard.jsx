import React, { useEffect, Suspense, lazy } from "react";
import AdminEventForm from "../components/Admin/AdminEventForm";
import Loading from "../components/common/Loading";
import Header from "../Header";
// const AdminHeader = lazy(() => import("../components/Admin/adminDashboard/header"));
// const AdminMain = lazy(() => import("../components/Admin/adminDashboard/main"));

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | NVCTI";
    document.body.style.backgroundColor = "#eef5f9";
    return () => (document.body.style.backgroundColor = null);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
        <Header />
        <AdminEventForm />
      {/* <AdminHeader />
      <AdminMain /> */}
    </Suspense>
  )
};

export default AdminDashboard;
