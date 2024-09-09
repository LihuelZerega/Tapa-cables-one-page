import NavBar from "@/components/home/nav-bar"
import HeroSection from "@/components/home/hero-section"
import AboutUs from "@/components/home/about-us"
import TheSecret from "@/components/home/the-secret";
import OurProduct from "@/components/home/our-product";
import ComparationTable from "@/components/home/comparation-table";
import ProductAndServices from "@/components/home/product-and-services";
import CallToAction from "@/components/home/call-to-action";
import Testimonial from "@/components/home/testimonial";
import Faq from "@/components/home/faq";
import ContactForm from "@/components/home/contact-form";
import Footer from "@/components/home/footer"

export default function Home() {
  return (
    <main>
      {/* <NavBar /> */}
      <HeroSection />
      <AboutUs />
      <TheSecret />
      <hr className="my-12"/>
      <ProductAndServices />
      <OurProduct />
      <ComparationTable />
      {/* <CallToAction /> */}
      {/* <Testimonial /> */}
      {/* <Faq /> */}
      {/* <hr /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </main>
  );
}
