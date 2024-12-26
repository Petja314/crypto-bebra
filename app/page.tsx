import Header from "@/components/Header";
import SectionHero from "@/components/SectionHero";
import SolidityUniversity from "@/components/SolidityUniversity";
import YtVideo from "@/components/YTVideo";
import StudyInfo from "@/components/StudyInfo";
import Accordion from "@/components/Accordion";
import Lectors from "@/components/Lectors";
import Faq from "@/components/FAQ";
import WidgetContact from "@/components/WidgetContact";
import Footer from "@/components/Footer";
import CourseSignIn from "@/components/CourseSignIn";
import { ModalProvider } from "@/shared/hooks/ModalContext ";

export default function Home() {
  return (
    <ModalProvider>
      <div className={"bg-[#FEFAFC]"}>
        <section className={"bg-[#060606]  rounded-b-[30px]"}>
          <Header />
          <SectionHero />
        </section>
        <YtVideo />
        <SolidityUniversity />
        <StudyInfo />
        <Accordion />
        <Lectors />
        <Faq />
        <WidgetContact />
        <Footer />
        <CourseSignIn />
      </div>
    </ModalProvider>
  );
}