"use client";

import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import PreLoad from "@/components/preload";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <main>
      {loading ? (
        <PreLoad />
      ) : (
        <div>
          <div className="px-4 md:px-6 lg:px-10">
            <Header />
          </div>
          <div className="px-4 md:px-6 lg:px-20 xl:px-28">
            <HomePage />
            <ProjectsPage />
            <ContactPage />
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
}
