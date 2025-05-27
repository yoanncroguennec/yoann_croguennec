"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router
import AnimationIntro from "@/app/components/animations/portfolio/intro/AnimationIntro";

export default function Page() {
  // const router = useRouter();
  // const delay = 5;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/screens/portfolio/home");
  //   }, delay * 1000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return <AnimationIntro />;
}
