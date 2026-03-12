import { ShieldCheck, MapPin, Activity, Locate, ClipboardCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 mb-6 uppercase tracking-widest text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>West Bloomfield Well Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Why West Bloomfield Trusts <span className="text-amber-600">Our Well Specialists</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold italic">
              When inconsistent water pressure threatens your home comfort, our licensed well team delivers the most reliable solution for West Bloomfield properties — fast and guaranteed.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Activity, title: "1-Hour Emergency Response", description: "We dispatch immediately for total water loss or severe pressure surges in West Bloomfield and Oakland County — restoring flow before your evening starts." },
                { icon: Locate, title: "West Bloomfield Local Service", description: "Based locally in West Bloomfield, MI for faster arrival than regional plumbing chains — we understand the specific water table challenges of our area." },
                { icon: ClipboardCheck, title: "Master Grade Equipment", description: "Our technicians use commercial-grade pressure gauges and specialized air-compressors to tune and install your new tank with surgical precision." },
                { icon: Sparkles, title: "Pump Protection Strategy", description: "We don't just swap the tank; we optimize your system to prevent 'short cycling,' extending the life of your expensive submersible pump for years to come." }
              ].map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-amber-600 border border-slate-100 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group">
              <img
                src="/2.jpeg"
                alt="West Bloomfield Well Tank Equipment"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="/3.jpeg"
                alt="Professional Well Tank Installation West Bloomfield"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-2">Pressure Dropping?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call West Bloomfield's Best</h4>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:8777921410">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
