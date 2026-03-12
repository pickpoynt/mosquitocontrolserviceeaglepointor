import { ArrowRight, Search, ShieldCheck, Wind, Bug, Droplets } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Well Tank Services West Bloomfield</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            West Bloomfield homeowners rely on our master plumbers for high-precision well tank diagnosis and total system restoration. We target the hardware that powers your water flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Tank Diagnostic Mapping",
              description: "Precise identification of bladder failure, air loss, and pressure switch inaccuracies across your West Bloomfield residential or agricultural system.",
            },
            {
              icon: ShieldCheck,
              title: "Premium Tank Replacement",
              description: "Installation of commercial-grade steel or fiberglass pressure tanks, ensuring a durable air-to-water barrier for your West Bloomfield property.",
            },
            {
              icon: Droplets,
              title: "Bladder Integrity Service",
              description: "Expert testing and calibration of internal bladders to restore the critical air cushion, preventing pump short-cycling and premature failure.",
            },
            {
              icon: Wind,
              title: "Constant Pressure Upgrades",
              description: "Specialized installation of VFD systems to provide steady, town-like water pressure even in large West Bloomfield luxury estates.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Book Service <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
