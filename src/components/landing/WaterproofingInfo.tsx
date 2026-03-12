import { ShieldCheck, Target, Hammer, Search, AlertTriangle, HelpCircle } from "lucide-react";

const WaterproofingInfo = () => {
    const faqs = [
        { q: "How much does it cost to professionally waterproof a basement?", a: "Professional basement waterproofing costs typically range from $2,500 to $10,000 depending on the size and severity of the moisture issue." },
        { q: "How much does it cost to waterproof a basement in Pennsylvania?", a: "In Pennsylvania, homeowners can expect to pay between $3,000 and $8,000 for standard interior waterproofing systems, influenced by local soil conditions and basement depth." },
        { q: "What are the three types of basement waterproofing?", a: "The three primary types are interior sealants and drain systems, exterior waterproofing (excavation and membrane), and drainage system improvements (sump pumps/French drains)." },
        { q: "Will insurance pay for basement waterproofing?", a: "Standard homeowners insurance usually doesn't cover waterproofing as it's considered maintenance, though it may cover damage from sudden incidents like a burst pipe." },
        { q: "How to 100% waterproof a basement?", a: "Achieving 100% protection requires a multi-layered approach: exterior excavation, high-grade membranes, interior perimeter drains, and a robust sump pump system." },
        { q: "Do you need a permit to waterproof a basement?", a: "Yes, most municipalities in the Frazer/Malvern area require permits for structural foundation work and significant drainage system alterations." },
        { q: "What is the cheapest way to waterproof a basement?", a: "The most budget-friendly methods involve interior sealants and ensuring gutter downspouts direct water at least 10 feet away from the foundation." },
        { q: "How long does waterproofing a basement last?", a: "Quality exterior waterproofing can last over 25 years, while interior drain systems often come with lifetime warranties when professionally maintained." },
        { q: "How long does it take to finish a 1500 sq ft basement?", a: "Waterproofing a 1500 sq ft basement usually takes 3-5 days, while a full finishing project can take 4-8 weeks." },
        { q: "How much to waterproof a 1000 sq ft basement?", a: "Waterproofing a 1000 sq ft basement generally costs between $5,000 and $9,000 for a comprehensive interior system installation." },
        { q: "Is waterproofing a basement a good idea?", a: "Absolutely. It prevents structural damage, stops mold growth, protects your belongings, and is essential if you plan to finish the space." },
        { q: "Why is basement waterproofing so expensive?", a: "The cost is driven by heavy labor, specialized materials like polymer membranes, and the technical expertise required to ensure long-term structural safety." },
        { q: "Does waterproofing basement add value to a home?", a: "Yes, it often provides a high return on investment (ROI) by increasing usable square footage and providing peace of mind to future buyers." },
        { q: "What's the most expensive part of finishing a basement?", a: "The moisture mitigation and initial waterproofing is often the most critical and cost-intensive phase of a high-quality basement finish." },
        { q: "Is it possible to waterproof a finished basement?", a: "Yes, it can be done through exterior excavation or by carefully removing the bottom section of drywall to install an interior drainage channel." },
        { q: "Will homeowners insurance cover basement waterproofing?", a: "Generally no. Insurance covers 'sudden and accidental' water damage, whereas waterproofing is seen as a preventive structural upgrade." },
        { q: "How much is it to finish a 2000 sq ft basement?", a: "Finishing a 2000 sq ft basement can range from $40,000 to $80,000, assuming waterproofing is already in place." },
        { q: "Can I waterproof my basement from the inside?", a: "Yes, interior waterproofing using perimeter drains and sump pumps is highly effective at managing pressure and keeping floors dry." },
        { q: "How many days does it take to waterproof a basement?", a: "Most professional residential jobs in Frazer are completed within 2 to 4 business days." },
        { q: "Can you finish a basement for $15,000?", a: "A $15,000 budget is tight for a full finish but can comfortably cover a high-quality professional waterproofing system." },
        { q: "How much does it cost to waterproof a basement from the inside?", a: "Interior systems typically cost between $40 and $80 per linear foot installed." },
        { q: "How to cheaply waterproof a basement?", a: "Start with exterior maintenance: clean gutters, extend downspouts, and regrade the soil so it slopes away from the foundation walls." },
        { q: "How much to waterproof a 500 sq ft basement?", a: "A smaller 500 sq ft basement usually costs between $2,500 and $4,500 for professional interior drainage." },
        { q: "How often should you waterproof your basement?", a: "A professionally installed system should last 20+ years, but you should inspect your sump pump and drainage outlets annually." },
        { q: "Is it worth it to waterproof your basement?", a: "Yes, the cost of repairing foundation collapse or chronic mold issues far exceeds the initial investment in professional waterproofing." },
        { q: "What is the best way to waterproof a basement from the outside?", a: "The best method is full excavation down to the footer, followed by applying a thick elastomeric membrane and installing new exterior weeping tiles." },
        { q: "How long does it take to waterproof a basement?", a: "Exterior jobs take 5-10 days due to excavation, while interior systems take 2-4 days." }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-100 mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Knowledge Base</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                        Frazer Basement Waterproofing <br />
                        <span className="text-amber-600">Common Questions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all group hover:shadow-2xl hover:shadow-amber-900/5">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors shadow-sm">
                                    <HelpCircle className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium italic">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 border-t border-slate-100">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                        <img src="/4.jpeg" alt="Waterproofing Inspection" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white font-bold italic text-xl leading-relaxed">
                                    "Total foundation protection is more than just stopping water; it's about securing your home's structural integrity and your family's health."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Foundation Sealing</h3>
                                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Safe, permanent, and effective sealing techniques tailored for PA homes.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-amber-600 text-white shadow-xl shadow-amber-600/30 hover:shadow-2xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Drainage Systems</h3>
                                <p className="text-white/90 text-sm leading-relaxed uppercase tracking-widest font-bold">We bridge the gap between your home and a dry basement by installing world-class drainage.</p>
                            </div>
                        </div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-amber-500/10">
                            <img src="/3.jpeg" alt="Waterproofing Service" className="w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-6 right-6 px-6 py-2 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest animate-pulse border border-white/20 shadow-lg">
                                Frazer Specialist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterproofingInfo;
