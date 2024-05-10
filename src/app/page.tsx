"use client";

import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
