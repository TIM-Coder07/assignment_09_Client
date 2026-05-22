import AboutPage from "@/Component/AboutPage";
import AvailableTutors from "@/Component/AvailableTutors";
import Banner from "@/Component/Banner/Banner";
import Collaboration from "@/Component/Collaboration";

export default function Home() {
  return (
    <main className="w-full">
      <section>
        <Banner />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 py-10">
        <AvailableTutors />
        <Collaboration />
        <AboutPage />
      </div>
    </main>
  );
}