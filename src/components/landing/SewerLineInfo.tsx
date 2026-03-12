import { Search, Info, HelpCircle, ChevronDown, ChevronUp, Droplets, Hammer, ShieldCheck, Activity } from "lucide-react";
import { useState } from "react";

const SewerLineInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How much does it cost to replace a sewer line in California?",
            answer: "In California, the cost to replace a sewer line typically ranges from $4,500 to $15,000, although complex projects can exceed $25,000. Price variations are largely driven by local material costs, labor rates, and the depth of the line. For instance, a sewer line buried 10 feet deep under a landscaped yard will cost significantly more than one buried 3 feet deep. Permit fees in California cities like Chino Hills also add to the total, often ranging from $200 to $800 depending on the scope of work. If the replacement requires street excavation to reach the city main, you may also face 'encroachment permit' fees and asphalt restoration costs, which can add $3,000 to $7,000 to the bill. Our team in Chino Hills utilizes trenchless technology whenever possible to minimize these secondary costs, ensuring you get the most efficient restoration without the massive price tag of traditional excavation."
        },
        {
            question: "Will insurance pay for a new sewer line?",
            answer: "Standard homeowners insurance policies generally do not cover sewer line replacement if the damage is due to wear and tear, age, or lack of maintenance. However, there are two primary scenarios where insurance might pay. First, if you have a specific 'Service Line Coverage' endorsement, your policy may cover the cost of repairing or replacing underground utility lines, including sewer pipes, due to specific perils like sudden pipe bursts or external pressure. Second, if a sudden and accidental event occurs—such as a tree falling and crushing the line or a contractor accidentally hitting it—there may be a claim. It is crucial to distinguish between 'line coverage' and 'dwelling coverage.' While insurance might pay for the cleanup of a sewage backup inside your home (under 'Water Back-up' coverage), they rarely pay for the pipe itself unless you have explicitly added that rider to your policy. We recommend contacting your agent immediately to verify your specific Chino Hills policy localizations."
        },
        {
            question: "What is the average lifespan of a sewer line?",
            answer: "The lifespan of a sewer line depends almost entirely on the material used during its original installation. Traditional clay pipes, common in older Chino Hills properties, generally last 50 to 60 years but are highly susceptible to root intrusion and seismic shifts. Orangeburg pipes (essentially tar-paper pipes) were used through the 1960s and 70s and are now failing across the country, typically lasting only 30 to 50 years before collapsing under soil pressure. Modern PVC or ABS plastic pipes are significantly more durable, with an expected lifespan of 100 years or more due to their resistance to corrosion and flexibility. Cast iron pipes can last 75 to 100 years but usually suffer from internal scaling and bottom-channel corrosion after 50 years. Knowing the age of your Chino Hills home is the first step in assessing your risk. Regular video camera inspections can help determine the current condition of your line, allowing for proactive trenchless repairs before a total collapse occurs."
        },
        {
            question: "Can a homeowner replace their own sewer line?",
            answer: "While it is technically possible for a highly skilled DIY enthusiast to attempt sewer line replacement, we strongly advise against it for several reasons. In Chino Hills, and most of California, sewer line replacement requires specific plumbing permits and must pass rigorous inspections by the city's building department. Working with sewer lines involves exposure to hazardous bio-waste and potentially dangerous sewer gases like methane and hydrogen sulfide. Furthermore, specialized heavy machinery like excavators or trenchless bursting kits are required for a professional result. A single misalignment in the pipe slope (grade) could result in chronic backups that are far more expensive to fix later. If you connect to the city main incorrectly, you could be liable for damages to municipal infrastructure. Professional plumbers bring the experience, licensing, and insurance necessary to ensure the job is done safely and according to California plumbing codes, protecting both your property value and your family's health."
        },
        {
            question: "Will homeowners cover sewer line replacement?",
            answer: "Homeowners often assume their basic policy covers the underground pipes on their property, but this is rarely the case. Most standard HO-3 policies treat the sewer line as a 'service line' rather than part of the 'dwelling.' To get coverage for sewer line replacement, you typically need to purchase a specific Service Line Endorsement. This additional coverage usually costs between $20 and $50 per year and provides $5,000 to $10,000 in coverage for repairs or replacements. Without this rider, you are solely responsible for the costs of excavation, pipe replacement, and surface restoration. Some local utility companies in Chino Hills also offer separate insurance plans for a monthly fee. It is important to remember that these policies have 'waiting periods,' so you cannot buy the insurance once you already suspect a leak. Proactive homeowners should check their current policy details today to ensure they aren't caught off guard by a multi-thousand dollar repair bill."
        },
        {
            question: "How often should a sewer line be cleaned?",
            answer: "Professional plumbing associations generally recommend that residential sewer lines be cleaned every 18 to 22 months as a form of preventative maintenance. However, this frequency can change based on the condition and surroundings of your Chino Hills property. If your yard has large, mature trees with aggressive root systems, you may need annual cleaning or 'rooting' to prevent blockages. Similarly, older homes with cast iron pipes that are prone to scaling may require more frequent hydro jetting to maintain a smooth flow. One of the best ways to determine your specific needs is through a biennial sewer camera inspection. This allows us to see if grease buildup, scale, or roots are accumulating before they cause a full stoppage. For commercial properties in Chino Hills, cleaning is much more frequent, often quarterly, due to high fat and grease output. Staying on top of cleaning is the most cost-effective way to extend the life of your existing line."
        },
        {
            question: "Who pays for a collapsed sewer line?",
            answer: "The responsibility for a collapsed sewer line depends on exactly where the collapse occurred. In Chino Hills, the homeowner is typically responsible for the entire length of the 'upper lateral' and 'lower lateral'—this means everything from the house to the connection point at the city's main sewer line, even the part located under the public sidewalk or street. If the collapse occurs within the city's main line (the large pipe running down the center of the street), then the municipality is responsible for the repair. However, if the connection point (the 'wye' or 'tap') fails, the responsibility often falls back on the homeowner. Cost-sharing programs occasionally exist in some jurisdictions, but they are rare. Because the homeowner is responsible for the pipe under the street, a collapse in that area can be exceptionally expensive due to the need for traffic control and street restoration. This is why having localized service line insurance for your Chino Hills property is highly recommended."
        },
        {
            question: "What happens if your sewer line collapses?",
            answer: "A collapsed sewer line is a plumbing emergency that requires immediate attention. When a pipe structurally fails, it creates a complete blockage that prevents wastewater from leaving your Chino Hills home. As a result, sewage will begin to back up into the lowest drains in the house, typically basement floor drains, showers, or toilets. Beyond the immediate mess, a collapsed line allows wastewater to saturate the soil around your foundation. Over time, this can lead to foundation instability, sinkholes on your property, and the attraction of pests like rodents and cockroaches. Furthermore, the standing water can lead to rapid mold growth within the walls or flooring near the backup. You will likely notice a persistent smell of sewer gas (rotten eggs) around your property. If you suspect a collapse, you must stop using water immediately and call a Chino Hills sewer specialist for a camera inspection to confirm the location and severity of the structural failure."
        },
        {
            question: "Does homeowners insurance cover burst sewer pipe?",
            answer: "Whether insurance covers a 'burst' sewer pipe depends on the 'peril' that caused the burst. If the pipe burst because it was 60 years old and corroded, it is considered a maintenance issue and is usually not covered. However, if the pipe burst due to a 'sudden and accidental' event—such as a major earthquake in the Chino Hills area or a lightning strike—you may have a claim under your standard policy. Most often, people confuse 'Water Backup' coverage with 'Sewer Line' coverage. Water backup coverage pays for the damage done to your carpet, drywall, and furniture when the sewer overflows into the house, but it does NOT pay for the repair of the pipe outside. To cover the physical pipe burst itself, you almost always need a 'Service Line Endorsement.' We recommend all Chino Hills clients review their declaration page for 'hidden' utility line coverage before starting a major replacement project, as it can save thousands in out-of-pocket expenses."
        },
        {
            question: "What are common sewer line problems?",
            answer: "Sewer line problems in Chino Hills usually fall into several predictable categories. Root intrusion is the most common issue, where small roots find gaps in pipe joints (especially clay) and grow into massive blockages. Corrosion and scaling are frequent in older cast iron pipes, where the interior becomes rough and snags debris, eventually narrowing the pipe's diameter. 'Bellies' or sagging sections of pipe occur when soil shifts, creating a low spot where water and solids collect and eventually clog. Pipe offsets happen when two sections of pipe shift out of alignment, creating a lip that catches waste. Finally, total collapses occur in aged Orangeburg or clay pipes that can no longer support the weight of the soil above them. Many Chino Hills properties also suffer from 'grease-logging,' where cooking fats solidify over years of use. Each of these problems requires a different specialized solution, ranging from high-pressure hydro jetting to full-scale trenchless pipe bursting."
        },
        {
            question: "How long does it take to replace a sewer line in a house?",
            answer: "The timeline for sewer line replacement in Chino Hills varies significantly based on the method used. Traditional excavation—which involves digging a deep trench through your yard and potentially your driveway—typically takes 3 to 5 days. This includes the time needed for digging, pipe laying, city inspections, and backfilling. In contrast, trenchless technologies like 'Pipe Bursting' or 'Cured-in-Place Pipelining' (CIPP) can often be completed in just 1 to 2 days. Because trenchless methods only require one or two small access points, the setup and cleanup time is drastically reduced. However, if the city requires a deep street cut to reach the main, that specific portion of the job can add 1 to 2 days due to asphalt curing times and traffic safety protocols. Most Chino Hills homeowners can expect to have their water service restored within 24 to 48 hours for the vast majority of modern sewer restoration projects our team handles."
        },
        {
            question: "What is the 135 rule in plumbing?",
            answer: "In the context of drainage and sewer lines, the '135 rule' (sometimes referred to as the 135-degree rule) relates to the total change in direction a drain pipe can take between cleanouts. According to standard plumbing codes, you cannot have more than 135 degrees of total horizontal change in direction without an accessible cleanout. This is because every 'bend' or 'elbow' in the pipe increases the friction and the likelihood of debris catching and forming a clog. Furthermore, it makes it extremely difficult for a plumber's snake or camera to navigate the line. For example, if you have a 90-degree turn followed by a 45-degree turn, you have reached the 135-degree limit. If your Chino Hills home was built without these necessary cleanout access points, our team may need to install them as part of your sewer line replacement to ensure the system remains maintainable for decades to come. Proper adherence to this rule ensures that future rooting and inspections are both possible and efficient."
        },
        {
            question: "How do you tell if your sewer line needs to be replaced?",
            answer: "There are several warning signs that your Chino Hills sewer line is nearing the end of its life. Frequent, recurring clogs in multiple fixtures (toilets, sinks, tubs) are the most obvious indicator that the main line is failing. If you notice localized 'lush' spots in your lawn or areas that are consistently soggy despite no rain, it suggests a leak in the underground pipe is fertilizing and watering the grass. A persistent smell of sewer gas in your yard or basement is a major red flag for a crack or collapse. You might also hear 'gurgling' sounds coming from your drains when you flush the toilet or run the washing machine. In more advanced cases, you may see sinkholes or indentations in your pavers or driveway above the line path. If your Chino Hills home is over 50 years old and you are experiencing any of these symptoms, a professional camera inspection is the only definitive way to determine if a full replacement is necessary."
        },
        {
            question: "Will the city fix my sewer line?",
            answer: "The city of Chino Hills is only responsible for the 'public' portion of the sewer system, which is the large main line that runs under the middle of the street or through public easements. The homeowner is entirely responsible for the 'private' lateral line that connects the house to that main line. This responsibility holds true even for the section of the pipe that runs under the sidewalk, the curb, and into the street up to the 'tap.' There is a common misconception that once the pipe leaves the property line, it becomes the city's problem—this is almost never the case in Southern California. Some cities have very specific programs for 'lower lateral' repair, but Chino Hills typically places the burden on the property owner. If you believe the blockage is in the city main, you can call the Public Works department to check, but if they find the main is clear, the subsequent private repair bill is yours to manage."
        },
        {
            question: "How serious is a cracked sewer pipe?",
            answer: "A cracked sewer pipe is an extremely serious issue that will only worsen over time. Unlike a pressurized water pipe that might spray water, a sewer pipe is usually gravity-fed, meaning it leaks into the surrounding soil slowly. This 'slow' leak is actually more dangerous because it can go unnoticed for months while it creates subterranean voids. These voids eventually lead to sinkholes or foundation settlement, which can cost tens of thousands of dollars to repair. Furthermore, even a hairline crack is an open invitation for tree roots. Roots seek out the moisture and nutrients inside the pipe, and once they enter through a crack, they will grow rapidly until the pipe is completely blocked or shattered. In Chino Hills, where seismic activity can cause small shifts in the earth, a crack often leads to a complete pipe offset or collapse within one or two years. Ignoring a crack today frequently leads to a total plumbing catastrophe tomorrow."
        },
        {
            question: "Is it hard to replace a sewer line?",
            answer: "Sewer line replacement is one of the most labor-intensive and technically demanding tasks in the plumbing industry. It requires precise mathematical calculations to ensure the pipe has a '1/4 inch per foot' slope for proper gravity flow. Too little slope and waste won't move; too much slope and the water will outrun the solids, leading to clogs. Beyond the physics, the physical labor of excavation in the diverse soils of the Chino Hills area can be grueling. We often encounter hard-packed clay or rocky strata that require specialized digging equipment. Navigating other underground utilities—like gas lines, fiber-optic cables, and electrical conduits—requires extreme care and professional 'locate' services (811). Using modern trenchless methods like pipe bursting makes the process 'easier' on your landscape, but it requires highly expensive, specialized hydraulic pulling equipment and a deep understanding of structural tension. It is definitely not a task for an amateur."
        },
        {
            question: "Is sewer line insurance tax deductible?",
            answer: "Under current IRS regulations, insurance premiums for a personal residence, including sewer line insurance or service line endorsements, are generally NOT tax-deductible. These are considered personal living expenses. However, there is a notable exception for rental property owners. If you own a rental property in Chino Hills and you pay for sewer line insurance or perform a sewer line replacement, those costs are considered business expenses. The insurance premium is fully deductible against the rental income. The cost of a full sewer line replacement on a rental property is usually considered a 'capital improvement,' meaning you cannot deduct the entire cost in one year but must depreciate it over 27.5 years. If the work was a minor 'repair' (like rooting or a small patch), it might be fully deductible in the year it was paid. Always consult with a qualified Chino Hills tax professional to see how these rules apply to your specific financial situation."
        },
        {
            question: "How to tell if a sewer line is collapsed?",
            answer: "Identifying a collapsed sewer line requires looking for specific, catastrophic symptoms. The most defining sign of a collapse is a 'soft' blockage that cannot be cleared by a standard plumber's snake. If the snake comes back with mud or dirt on the end, it means the pipe has broken open and soil is filling the line. Another indicator is the sudden appearance of a sinkhole or a deep indentation in your lawn or driveway along the path of the sewer lateral. You may also notice that when you run water anywhere in the house, it immediately backs up into the lowest drain, regardless of how many times you 'clear' it. A camera inspection is the gold standard for diagnosis; a collapsed pipe will show as a wall of dirt or a jagged edge where the pipe material has disappeared on the monitor. In Chino Hills, where older properties may still have clay or Orangeburg pipes, a collapse is often the end result of decades of slow structural weakening."
        },
        {
            question: "What not to say to a home insurance adjuster?",
            answer: "When dealing with a sewer-related insurance claim, you must be very careful with your language. Do not use words like 'long-term,' 'deterioration,' 'old,' or 'wear and tear.' Insurance adjusters are trained to look for reasons to deny a claim based on 'lack of maintenance.' Instead, focus on the facts of the sudden event. If you describe the problem as a 'gradual' leak that you've noticed for years, your claim will almost certainly be denied. Do not admit to knowing about the problem before the current backup occurred unless you have proof you attempted to fix it. Do not guess about the cause of the failure; simply state the current damages (e.g., 'there is sewage in my basement') and let professional reports determine the cause. If a Chino Hills specialist finds that a specific sudden event (like a major root intrusion or soil shift) caused the damage, ensure that factual report is what the adjuster receives. Being precise and factual is your best strategy for a successful claim."
        },
        {
            question: "How many years does a sewer line last?",
            answer: "Sewer line longevity is strictly material-dependent. Clay pipes typically last 50-60 years before they become riddled with root-invaded joints. Cast iron pipes last 75-100 years but often need 'descaling' or lining after year 50 to maintain functionality. PVC (plastic) pipes are the modern gold standard, engineered to last 100+ years because they do not rust, corrode, or rot. Orangeburg pipes are the most problematic, with a lifespan that rarely exceeds 50 years; many Chino Hills homes built in the mid-20th century are seeing these pipes fail right now. If your Chino Hills home was built in the 1970s or earlier, you are likely in the 'red zone' for sewer failure. Environmental factors also play a role; highly acidic soil or the presence of thirsty trees like Willows or Maples can cut a pipe's expected life by 20% or more. Knowing your pipe material is the best way to predict when a replacement will be needed."
        },
        {
            question: "How to replace a sewer line without digging?",
            answer: "Replacing a sewer line without digging is achieved through 'trenchless' technology. There are two main methods: Pipe Bursting and Cured-in-Place Pipe (CIPP) lining. Pipe Bursting involves digging two small access holes at either end of the line. A large hydraulic head is pulled through the old pipe, shattering it into the surrounding soil while simultaneously pulling a new, seamless HDPE (High-Density Polyethylene) pipe behind it. CIPP Lining involved inserting a resin-saturated felt tube into the existing pipe. Once in place, the tube is inflated with air or water and cured using heat or UV light, essentially creating a 'pipe within a pipe.' This new inner pipe is seamless and root-proof. In Chino Hills, these methods are preferred because they preserve expensive landscaping, driveways, and porches. While the equipment for these methods is more specialized, the savings in surface restoration costs usually make trenchless the most economical choice for modern homeowners."
        },
        {
            question: "How much do plumbers charge to snake a sewer line?",
            answer: "In the Chino Hills region, a professional sewer snaking service typically costs between $150 and $450. The price varies based on the length of the line, the severity of the blockage, and the ease of access. If the plumber can work from an existing outdoor cleanout, the price is usually on the lower end ($150-$250). If they have to remove a toilet or climb onto your roof to snake through a vent stack, the labor cost increases to the $300-$450 range. Some companies offer 'flat rate' specials for a basic rooting, but be aware that these specials often don't include a camera inspection. We always recommend including a camera check after snaking to ensure the blockage was actually removed and to see if structural damage (like a split pipe) was the root cause. While snaking is a good temporary fix for clogs, it will not fix a collapsed or root-shattered line, which requires more permanent restoration."
        },
        {
            question: "How much does it cost to replumb a 2000 sq ft house?",
            answer: "Replumbing a 2,000 square foot home—which involves replacing all the internal water supply lines and potentially the drain lines—typically costs between $8,000 and $15,000. In Chino Hills, cost factors include the number of bathrooms, the accessibility of the pipes (crawlspace vs. slab foundation), and the material chosen. Using PEX (cross-linked polyethylene) is generally more affordable and faster to install than copper. If you are replacing the main sewer lateral as part of this project, you should add another $5,000 to $10,000 to that total. Projects on homes with concrete slabs are the most expensive because they require 'tunneling' or cutting into the floor to reach the pipes. While it is a significant investment, replumbing a Chino Hills home significantly increases its resale value and eliminates the risk of catastrophic water damage from old, pin-holed copper or galvanized steel pipes."
        },
        {
            question: "What do plumbers use instead of copper?",
            answer: "The primary modern alternative to copper piping is PEX (cross-linked polyethylene). PEX has become the industry standard in Chino Hills for several reasons. It is flexible, meaning it can be 'fished' through walls with fewer connections and elbows, which significantly reduces the risk of leaks. It is also resistant to scale and chlorine, and it won't corrode like metal pipes. Furthermore, PEX is much cheaper than copper, which has skyrocketed in price due to global commodity shifts. For larger drain and sewer lines, plumbers have moved away from cast iron and clay in favor of schedule 40 PVC or ABS plastic. These plastic materials are lightweight, easy to join with solvent weld, and have extremely smooth interiors that resist clogging. For trenchless sewer replacements, HDPE (High-Density Polyethylene) is the preferred choice because of its incredible strength and ability to be pulled in a single, seamless leak-proof piece."
        },
        {
            question: "How much does it cost to replace a sewer line under a concrete slab?",
            answer: "Replacing a sewer line beneath a concrete slab is more complex and expensive than a standard yard replacement, with costs usually ranging from $150 to $300 per linear foot. For a typical Chino Hills home, this can result in a total bill of $10,000 to $25,000. There are two ways to handle this: jackhammering through the floor or 'tunneling' under the house. Jackhammering is messy and requires you to move out of the rooms being worked on, plus you have to pay for floor restoration. Tunneling is more expensive ($500+ per foot) but keeps the mess outside and allows you to stay in your home. Alternatively, many Chino Hills residents are now opting for 'Slab Lining' (a form of CIPP), where the pipe is repaired from the inside without any digging. This is often the most cost-effective and least disruptive method for slab-on-grade homes, provided the pipe hasn't completely collapsed."
        },
        {
            question: "How much does it cost to repair a collapsed sewer line?",
            answer: "Repairing a single collapsed section of a sewer line in Chino Hills typically costs between $2,500 and $6,000. This is higher than a simple clog removal because it requires excavation to reach the pipe, removal of the damaged section, and the installation of new pipe with robust couplings. However, if the collapse is located under a driveway, sidewalk, or deep in the yard, the price can quickly escalate due to the increased labor and restoration costs. It is important to consider the 'remaining life' of the rest of the pipe. If you have a 60-year-old clay line that collapsed in one spot, it is highly likely it will collapse in another spot within a few years. In these cases, we often advise Chino Hills homeowners that a full-length trenchless replacement ($8,000-$12,000) is a much better long-term investment than a series of $4,000 'spot repairs.'"
        },
        {
            question: "Can a broken sewer line cause a sinkhole?",
            answer: "Yes, a broken sewer line is a leading cause of localized sinkholes on residential properties. When a sewer pipe leaks, the wastewater doesn't just sit there; it flows into the surrounding soil, especially in the sandy or porous soils found in parts of Chino Hills. This moisture causes the soil to compress or wash away entirely, creating a subterranean cavern or 'void.' Eventually, the weight of the soil, grass, or pavement above can no longer be supported, and the surface suddenly gives way. In some cases, these sinkholes can be several feet deep and wide enough to swallow a lawnmower or cause a car's tire to sink into a driveway. If you notice a sudden, unexplained depression in your yard, it is vital to have your sewer line inspected immediately. A sinkhole is a clear indication of a major structural failure in the pipe that is actively eroding your property's foundation."
        },
        {
            question: "Can you sleeve a broken sewer line?",
            answer: "Yes, 'sleeving' (more formally known as Trenchless Pipe Lining or CIPP) is one of the most effective ways to fix a broken sewer line without full excavation. In this process, a flexible, resin-soaked 'sleeve' is inserted into the existing damaged pipe. Once it is correctly positioned, the sleeve is expanded using an internal bladder and then cured in place. This creates a brand-new, seamless PVC-quality pipe inside the old, broken one. This 'sleeve' is strong enough to stand alone even if the original outer pipe completely rots away. This method is incredibly popular in Chino Hills because it can fix cracks, root intrusion, and even small offsets without destroying your landscaping. However, sleeving cannot be used if the original pipe has already completely collapsed or if the 'belly' in the line is too severe. A camera inspection is required to determine if your specific Chino Hills line is a candidate for this advanced sleeving technology."
        },
        {
            question: "What are four signs that your sewer line is broken?",
            answer: "The four most common signs of a broken sewer line are: 1. Multiple recurring clogs in several drains throughout the house; 2. Persistent sewer gas odors (which smell like rotten eggs) in the yard or basement; 3. Unusual lush, green, or soggy patches in the lawn that don't match the rest of the yard; and 4. Gurgling or bubbling noises coming from toilets when you run a sink or shower. Additionally, you may see an increase in pest activity, as broken pipes allow rats and cockroaches to enter the drainage system from the soil. In the Chino Hills area, these signs often appear gradually. You might start by needing to snake your line once a year, then once every six months, and then every month. This progression is a clear signal that the pipe's structural integrity is failing and that a break has occurred, allowing roots or soil to enter the system. Early detection through these signs can save you from a major sewage backup inside your home."
        },
        {
            question: "How long does it take to fix a collapsed sewer line?",
            answer: "Fixing a collapsed sewer line usually takes between 1 and 4 days, depending on the location and the method chosen. If the collapse is in an easy-to-reach area of the yard, a localized repair can be done in about 24 hours. However, if the collapse is deep (over 6 feet underground) or located under a structural element like a porch or driveway, it can take 2 to 3 days just for the excavation and shoring required for safety. Once the pipe is replaced, the city of Chino Hills may require an inspector to visit the site before the trench is backfilled, which can add a half-day 'wait' to the timeline. If you choose a trenchless 'pipe bursting' replacement to fix the collapse, the work is often faster overall because the setup is more streamlined. Regardless of the method, our primary goal is to restore your sewer service as quickly as possible, usually within the first 24 hours of the project."
        },
        {
            question: "Can you sell a house with a broken sewer line?",
            answer: "While you can technically sell a house with a broken sewer line, it will significantly complicate the transaction. In California, sellers are legally required to disclose any known material defects, including a failing sewer line. Most buyers in Chino Hills will insist on a 'sewer scope' as part of their home inspection. If the scope reveals a break, the buyer will likely demand a credit for the full cost of replacement ($8,000-$15,000) or require you to fix it before closing. Furthermore, most traditional mortgage lenders and homeowners insurance companies may refuse to finalize the deal until the sewer is functional. Selling 'as-is' is an option, but you will typically have to lower your asking price by more than the cost of the repair to attract investors. Fixing the line proactively is almost always the better financial move, as it removes a major 'deal-breaker' and allows you to market the home as having a 'brand new, maintenance-free sewer system.'"
        },
        {
            question: "Can you repair a sewer line without digging it up?",
            answer: "Yes, modern 'trenchless' technology allows us to repair or replace sewer lines with minimal to no digging. The two primary methods used in Chino Hills are Pipe Lining and Pipe Bursting. Pipe Lining (CIPP) involves creating a new pipe inside the old one using a resin-soaked felt tube, which only requires a single small access point. Pipe Bursting involves pulling a brand new HDPE pipe through the old one, effectively breaking the old pipe apart as the new one moves into place; this requires two small 'entry' and 'exit' pits. These methods are highly sought after because they save homeowners thousands of dollars in restoration costs—you don't have to rebuild your deck, replant your prize roses, or repave your driveway. Most trenchless repairs can be completed in a single day, making them the most efficient choice for busy Chino Hills families who cannot afford a week-long plumbing disruption."
        },
        {
            question: "How bad is a cracked sewer line?",
            answer: "A cracked sewer line is a serious health and environmental hazard that should never be ignored. Even a small crack allows raw sewage (which contains pathogens like E. coli, Salmonella, and Hepatitis A) to leak into the soil around your home. Over time, this can contaminate groundwater and create a toxic environment in your crawlspace or yard. Furthermore, a crack is a 'signal' to every tree in your yard; roots will detect the nitrogen-rich water and grow straight into the crack, eventually shattering the pipe from the inside. From a structural standpoint, the leaking water erodes the soil that supports the pipe, leading to 'bellies' or total collapses. In the Chino Hills landscape, where soil can be prone to shifting, a cracked pipe is essentially a ticking time bomb. The longer you wait, the more likely the crack will evolve into a total blockage and an expensive emergency restoration project."
        },
        {
            question: "Does homeowners insurance cover a collapsed sewer line?",
            answer: "Standard homeowners insurance policies usually do NOT cover a collapsed sewer line unless it was caused by a specific, sudden, covered peril like a volcanic eruption or a major explosion. Collapses due to age, rust, corrosion, or tree roots (the most common causes) are viewed as 'wear and tear' and are excluded. The one exception is if you have purchased a specific 'Service Line Coverage' rider. This rider is designed specifically to cover the cost of a collapsed underground pipe due to soil pressure, root intrusion, or structural failure. If you are a Chino Hills homeowner and you don't have this rider, you should expect to pay for the repair out-of-pocket. However, your policy might still pay for the 'cleanup' if the collapse caused a backup that damaged your basement walls or floor, provided you have 'Water Backup and Sump Pump Overflow' coverage. It is a complex area of insurance, so we always recommend a thorough policy review with your Chino Hills agent."
        },
        {
            question: "Can you fix a sewer line yourself?",
            answer: "Fixing a sewer line yourself is strongly discouraged for several critical reasons. First, sewer line work in Chino Hills is governed by strict city codes that require permits and professional inspections; an unpermitted DIY repair can lead to heavy fines and problems when you eventually try to sell the house. Second, the work is physically dangerous. Deep trenches must be properly shored to prevent deadly 'cave-ins,' and exposure to raw sewage carries significant disease risks. Third, the precision required is immense. A sewer line must be perfectly sloped at a 2% grade (1/4 inch of drop per foot) to function correctly. A slight error in the angle will cause permanent, recurring clogs that only a professional can fix later. Finally, the tools required—like industrial excavators, hydro-jetters, or camera systems—are expensive to rent and require significant skill to operate. For a system as vital as your sewer, the risk of a DIY failure is far greater than the cost of hiring a Chino Hills professional."
        },
        {
            question: "Can you get sick from a broken sewer line?",
            answer: "Yes, you can absolutely get sick from a broken sewer line. Wastewater contains a dangerous cocktail of bacteria, viruses, and parasites. Common illnesses associated with sewage exposure include Gastroenteritis, Salmonellosis, and more severe infections like Leptospirosis or Legionnaires' disease. Furthermore, a broken line can release noxious sewer gases like Hydrogen Sulfide into your home. In low concentrations, these gases cause headaches, nausea, and dizziness; in high concentrations, they can be fatal. Mold is another significant risk; a leaking sewer line provides the perfect moisture source for toxic black mold to grow in your foundation or basement. If you smell sewer gas inside your Chino Hills home, or if you see wastewater pooling, you should treat it as a medical and environmental priority. Protecting your family from these contaminants is the number one reason we recommend immediate professional intervention for any suspected sewer line failure."
        },
        {
            question: "Who pays for a collapsed sewer line?",
            answer: "As the property owner, you are almost always responsible for paying for the repair or replacement of a collapsed sewer line between your house and the city's main connection point. Even though the pipe extends under public property (like the street or sidewalk), the City of Chino Hills generally considers the lateral line to be the homeowner's private property and responsibility. The city only pays for repairs if the failure occurs in the large main sewer line located deepest in the street. Because a collapse can require expensive street work, the costs can be significant. This is why many financial experts suggest that Chino Hills homeowners add 'Service Line' insurance to their policy for a few dollars a month. If you suspect a collapse, we can help you document the failure and determine exactly where the responsibility lies before you commit to a major repair bill."
        },
        {
            question: "Can you patch a cracked sewer line?",
            answer: "You can 'patch' a cracked sewer line using specialized trenchless techniques like 'Sectional Point Repair.' This involves inserting a localized liner into the pipe and positioning it exactly over the crack. Once cured, this 'patch' seals the crack and restores the pipe's integrity without the need for a full-length replacement. This is an excellent solution for Chino Hills homeowners who have a mostly healthy pipe with only one or two localized damaged spots (often caused by a single aggressive root). However, the success of a patch depends on the overall condition of the rest of the pipe. If the entire line is brittle or corroded, patching one spot is like putting a band-aid on a dam that's about to burst; it won't be long before another crack appears elsewhere. We use high-resolution cameras to assess the entire length of your Chino Hills line to determine if a patch is a viable, long-term fix or if it's merely delaying the inevitable need for a full replacement."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 transform origin-top-right" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/5 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-amber-400 mb-6 font-bold uppercase tracking-widest text-sm shadow-xl">
                        <Activity className="w-4 h-4" />
                        <span>EXPERT KNOWLEDGE BASE</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                        Sewer Line <span className="text-amber-600">Restoration Intel</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                        At Chino Hills Sewer Line Experts, we believe in radical transparency. Explore our deep knowledge base for professional insights into sewer replacement, insurance claims, and modern trenchless methods.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${openIndex === index ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-600'}`}>
                                        {openIndex === index ? <Info className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                                    </div>
                                    <span className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                                        {faq.question}
                                    </span>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-8 pt-2">
                                    <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-600 leading-relaxed text-slate-700 font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-600/20 transition-colors" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Need a Structural Diagnostic?</h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed italic">
                                Our Chino Hills team provides high-definition video sewer inspections to confirm failures and map out the most cost-effective trenchless replacement strategy for your specific property.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <a
                                href="tel:8777921410"
                                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-amber-900/40"
                            >
                                <Droplets className="w-6 h-6" />
                                (877) 792-1410
                            </a>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center italic">Professional Recovery Dispatch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SewerLineInfo;
