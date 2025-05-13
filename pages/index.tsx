import IntroSection from "@/src/components/IntroSection";
import { mockIntroData } from "@/src/mockData/mockIntroData";
export default function Home() {
  return (
    <div>
      <main>
        {/* INTRO  */}

        <IntroSection introData={mockIntroData} />
      </main>
    </div>
  );
}
