import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MosquitoInfo from "@/components/landing/MosquitoInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Eagle Point OR Mosquito Control Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Eagle Point, OR";
  const zipCodes = "97524, 97501, 97504, 97525, 97540, 97502";
  const fullKeyword = "mosquito control service Eagle Point OR 97524";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://mosquitocontrolserviceeaglepointor.vercel.app/",
    "url": "https://mosquitocontrolserviceeaglepointor.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Eagle Point",
      "addressLocality": "Eagle Point",
      "addressRegion": "OR",
      "postalCode": "97524",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.4746,
      "longitude": -122.8028
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullKeyword,
    "provider": {
      "@type": "LocalBusiness",
      "name": firmName
    },
    "areaServed": [
      { "@type": "City", "name": "Eagle Point, OR" },
      { "@type": "PostalCode", "name": "97524" },
      { "@type": "PostalCode", "name": "97501" },
      { "@type": "PostalCode", "name": "97504" },
      { "@type": "PostalCode", "name": "97525" },
      { "@type": "PostalCode", "name": "97540" },
      { "@type": "PostalCode", "name": "97502" }
    ],
    "description": `Professional ${fullKeyword}. Expert backyard barrier sprays, larval control, and special event mosquito treatments in ${location} ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized mosquito elimination and barrier sprays in ${location}. Call ${phoneNumber} now for 24/7 rapid dispatch. Serving ZIP codes ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, mosquito removal Jackson County OR, backyard spray Eagle Point 97524, pest control Oregon, mosquito treatment Rogue Valley`} />
        <link rel="canonical" href="https://mosquitocontrolserviceeaglepointor.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Mosquito Control Service <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Eagle Point OR</span>
            </>
          }
          subtitle="Eagle Point OR's certified mosquito elimination specialists. We deploy barrier sprays, larval growth inhibitors, and fogging protocols to completely eradicate mosquito populations from your backyard — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="EAGLE POINT OR MOSQUITO EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <MosquitoInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
