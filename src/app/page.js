import AvailableTutors from "@/Component/AvailableTutors";
import Banner from "@/Component/Banner/Banner";
import Collaboration from "@/Component/Collaboration";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <section>
        <Banner />
      </section>

      <section>
        <AvailableTutors />
      </section>

      <section>
        <Collaboration />
      </section>
    </div>
  );
}
