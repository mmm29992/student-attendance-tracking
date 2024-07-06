"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Dashboard() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return <div>dashboard</div>;
}
