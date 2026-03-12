const faqs = [
  { question: "How much does it cost to replace a pressure tank on a well?", answer: "The average cost to replace a well pressure tank typically ranges from $800 to $2,500, depending on the size of the tank, the complexity of the installation, and local labor rates in West Bloomfield." },
  { question: "What is the life expectancy of a well pressure tank?", answer: "Most high-quality well pressure tanks last between 10 and 15 years. Factors such as water quality, the frequency of pump cycles, and maintenance can affect this lifespan." },
  { question: "What happens when a well pressure tank goes bad?", answer: "When a tank fails, it usually becomes waterlogged. This causes the well pump to 'short cycle,' turning on and off rapidly, which can lead to pump failure and inconsistent water pressure." },
  { question: "Can I install a well pressure tank myself?", answer: "While possible for a skilled DIYer, professional installation is highly recommended to ensure proper pressure switch calibration, leak-free connections, and compliance with West Bloomfield building codes." },
  { question: "How often does a well pressure tank need to be replaced?", answer: "Replacement is usually needed every 10–15 years, or immediately if the internal bladder ruptures or the tank develops significant corrosion." },
  { question: "Is there an alternative to a well pressure tank?", answer: "Variable Frequency Drive (VFD) systems are an alternative that provides constant pressure without a large tank, though they are more expensive to install initially." },
  { question: "How to tell if your pressure tank needs replacing?", answer: "Signs include the pump short cycling, fluctuating water pressure, air 'spitting' from faucets, or the tank feeling heavy and full of water when it should be empty." },
  { question: "Is a 20 gallon pressure tank big enough for a house?", answer: "A 20-gallon tank is often sufficient for small homes with low water demand, but 44-gallon or 86-gallon tanks are standard for average Michigan households to reduce pump wear." },
  { question: "Is 2 gallons a minute good for a well?", answer: "2 GPM is considered a low-yield well. In such cases, a larger pressure tank or a secondary storage system is often required to meet peak household demand." },
  { question: "Do plumbers fix pressure tanks?", answer: "Yes, licensed plumbers or well water specialists are the correct professionals to diagnose and replace well pressure tanks." },
  { question: "How to test if a well pressure tank is bad?", answer: "You can check the air valve (Schrader valve) at the top. If water comes out when you press the pin, the bladder has ruptured and the tank must be replaced." },
  { question: "How much is a 20 gallon pressure tank at Home Depot?", answer: "Retail prices for a basic 20-gallon tank usually range from $200 to $400, but this doesn't include the specialized fittings, labor, or professional calibration required for a reliable system." },
  { question: "What's the average cost to replace a well pressure tank?", answer: "When factoring in professional labor, materials, and removal of the old tank, West Bloomfield homeowners should expect an all-in cost of $1,200 to $1,800 for a standard-sized tank." },
  { question: "What are the signs of a bad tank?", answer: "Common symptoms include visible leaks at the base, rattling pipes, water pressure that drops suddenly, and electricity bills spiking due to the pump running constantly." },
  { question: "What is the most reliable well pressure tank?", answer: "Brands like AMTROL (Well-X-Trol) and Flexcon are widely considered the industry gold standard for durability and long-term performance." },
  { question: "What causes a well pressure tank to go bad?", answer: "The most common causes are internal bladder failure, sediment buildup, external corrosion, and improper pre-charge air pressure." },
  { question: "Can I replace a pressure tank myself?", answer: "It is a complex job involving high-voltage electrical connections and high-pressure plumbing. For safety and warranty purposes, professional installation is the best path." },
  { question: "How much does a plumber charge to install a water tank?", answer: "Labor costs in the West Bloomfield area typically range from $300 to $600 for a straightforward tank replacement, assuming the existing plumbing is in good condition." },
  { question: "How often should you drain your well pressure tank?", answer: "It's a good practice to check the air pressure and drain sediment once a year to extend the life of the internal bladder." },
  { question: "Which is better, fiberglass or steel pressure tanks?", answer: "Steel tanks are traditional and durable, while fiberglass tanks are preferred in humid basements because they will never rust or corrode externally." },
  { question: "Should I use a 30/50 or 40-60 pressure switch?", answer: "A 40/60 switch provides higher, more modern water pressure. However, your tank's air pre-charge must be set 2 PSI below the 'on' setting (e.g., 38 PSI for a 40/60 switch)." },
  { question: "How do I know if my pressure tank on my well is bad?", answer: "The most definitive sign is if you tap the top of the tank and it sounds 'thuddy' (full of water) rather than hollow (full of air)." },
  { question: "How much does a plumber charge to replace a water pressure valve?", answer: "Replacing a pressure switch or relief valve usually costs between $150 and $300 including the part." },
  { question: "How long does it take to replace a well tank?", answer: "A professional can typically complete the replacement in 2 to 4 hours, including draining the old tank and testing the new system." },
  { question: "How much does it cost to replace a pressure tank for a house that has well water?", answer: "Including the tank, accessories, and labor, the total investment is usually between $1,000 and $2,000 for a high-quality, long-lasting setup." },
  { question: "How to tell if a water tank is going bad?", answer: "Watch for 'short cycling.' If your pump clicks on every time you flush a toilet or run a faucet for 10 seconds, your tank has lost its air cushion." },
  { question: "Can you have too large of a well pressure tank?", answer: "Generally, no. A larger tank simply means the pump runs less frequently and for longer periods, which is actually better for the motor's lifespan." },
  { question: "What is a symptom of a waterlogged well pressure tank?", answer: "Fluctuating water pressure is the main symptom. You'll feel the pressure drop significantly before the pump suddenly kicks in and boosts it back up." },
  { question: "Can you run a well without a pressure tank?", answer: "No. Without a tank, the pump would have to turn on every single time you cracked a faucet, which would burn out the pump motor in a matter of days." },
  { question: "How to reset a well pressure tank?", answer: "If a tank is waterlogged, it cannot be 'reset' permanently. You can temporarily add air to the valve, but if the bladder is torn, it will fail again quickly and requires replacement." }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Well System Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            West Bloomfield Well Tank <span className="text-amber-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential knowledge for West Bloomfield properties dealing with inconsistent water pressure or failing tanks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-amber-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
