import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SewerLineInfo from "@/components/landing/SewerLineInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Chino Hills Sewer Line Experts";
  const phoneNumber = "(877) 792-1410";
  const location = "Chino Hills, CA";
  const zipCodes = "91709, 91710, 91708, 92880, 92887";
  const fullKeyword = "Sewer line replacement Chino Hills";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/2.jpeg",
    "@id": "https://sewerlinereplacementchinohills.vercel.app/",
    "url": "https://sewerlinereplacementchinohills.vercel.app/",
    "telephone": "8777921410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chino Hills",
      "addressLocality": "Chino Hills",
      "addressRegion": "CA",
      "postalCode": "91709",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.9892,
      "longitude": -117.7326
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
      { "@type": "City", "name": "Chino Hills, CA" },
      { "@type": "PostalCode", "name": "91709" },
      { "@type": "PostalCode", "name": "91710" },
      { "@type": "PostalCode", "name": "91708" },
      { "@type": "PostalCode", "name": "92880" },
      { "@type": "PostalCode", "name": "92887" }
    ],
    "description": `Professional ${fullKeyword}. Emergency structural restoration and professional trenchless repair in Chino Hills ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. We provide 24/7 emergency restoration and professional trenchless replacement in ${location} ${zipCodes}. Call ${phoneNumber} now.`} />
        <meta name="keywords" content={`${fullKeyword}, trenchless sewer repair Chino Hills, pipe bursting 91709, sewer restoration 91710, local sewer experts Chino Hills CA`} />
        <link rel="canonical" href="https://sewerlinereplacementchinohills.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              {fullKeyword.replace(" Chino Hills", "")} <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Chino Hills</span>
            </>
          }
          subtitle="Chino Hills' rapid-response sewer restoration specialists. We provide professional trenchless repair and total sewer line replacement to protect your property from catastrophic backups — 24/7."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="CHINO HILLS SEWER LINE PROS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <SewerLineInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
