import HeroSection from "@/components/home/hero-section";
import AboutUs from "@/components/home/about-us";
import TheSecret from "@/components/home/the-secret";
import OurProduct from "@/components/home/our-product";
import ComparationTable from "@/components/home/comparation-table";
import ProductAndServices from "@/components/home/product-and-services";
import CallToAction from "@/components/home/call-to-action";
import WorksCarriedOut from "@/components/home/works-carried-out";
import Testimonial from "@/components/home/testimonial";
import WorkingTogether from "@/components/home/working-together";
import WhatSay from "@/components/home/what-say";
import Faq from "@/components/home/faq";
import ContactForm from "@/components/home/contact-form";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <TheSecret />
      <ProductAndServices />
      <OurProduct />
      <ComparationTable />
      <hr className="my-12" />
      <WorkingTogether />
      <WorksCarriedOut />
      <WhatSay />
      <hr />
      <Faq />
      <hr />
      <ContactForm />
      <Footer />
    </main>
  );
}
