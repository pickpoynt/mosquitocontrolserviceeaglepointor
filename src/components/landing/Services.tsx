import { ArrowRight, Search, ShieldCheck, Hammer, FlaskConical, Target } from "lucide-react";

const services = [
  {
    title: "Sewer Replacement",
    description: "Full-scale restoration of failed sewer lines. We provide permanent structural replacements for Chino Hills homes using heavy-duty materials.",
    icon: Target
  },
  {
    title: "Trenchless Repair",
    description: "Advanced pipe lining technology that repairs sewer lines from the inside, saving your landscaping and driveway from destruction.",
    icon: Search
  },
  {
    title: "Pipe Bursting",
    description: "Modern replacement method that pulls a new, durable pipe through the old one, effectively 'bursting' the old pipe in place.",
    icon: Hammer
  },
  {
    title: "Video Inspection",
    description: "High-definition camera diagnostics to identify the exact cause and location of your sewer failure before work begins.",
    icon: ShieldCheck
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Professional <span className="text-amber-600">Sewer Line Replacement Chino Hills</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Chino Hills homeowners trust our specialized team for high-precision sewer failure localization and total line restoration. We target the source.
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
