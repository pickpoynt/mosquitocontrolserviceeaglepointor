import { Button } from "@/components/ui/button";
import { Locate, Phone, ShieldCheck, MapPin, Mail, DollarSign } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
            <Locate className="w-4 h-4" />
            FRUITLAND MD SQUIRREL CONTROL PROS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
            Deploy <span className="text-amber-600">squirrel control fruitland</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
            Protect your Fruitland home from squirrel invasions. Our licensed wildlife team provides same-day removal, full exclusion barriers, and damage repair across Fruitland, MD.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">SQUIRREL CONTROL HOTLINE</p>
                <a href="tel:3238801224" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-tight">
                  (323) 880-1224
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 border border-slate-100">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">STATE LICENSED</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Maryland Licensed Wildlife Specialists</p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-amber-600 border border-slate-100">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">NAP</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Fruitland MD Squirrel Control Pros</p>
                <p className="text-slate-500 font-medium text-sm">201 E Main St, Fruitland, MD 21826</p>
                <p className="text-slate-500 font-medium text-sm">(323) 880-1224</p>
              </div>
            </div>

            {/* $19/month phone replacement offer */}
            <div className="p-8 bg-gradient-to-br from-amber-900 to-slate-900 rounded-[2rem] text-white border border-amber-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-400/30">
                    <DollarSign className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight">Lease This Number</h4>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed mb-6 italic">
                  Want to replace this phone number with your own business line? We offer exclusive lead routing placement for only <strong>$19 a month</strong>.
                </p>
                <a
                  href="mailto:leasemynumber@gmail.com?subject=Phone Replacement Inquiry - Fruitland Squirrel Control"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:gap-3"
                >
                  <Mail className="w-4 h-4" />
                  leasemynumber@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-amber-900/10 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Request Removal</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Name</label>
                <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="Homeowner / Property Manager" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="(323) 880-1224" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Needed</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium">
                <option>Active Squirrel in Attic (Emergency)</option>
                <option>Humane Squirrel Trapping</option>
                <option>Entry Point Exclusion</option>
                <option>Damage Repair & Cleaning</option>
                <option>Preventive Seal-Up</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Situation Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium" placeholder="Describe where you're hearing noises and how long..."></textarea>
            </div>
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-amber-900/20 uppercase tracking-widest transition-all">
              Request Same-Day Removal
            </Button>
            <p className="text-center text-slate-500 text-sm italic font-medium">
              *Same-day removal available across Fruitland, Salisbury, and surrounding Wicomico County areas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
