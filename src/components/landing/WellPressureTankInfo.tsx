import { ShieldCheck, Zap, Activity, ClipboardCheck, MapPin, Locate, Search, AlertTriangle, Droplets, Gauge, Settings, ShieldAlert } from "lucide-react";

const WellPressureTankInfo = () => {
    return (
        <section id="well-tank-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>West Bloomfield Well Service Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-amber-600">Well pressure tank replacement West Bloomfield</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Rapid-response well tank diagnostics and replacement for West Bloomfield, MI properties. We specialize in bladder tank installation, pressure switch calibration, and constant pressure upgrades to restore your household water flow instantly.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <ShieldAlert className="w-7 h-7 text-amber-600" />
                                    West Bloomfield Tank Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Gauge className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Pressure Diagnostic & Calibration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                In West Bloomfield, many older wells suffer from improperly set pressure switches. We perform a complete cycle test to determine if your issues stem from a failing tank bladder or a simple 40/60 switch calibration error.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Heavy-Duty Tank Installation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We install premium fiberglass and steel pressure tanks designed for Michigan's varied water chemistry. Our tanks come with extended warranties and are sized specifically for your home's GPM demand.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Settings className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Emergency Bypass & Testing</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                During replacement, we ensure your filtration systems and water softeners are properly bypassed and re-integrated, followed by a total system sanitization and leak check.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                                <img src="/2.jpeg" alt="Well Tank Replacement Services" className="w-full h-64 object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-amber-600" />
                                    Serving West Bloomfield & Oakland County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Priority emergency well pressure tank replacement West Bloomfield service for these local areas:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Orchard Lake Road",
                                        "Cass Lake Shoreline",
                                        "Upper Straits Lake",
                                        "Maple Road Corridor",
                                        "Pine Lake Estates",
                                        "Franklin Village",
                                        "Bloomfield Hills",
                                        "Walled Lake Border"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img src="/3.jpeg" alt="Professional Well Equipment" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 bg-amber-600 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Michigan Well Water Experts</h4>
                            <p className="text-amber-50 text-sm leading-relaxed italic">
                                West Bloomfield's local geology often means high mineral content that can cause internal tank bladders to bind or crack prematurely. When a tank waterlogs, it's not just a nuisance; it's a direct threat to your well pump's motor. We've spent decades servicing Oakland County water systems, providing the high-quality components and specialized knowledge needed to keep local wells running efficiently for another generation.
                            </p>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-amber-600">Immediate Tank Replacement</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Activity, title: "Pump Short Cycling", desc: "If you hear your well pump clicking on and off every few seconds while using water, your tank has lost its vital air cushion and requires immediate intervention." },
                                { icon: AlertTriangle, title: "Rusty Water or Silt", desc: "Corrosion inside a steel tank can lead to a ruptured bladder, releasing sediment and rust into your household plumbing and filtration units." },
                                { icon: Search, title: "Water Leaking from Valve", desc: "If you press the air valve at the top of the tank and water sprays out, the internal bladder is torn. Total replacement is the only reliable solution." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image 4 usage for content requirement */}
                    <div className="mb-16">
                        <div className="aspect-video rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                            <img src="/4.jpeg" alt="Modern Well Pressure Tank Installation" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-amber-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    No Water or Low Pressure?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't let a failing pressure tank burn out your expensive submersible pump. Our West Bloomfield experts carry all standard tank sizes on our service trucks for immediate replacement. We are ready for 24/7 localized well service dispatch.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">MI Licensed Master Plumbers</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Well Specialists</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Oakland County Response</div>
                                </div>
                            </div>
                            <div className="bg-amber-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-amber-400/30 shadow-2xl">
                                <p className="text-amber-100 text-sm font-bold uppercase tracking-widest mb-2">Well Tank Replacement West Bloomfield</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-amber-100 text-sm italic font-medium">
                                    Well pressure tank replacement West Bloomfield
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WellPressureTankInfo;
