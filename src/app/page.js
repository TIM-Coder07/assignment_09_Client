import AvailableTutors from "@/Component/AvailableTutors";
import Banner from "@/Component/Banner/Banner";
import Collaboration from "@/Component/Collaboration";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
  <section>
    <Banner />
  </section>

  <section className="mt-10">
    <AvailableTutors />
  </section>

  <section className="mt-10">
    <Collaboration></Collaboration>
  </section>
</div>
  );
}
