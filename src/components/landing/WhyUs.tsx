import { ShieldCheck, Target, Search, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 mb-6 uppercase tracking-widest text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Chino Hills Sewer Reliability</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
                Why Chino Hills Residents <br />
                <span className="text-amber-600">Trust Our Sewer Specialists</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                We are Chino Hills' dedicated sewer line replacement and protection team. Our professional approach ensures no sewer failure or collapse escapes our precision mapping and trenchless restoration strategies.
              </p>

              <div className="space-y-4">
                {[
                  { text: "Local Chino Hills Experts", icon: Search },
                  { text: "24/7 Emergency Service", icon: Clock },
                  { text: "Advanced Leak Detection", icon: Target },
                  { text: "Safety Certified Work", icon: ShieldCheck },
                  { text: "Durable Pipe Materials", icon: Award }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                      <item.icon className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-slate-700 font-bold uppercase tracking-wider text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group">
              <img
                src="/1.jpeg"
                alt="Sewer Line Replacement Chino Hills"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-amber-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="/3.jpeg"
                alt="Professional Sewer Restoration Chino Hills"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-2">Sewer Failure?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call Chino Hills' Specialists</h4>
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
