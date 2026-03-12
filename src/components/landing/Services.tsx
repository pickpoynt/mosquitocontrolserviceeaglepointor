import { ArrowRight, Search, ShieldCheck, Hammer, FlaskConical, Target } from "lucide-react";

const services = [
  {
    title: "Sump Pump Systems",
    description: "Installation of high-capacity sump pump systems designed to handle Frazer's heaviest rainfall and prevent basement flooding.",
    icon: Target
  },
  {
    title: "Foundation Repair",
    description: "Professional sealing of foundation cracks and structural stabilization to stop water intrusion at the source.",
    icon: ShieldCheck
  },
  {
    title: "Interior Drainage",
    description: "Advanced French drain systems and baseboard drainage solutions to redirect water away from your living space.",
    icon: Hammer
  },
  {
    title: "Vapor Barriers",
    description: "Premium crawl space encapsulation and wall vapor barriers to eliminate moisture and prevent mold growth.",
    icon: FlaskConical
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Waterproofing Services Frazer</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Frazer homeowners rely on our specialized team for high-precision basement protection and total foundation restoration. We target the entry points that power your moisture issues.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
