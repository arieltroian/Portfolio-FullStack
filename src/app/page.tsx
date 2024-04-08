import Header from "@/components/header";
import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <div className="px-4 md:px-6 lg:px-20 xl:px-28">
        <Header />
        <HomePage />
        <ProjectsPage />
        <ContactPage />
      </div>
      <Footer />
    </main>
  );
}
