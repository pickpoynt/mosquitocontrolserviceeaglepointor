import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, Zap, Clock, Search, Locate, Phone } from "lucide-react";
import { ReactNode } from "react";

interface HeroProps {
  title?: ReactNode;
  subtitle?: string;
  image?: string;
  overlayImage?: string;
  phone?: string;
  badge?: string;
  features?: { icon: any; text: string }[];
}

const Hero = ({
  title = (
    <>
      Wasp Nest Removal <br />
      <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Hillsborough NC</span>
    </>
  ),
  subtitle = "Hillsborough NC's certified wasp and hornet elimination specialists. We deploy safe, effective, and rapid response protocols to completely remove dangerous nests from your property — 24/7.",
  image = "/4.jpeg",
  overlayImage = "/1.jpeg",
  phone = "3238801224",
  badge = "HILLSBOROUGH NC WASP EXPERTS",
  features = [
    { icon: Search, text: "Nest Inspection" },
    { icon: ShieldCheck, text: "Same-Day Removal" },
    { icon: Locate, text: "Hillsborough Local" }
  ]
}: HeroProps) => {
  const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Hero background with Image 4 */}
      <div className="absolute inset-0">
        <img src={image} alt="Wasp Removal Background" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-8 font-bold uppercase tracking-[0.2em] text-xs animate-fade-in shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <Zap className="w-4 h-4 fill-amber-500" />
              {badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[0.9] tracking-tighter animate-title-slide">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium italic animate-fade-in-up">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up [animation-delay:200ms]">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white h-16 px-10 rounded-2xl text-xl font-bold shadow-2xl shadow-amber-900/40 border border-amber-500/20 transition-all hover:scale-105" asChild>
                <a href={`tel:${phone}`}>
                  <Phone className="w-6 h-6 mr-3 fill-white" />
                  {formattedPhone}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:400ms]">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <feature.icon className="w-5 h-5 text-amber-400 group-hover:text-white" />
                  </div>
                  <span className="text-slate-200 font-bold uppercase tracking-widest text-[10px]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Overlay with Image 1 */}
          <div className="relative hidden lg:block animate-fade-in [animation-delay:600ms]">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/30 to-slate-800/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-700">
                <img src={overlayImage} alt="Professional Wasp Removal" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">Response Time</p>
                      <p className="text-white font-bold text-xl uppercase tracking-tighter">Under 60 Minutes</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-600 w-[95%] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
