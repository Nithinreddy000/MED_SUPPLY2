"use client";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Cal from "../../assets/Calendar.png";
import Chart from "../../assets/Chart.png";
import Chart_fill from "../../assets/Chart_fill.png";
import Chat from "../../assets/Chat.png";
import Search from "../../assets/Search.png";
import user from "../../assets/User.png";

export default function HospitalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const MENUS = [
    { title: "Dashboard", src: Chart_fill },
    {
      title: "Inventory",
      src: Chat,
      submenu: [
        { title: "View inventory", route: "/pages/hospital/Inventory" },
        { title: "Inventory Statistics", route: "/pages/hospital/Inventory" },
      ],
    },
    {
      title: "Orders",
      src: user,
      submenu: [
        { title: "View Orders", route: "/pages/hospital/Orders" },
        {
          title: "Request New Order",
          route: "/pages/hospital/Orders/NewOrder",
        },
        { title: "Orders status", route: "/pages/hospital/Orders/Status" },
        { title: "Track your order", route: "/pages/hospital/Orders/Tracking" },
      ],
    },
    {
      title: "Testings",
      src: Cal,
      submenu: [
        { title: "View Testings", route: "/pages/hospital/Testing" },
        {
          title: "Request New Testing",
          route: "/pages/hospital/Testing/NewTesting",
        },
        { title: "Testing Status", route: "/pages/hospital/Testing/Status" },
        { title: "View Laboratories", route: "" },
      ],
    },
    {
      title: "Vendors",
      src: Search,
      submenu: [
        { title: "View Vendors", route: "/pages/hospital/vendors" },
        { title: "Market place", route: "" },
        { title: "Feedback", route: "" },
      ],
    },
    { title: "Analytics", src: Chart, route: "/Analytics" },
  ];
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <div className="w-fit">
        <Sidebar MENUS={MENUS} />
      </div>

      <div className="w-full h-full">
        <div className="px-3 p-1 h-fit">
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        </div>
        <div className="my-4 px-7 w-full h-[92%]">{children}</div>
      </div>
    </div>
  );
}
