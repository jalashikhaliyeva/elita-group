import IntroSection from "@/src/components/IntroSection";
import { IntroServiceData } from "@/src/types";
import { fetchIntroServices } from "./api/services/fetchIntroCategories";

interface HomeProps {
  introData: IntroServiceData[];
}

export default function Home({ introData }: HomeProps) {
  return (
    <div>
      <main>
        <IntroSection introData={introData} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const introData = await fetchIntroServices();
    
    if (!introData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        introData,
      },
    };
  } catch (error) {
    console.error("Error fetching intro services:", error);
    return {
      props: {
        introData: [],
      },
    };
  }
}