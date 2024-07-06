import Image from "next/image";
import layout from "../layout";
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";

export default function SideNave() {
  
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={"/logo.svg"} width={180} height={50} alt="logo" />
      <hr className="my-5" /> 
      {menuList.map((menu, index) => (
        <h2 className="flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-2">
          <menu.icon /> 
          {menu.name}
        </h2>
      ))}

      <div> </div>
    </div>
  );
}
