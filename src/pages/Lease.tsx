import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Lease = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="bg-amber-600 p-12 text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase tracking-tight">Lease This Number</h1>
                            <p className="text-xl text-amber-50 font-medium italic">Grow your Frazer basement waterproofing business for just $19/month.</p>
                        </div>

                        <div className="p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Why Lease?</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Exclusive use of the (877) 792-1410 number",
                                            "Direct calls from motivated Frazer residents",
                                            "Professional SEO-optimized landing page",
                                            "No long-term contracts - cancel anytime",
                                            "Instant local authority in the waterproofing niche"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-600 font-medium italic">
                                                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                                    <div className="text-5xl font-bold text-slate-900 mb-2">$19</div>
                                    <div className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-6">Per Month</div>
                                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg font-bold rounded-2xl" asChild>
                                        <a href="mailto:leasemynumber@gmail.com">Secure This Niche</a>
                                    </Button>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-12 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Contact For Inquiries</h3>
                                <div className="flex flex-col sm:flex-row justify-center gap-8">
                                    <div className="flex items-center gap-3 justify-center">
                                        <Mail className="w-6 h-6 text-amber-600" />
                                        <a href="mailto:leasemynumber@gmail.com" className="text-lg font-bold text-slate-700 hover:text-amber-600">leasemynumber@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-3 justify-center">
                                        <Phone className="w-6 h-6 text-amber-600" />
                                        <span className="text-lg font-bold text-slate-700">(877) 792-1410</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Lease;
