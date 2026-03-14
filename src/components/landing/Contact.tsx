import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
              <Mail className="w-4 h-4" />
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Rapid Response <span className="text-amber-600">Eagle Point Mosquito Control</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              Don't let mosquitos chase you inside. Our Eagle Point specialists are standing by for immediate backyard barrier treatments throughout the Rogue Valley.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-slate-200/50">
                  <Phone className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Emergency Hotline</p>
                  <a href="tel:3238801224" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">(323) 880-1224</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-lg shadow-slate-200/50">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Eagle Point HQ</p>
                  <address className="text-lg font-bold text-slate-900 not-italic">
                    Eagle Point OR Mosquito Control Experts<br />
                    Eagle Point, OR 97524
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-lg shadow-slate-200/50">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Service Hours</p>
                  <p className="text-lg font-bold text-slate-900 uppercase">24/7 Emergency Dispatch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-amber-600 rounded-[3rem] rotate-3 opacity-5" />
            <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Express Request</h3>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <Input placeholder="Full Name" className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input placeholder="Cell Phone" className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all shadow-inner" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Eagle Point ZIP Code</label>
                  <Input placeholder="97524" className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all shadow-inner" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Treatment Type</label>
                  <select className="flex h-14 w-full rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all shadow-inner">
                    <option>Barrier Spray Treatment</option>
                    <option>Larvicide Application</option>
                    <option>Special Event Treatment</option>
                    <option>Eco-Friendly Spray</option>
                    <option>Commercial Control</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Property Details</label>
                  <Textarea placeholder="Any heavy foliage or standing water areas?" className="min-h-[120px] rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all shadow-inner" />
                </div>

                <Button className="w-full h-16 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-amber-900/20 transition-all hover:scale-[1.02]">
                  Get Mosquito-Free Now
                </Button>
                
                <p className="text-[10px] text-center text-slate-400 font-medium">
                  By clicking, you agree to being contacted by a local mosquito specialist at the number provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
