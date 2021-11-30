import Link from "next/link";
import AboutUsSection from "../sections/AboutUsSection";
import HeaderSection from "../sections/HeaderSection";
import LandingSection from "../sections/LandingSection";
import MeetTheTeamSection from "../sections/MeetTheTeamSection";
import NumbersSection from "../sections/NumbersSection";
import TestimonialSection from "../sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <LandingSection />
      <AboutUsSection />
      <NumbersSection />
      <TestimonialSection />
      <MeetTheTeamSection />
    </>
  );
}
