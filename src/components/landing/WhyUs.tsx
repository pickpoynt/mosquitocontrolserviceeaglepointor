import { Shield, Clock, Award, Target } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Response Time",
      description: "Mosquito infestations can ruin any outdoor plan. We prioritize Eagle Point service calls to ensure your property is protected within hours, not days."
    },
    {
      icon: Shield,
      title: "Certified Protection",
      description: "Our licensed mosquito technicians use industrial-grade equipment and specialized chemicals that are aggressive on pests but safe for your children and pets."
    },
    {
      icon: Target,
      title: "Multiphase Source Control",
      description: "We don't just spray the perimeter; we identify and eliminate the source. Our larval growth inhibitors stop the lifecycle before it starts."
    },
    {
      icon: Award,
      title: "OR Pacific Northwest Experts",
      description: "Local knowledge of Oregon's native mosquito species and seasonal patterns. We understand the specific breeding challenges in the Rogue Valley."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Eagle Point Mosquito Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              Protecting your family from mosquito-borne illness and annoying bites is our top priority. In Eagle Point, OR, the proximity to various water sources makes mosquito control a seasonal necessity. Our team combines advanced larval control with perimeter barrier sprays to reclaim your backyard.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-amber-500/5 flex items-center justify-center group-hover:bg-amber-600 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                    <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <img src="/2.jpeg" alt="Inspection" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/3.jpeg" alt="Treatment" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Prevention" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/1.jpeg" alt="Safety" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">#1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">In Eagle Point</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
