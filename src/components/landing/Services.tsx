import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Barrier Spray Protection",
    description: "Our core mosquito control service. We apply a fine mist to foliage and surrounding areas, creating a lethal barrier that eliminates adult mosquitos on contact for up to 30 days.",
    image: "/2.jpeg",
    points: ["Kills Adult Mosquitos", "30-Day Protection", "Eco-Friendly Option"]
  },
  {
    title: "Larvicide Source Control",
    description: "Stop mosquitos before they hatch. We treat standing water, gutters, and breeding zones with EPA-approved growth inhibitors that prevent larvae from maturing.",
    image: "/3.jpeg",
    points: ["Egg Elimination", "Water Treatment", "Long-Term Prevention"]
  },
  {
    title: "Eco-Friendly Mosquito Guard",
    description: "A natural alternative using botanical oils that repel mosquitos effectively without synthetic chemicals. Ideal for gardens and high-traffic family areas.",
    image: "/1.jpeg",
    points: ["Botanical Oils", "Pet & Family Safe", "Organic Alternative"]
  },
  {
    title: "Special Event Spraying",
    description: "Planning a wedding or outdoor party in Eagle Point? Our 24-hour rapid response team ensures your venue is mosquito-free for your big day.",
    image: "/4.jpeg",
    points: ["Wedding Protection", "Party Shield", "One-Time Treatment"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Eagle Point OR Mosquito Control</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Enjoy your backyard again. In the Eagle Point climate, mosquito populations can explode. Our targeted multi-phase treatments ensure your property remains a bite-free zone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
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
