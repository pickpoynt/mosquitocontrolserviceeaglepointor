import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WellPressureTankInfo from "@/components/landing/WellPressureTankInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Well pressure tank replacement West Bloomfield - West Bloomfield Well Tank Replacement Pros (877) 792-1410</title>
        <meta name="description" content="Well pressure tank replacement West Bloomfield - Professional well pressure tank services in West Bloomfield, MI. Serving 48322, 48323, 48324, 48325. Expert diagnostics and rapid tank replacement. Call (877) 792-1410." />
        <meta name="keywords" content="Well pressure tank replacement West Bloomfield, West Bloomfield well tank service, well tank installation MI, 48322 well repair, 48323 pressure tank replacement" />
        <link rel="canonical" href="https://wellpressuretankreplacementwestbloomfield.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Bloomfield Well Tank Replacement Pros",
            "image": "/1.jpeg",
            "@id": "https://wellpressuretankreplacementwestbloomfield.com/",
            "url": "https://wellpressuretankreplacementwestbloomfield.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7001 Orchard Lake Rd",
              "addressLocality": "West Bloomfield",
              "addressRegion": "MI",
              "postalCode": "48322",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.5856",
              "longitude": "-83.3324"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Well Pressure Tank Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "West Bloomfield Well Tank Replacement Pros"
            },
            "areaServed": [
              { "@type": "City", "name": "West Bloomfield, MI" },
              { "@type": "PostalCode", "name": "48322" },
              { "@type": "PostalCode", "name": "48323" },
              { "@type": "PostalCode", "name": "48324" },
              { "@type": "PostalCode", "name": "48325" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "West Bloomfield Well Tank Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Tank Diagnosis" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Well Tank Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Switch Calibration" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Well pressure tank replacement West Bloomfield - West Bloomfield Well Tank Replacement Pros" />
        <meta property="og:description" content="Professional well pressure tank replacement in West Bloomfield, MI. Fast diagnostics and guaranteed installation. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wellpressuretankreplacementwestbloomfield.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Well pressure tank replacement <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase">West Bloomfield</span>
            </>
          }
          subtitle="West Bloomfield's premier well service specialists. We provide rapid-response pressure tank diagnostics and professional replacement to restore your water pressure today — guaranteed."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="WEST BLOOMFIELD WELL SERVICES"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <WellPressureTankInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
