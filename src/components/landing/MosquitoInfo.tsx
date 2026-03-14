import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck } from "lucide-react";

/**
 * MosquitoInfo Component - "Expert Knowledge Base" section
 * Contains 24 deep-content Q&As (>150 words each) in a 2-column layout.
 * Questions are formatted as <h3> for SEO.
 * Answer backgrounds are solid white for readability.
 */

const FAQItem = ({ item, index }: { item: { q: string; a: string }, index: number }) => (
  <div className="mb-8 p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-amber-500/30 transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
        <HelpCircle className="w-5 h-5 text-amber-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors uppercase tracking-tight">
        {item.q}
      </h3>
    </div>
    <div className="pl-14">
      <p className="text-slate-600 leading-relaxed font-normal text-sm whitespace-pre-line p-6 bg-slate-50/50 rounded-2xl italic border-l-4 border-amber-500">
        {item.a}
      </p>
    </div>
  </div>
);

const MosquitoInfo = () => {
  const faqs = [
    {
      q: "What is the best company for mosquito control?",
      a: "Selecting the 'best' mosquito control company in Eagle Point, OR involves looking for a provider that combines locality with comprehensive multiphase treatment protocols. A top-tier provider should offer same-day service, use EPA-approved pesticides, and specifically target both adult populations and larvae breeding zones. In the Eagle Point area, look for companies that understand the unique Pacific Northwest environment, where seasonal factors and specific native species like Aedes and Culex mosquitos require different tactical approaches. \n\nProfessional services are usually superior to DIY solutions because they utilize industrial-grade foggers and high-pressure backpack sprayers that achieve much deeper penetration into foliage where mosquitos hide during the day. The best companies also provide a guarantee—if you see mosquitos within a certain window after treatment, they return for a free follow-up. Furthermore, look for a firm with high ratings on local directories that focuses on Name, Address, and Phone (NAP) consistency, indicating a stable and trustworthy local presence. Ultimately, the best company is one that doesn't just treat the perimeter but actively inspects gutters, low spots, and dense greenery to provide a 30-day bite-free environment for your family."
    },
    {
      q: "What is mosquito season in Oregon?",
      a: "In Oregon, and specifically in Eagle Point and the Rogue Valley, mosquito season typically begins in the mid-to-late spring as temperatures consistently rise above 50 degrees Fahrenheit. This is usually around April. The season reaches its absolute peak during the hot, dry summer months of July and August when the heat accelerates the biological lifecycle of the larvae, allowing them to mature into adults in as little as seven to ten days. \n\nActivity continues well into September and October until the first consistent hard frosts (temperatures below 32 degrees) kill off the adult population and force the species into winter dormancy. In recent years, due to changing climatic patterns and unusually mild springs in the Pacific Northwest, the season has been starting earlier and lasting longer. For Eagle Point residents, this means that early preventive measures—such as cleaning gutters and removing standing water in late March—are becoming increasingly important to minimize the initial 'flush' of mosquitos that emerge as the snowmelt and spring rains subside. Professional spraying should idealistically begin in May to maintain a protective barrier throughout the hottest months when the risk of annoyance and potential mosquito-borne disease is highest."
    },
    {
      q: "Are mosquitoes bad in the Pacific Northwest?",
      a: "A common misconception is that the Pacific Northwest's temperate climate prevents mosquito problems; however, Eagle Point and the surrounding Jackson County areas can experience extremely high mosquito activity. The region's abundant water sources, including rivers, irrigation canals, and agricultural run-off, provide perfect breeding habitats. While the Pacific Northwest might not have the same massive, swamp-based populations as the Gulf Coast, our local species are highly persistent and can make outdoor spaces unusable during the summer months. \n\nFurthermore, the dense evergreen and deciduous foliage common in Oregon yards provides excellent 'harborage zones' where mosquitos rest during the heat of the day, protected from the sun and wind. This makes targeted barrier treatments particularly effective here. The threat level is also increasing as invasive species like the Japanese Rock Pool mosquito expand their range into the Northwest. These species are often more aggressive and active during broader windows of the day than our native varieties. Therefore, while we may not deal with 'swarms' in every town, Eagle Point residents definitely feel the impact of heavy localized infestations that require professional intervention to manage effectively for standard residential enjoyment."
    },
    {
      q: "How effective is aerial spraying for mosquitoes?",
      a: "Aerial spraying is a large-scale public health tool often used by vector control districts in Oregon during disease outbreaks or after significant flooding events. In many cases, it is highly effective for rapid, wide-area knockdown of flying adult mosquitos, using ultra-low-volume (ULV) droplets that remain suspended in the air. However, for an individual homeowner in Eagle Point, aerial spraying performed by the county is often insufficient for a bite-free backyard. \n\nAerial applications are designed to reduce overall population density to prevent disease spread (like West Nile), not to eliminate every mosquito. The droplets often cannot penetrate through dense tree canopies, patio covers, or under the eaves of houses where mosquitos actually reside during the day. This is why ground-based professional treatments remain the gold standard for residential control. A ground technician can precisely target the 'shade zones' and 'wet zones' on your specific property that an aerial flyover would miss. For the most effective results, residents who live in areas that are aerial-sprayed still benefit significantly from a localized barrier treatment that provides long-lasting residual protection that wide-area fogging simply cannot offer."
    },
    {
      q: "What smell do mosquitoes absolutely hate?",
      a: "Wasps and mosquitos are both highly sensitive to certain scents that interfere with their olfactory receptors. Mosquitos specifically find the scent of peppermint oil and eucalyptus to be highly repulsive. Many natural repellent sprays use high concentrations of these essential oils because they effectively 'mask' the carbon dioxide and skin odors that mosquitos use to track their human targets. Other scents that mosquitos are known to dislike include citronella, lavender, tea tree oil, and crushed geraniums. \n\nCloves and cedarwood are also effective natural repellents to some degree. Interestingly, while these scents can deter a few foragers from landing on your skin for a short period, they are not powerful enough to drive a population away from a nesting site or to keep a yard clear for a large party. The 'hatred' of these smells is mostly useful for personal protection or for small-scale deterrents like patio candles. For Eagle Point properties with heavy infestations, including breeding in dense hedges or standing water, these natural scents will not provide a meaningful reduction in the mosquito population. Professional chemicals use synthetic versions of these repellents combined with active killers to provide a solution that is both attractive to the user (low odor) and lethal to the pest."
    },
    {
      q: "What is a mosquito's worst enemy?",
      a: "In the natural ecosystem around Eagle Point, OR, mosquitos have several high-efficiency predators that act as their 'worst enemies.' Dragonflies are often cited as the most effective since they are skilled aerial hunters that can consume hundreds of mosquitos in a single day, both in the larval stage (when they live in the same water) and as adults. Bats are another critical enemy; a single brown bat can catch up to 1,000 mosquito-sized insects in an hour, providing significant natural 'pest control' during the night. \n\nIn the water, the aptly named 'Mosquitofish' (Gambusia affinis) is a voracious predator of larvae and is often introduced into stagnant ponds by vector control teams. Other enemies include swallows, purple martins, and certain species of frogs. However, it's important to understand that while these natural enemies are beneficial to the local environment in Oregon, they are rarely capable of controlling a residential mosquito problem by themselves. A yard with thousands of eggs in the gutters and millions of eggs in nearby irrigation ditches will simply overwhelm the local predator population. This is why human intervention through integrated pest management remains the only reliable way to ensure a safe, bite-free environment for Eagle Point homeowners regardless of how many dragonflies are in the air."
    },
    {
      q: "What's the worst state for mosquitoes?",
      a: "Typically, states with high humidity, vast wetlands, and year-round warm temperatures are ranked as the worst for mosquitos. Florida and Louisiana are perennial contenders due to their massive swamp systems and tropical climates that allow for continuous breeding cycles. Alaska is also frequently cited as a 'worst' state during its brief but intense summer when the thawing permafrost creates millions of tiny pools of water, leading to localized swarms that are legendary in their scale and aggression. \n\nWhile Oregon is generally not ranked at the very top of federal 'worst' lists, localized areas like Eagle Point and the Rogue Valley can feel just as bad during the peak of summer. The agricultural irrigation and the proximity to the Rogue River create 'micro-climates' where mosquito activity is significantly higher than the state average. This highlights a key point in pest control: the 'worst state' doesn't matter as much as the 'worst yard' or 'worst neighborhood.' Even in a moderately affected state like Oregon, a property that isn't professionally managed can have mosquito counts that rival the most infested parts of the Deep South, necessitating dedicated local intervention."
    },
    {
      q: "Do mosquitoes prefer fat or skinny people?",
      a: "Scientific research into mosquito attraction suggests that their preference is not based on body weight (fat vs. skinny) directly, but rather on the metabolic outputs and chemical signatures of the individual. Mosquitos are attracted to carbon dioxide (CO2), heat, and certain sweat components like lactic acid and ammonia. Therefore, anyone with a higher metabolic rate—who consequently produces more CO2 and heat—will be more attractive to mosquitos. This can include larger individuals (who naturally exhale more CO2), pregnant women, and people who have recently been exercising. \n\nBlood type also plays a significant role, with several studies indicating that people with Type O blood are nearly twice as attractive to certain species as those with Type A. Additionally, skin bacteria and the 'microbiome' of the host can produce scents that either attract or repel mosquitos. While being 'skinny' doesn't necessarily protect you, being an 'over-producer' of metabolic markers definitely makes you a target. Regardless of your physical build or blood type, if you live in Eagle Point, the only way to avoid being the local mosquito's favorite meal is to ensure that your property is treated with a barrier spray that provides broad protection for everyone in your household."
    },
    {
      q: "What repels mosquitoes naturally?",
      a: "Natural mosquito repellents for Eagle Point residents center around botanical extracts and lifestyle adjustments. As mentioned, essential oils like peppermint, lemon eucalyptus, and citronella are the most common natural chemical repellents. Beyond oils, certain plants can be incorporated into your landscape to provide a mild deterrent effect, such as marigolds, catnip, and basil. These plants produce oils that mosquitos dislike, although you usually need to crush the leaves to release enough scent to be effective. \n\nBiological control is another natural method; encouraging predators like bats and dragonflies by providing houses or appropriate water features can help. However, the most effective 'natural' repellent for a homeowner is actually 'source reduction.' By meticulously removing standing water in flower pots, tire swings, and tarps, you are naturally preventing thousands of mosquitos from ever existing. Using yellow 'bug lights' on your porch instead of traditional white bulbs also repels them naturally by being outside their visible light spectrum, making your home less of a beacon at night. While these methods are excellent additions to a pest control strategy, they are best used as supplements to a professional treatment program that can handle the sheer volume of mosquitos that Oregon's environment produces."
    },
    {
      q: "Which US state has no mosquitoes?",
      a: "Technically, there is no US state that is completely free of mosquitos. They are incredibly adaptable insects that have found ways to survive in every environment from the deserts of Arizona to the tundras of Alaska. Even Hawaii, which was once mosquito-free, saw them introduced in the 19th century. However, West Virginia is often cited as the state with the lowest number of mosquito species, but even there, they are a significant nuisance in the summer months. \n\nSome regions within states are 'better' than others—for example, high-altitude alpine zones with low temperatures and high winds make it difficult for mosquitos to fly and breed. But for a state like Oregon, with its diverse geography ranging from misty coasts to high deserts and fertile valleys like Eagle Point, mosquitos are part of the ecosystem everywhere. The idea that you can move to a state to escape them is a myth; instead, the correct approach is to manage the specific environment of your own property. With professional mosquito control, an Eagle Point homeowner can create a backyard that feels like it's in a 'mosquito-free state' even when the surrounding fields are heavily infested."
    },
    {
      q: "What is the most common mosquito in Oregon?",
      a: "The most prevalent mosquito species in Oregon, and commonly found in the Eagle Point area, is the Culex pipiens, also known as the Northern House Mosquito. This species is particularly significant because it is a primary vector for the West Nile Virus in the United States. They are typically medium-sized, brownish mosquitos that are most active during the dawn and dusk hours (crepuscular activity). They prefer to lay their eggs in stagnant, nutrient-rich water, making urban and suburban drainage systems, clogged gutters, and neglected birdbaths their favorite breeding grounds. \n\nAnother common species in the Pacific Northwest is the Aedes vexans, often called the 'floodwater mosquito.' These are noted for being extremely aggressive daytime biters that can travel several miles from their breeding site in search of a meal. This means that even if your yard in Eagle Point is perfectly clean, you could be targeted by Aedes mosquitos moving in from nearby agricultural lands. A professional service recognizes these different species and their varying habits, applying a combination of barrier sprays for the day-resting Aedes and source-control treatments for the crepuscular Culex, ensuring a comprehensive solution for the local environment."
    },
    {
      q: "What is the number one predator of mosquitoes?",
      a: "While many think of bats or birds, the number one natural predator of mosquitos—considering both the larval and adult stages—is the dragonfly. This incredible insect is often referred to as a 'mosquito hawk.' In its larval (nymph) stage, it lives underwater and consumes vast quantities of mosquito larvae. Once it matures into an adult, it uses its exceptional flight agility and multi-faceted vision to catch adult mosquitos mid-air with a success rate of nearly 95%. A single dragonfly can consume hundreds of mosquitos in one afternoon. \n\nBeyond dragonflies, humans are technically the number one 'predator' through the use of technology and specialized pest control. In Eagle Point, professional exterminators use high-pressure equipment to apply insecticides that act much more efficiently than any natural predator could. While we should always encourage dragonflies in our Oregon gardens, they cannot handle an infestation that involves thousands of emerging adults per hour from nearby irrigation canals. Professional intervention acts as the ultimate predator, using science to instantly collapse populations that have grown beyond what the natural ecosystem can handle."
    },
    {
      q: "What is the only country with no mosquitos?",
      a: "Iceland is widely recognized as the only country in the world that is completely free of mosquitos. While its neighbors like Greenland and Norway have massive mosquito populations, Iceland's unique climate and geology have kept them at bay. The primary reason is Iceland's rapid and unpredictable 'thaw-freeze' cycles. In other cold regions, mosquitos larvae hibernate when the water freezes and emerge when it thaws. In Iceland, the weather can thaw and then freeze again very quickly several times in a single winter, which disrupts the biological lifecycle of the larvae and kills them before they can mature. \n\nAdditionally, the chemical composition of Iceland's groundwater and soil may played a role. For those of us living in Eagle Point, OR, we don't have the benefit of Iceland's unique climate to protect us. Our steady spring and hot summers are ideal for sustained mosquito reproduction. This means that unlike Icelanders, we must be proactive. Since we cannot change our climate to kill the larvae naturally, we must use professional larval growth inhibitors and barrier sprays to achieve a similar 'mosquito-free' environment on our own properties."
    },
    {
      q: "Are mosquitoes a problem in Oregon?",
      a: "Yes, mosquitos are a significant problem in Oregon, particularly in the fertile valleys like Eagle Point. While the state is famous for its rain and lush greenery, those same environmental factors create massive breeding grounds. The problem is and twofold: they are a major 'nuisance pest' that can prevent residents from enjoying their decks, gardens, and local parks, but they are also a public health concern. Oregon health officials consistently monitor for West Nile Virus and St. Louis Encephalitis, both of which have been found in local mosquito populations in previous seasons. \n\nIn the Rogue Valley, the agricultural context adds another layer of complexity. Irrigation for orchards and farms often creates slow-moving or stagnant water that becomes an 'incubator' for mosquitos. This results in populations that are often much denser than what you would find in the high desert or the coastal regions. For Eagle Point homeowners, the 'problem' is most visible in the summer evening when the 'mosquito buzz' becomes the dominant sound of the backyard. Without professional intervention, the sheer volume of mosquitos can lead to dozens of bites in a single hour, making professional barrier spraying an essential service for local quality of life."
    },
    {
      q: "What is the new mosquito disease going around?",
      a: "While West Nile Virus remains the most common mosquito-borne disease in the United States and Oregon, there is increasing concern about the spread of invasive diseases like Zika, Chikungunya, and Dengue. In recent years, a 'new' focus has also been placed on the Eastern Equine Encephalitis (EEE), which, while rare, has a high mortality rate and has seen spikes in activity in various parts of the country. Furthermore, the EEE and West Nile are now being monitored more closely in the Pacific Northwest as expanding ranges for Aedes and Culex mosquitos bring these threats closer to Eagle Point. \n\nAnother emerging concern is the heartworm disease in pets, which is almost exclusively spread via mosquito bites. Veterinarians in Oregon are seeing a rise in cases, coinciding with larger mosquito populations. This highlights that mosquito control isn't just about human comfort—it's about the biological safety of the entire household. By using a professional service in Eagle Point to eliminate mosquitos, you are effectively creating a 'safety shield' that reduces the statistical likelihood of any of these diseases entering your family's immediate environment."
    },
    {
      q: "What did Native Americans use to repel mosquitoes?",
      a: "Native Americans had deep indigenous knowledge regarding the natural repellents available in their environments. In the Pacific Northwest and surrounding regions, many tribes utilized 'smudging' or slow-burning fires. They would burn specific plants like sweetgrass, cedar, or sage, which produce a smoke that mosquitos find highly disorienting and repulsive. They also used the leaves of the American Beautyberry plant; modern science has recently confirmed that this plant contains chemicals like callicarpenal that are just as effective as DEET at repelling mosquitos. \n\nOther methods included rubbing their skin with certain fats or oils infused with peppermint, pennyroyal, or crushed yarrow. These substances acted as a physical and chemical barrier. While these ancestral methods were effective for survival and mobility, they were temporary. For an Eagle Point homeowner today, we can appreciate the history of natural repellent knowledge while utilizing its modern equivalent. Today's professional treatments are essentially the high-tech evolution of these methods—using refined versions of plant-based chemicals (pyrethrins) and advanced delivery systems to provide weeks of protection rather than just a few minutes of smoke."
    },
    {
      q: "Is it worth spraying your yard for mosquitoes?",
      a: "Spraying your yard for mosquitos in Eagle Point is absolutely worth the investment, particularly when you consider the 'lost value' of an unusable backyard. Most homeowners who choose professional spraying find that it completely changes their outdoor experience. Instead of retreating indoors at 6:00 PM or dousing themselves in sticky personal repellents, they can host dinners, play with children, and work in the garden without a single bite. The 'worth' is even higher for families with members who have severe reactions to bites or for those who are concerned about mosquito-borne illnesses. \n\nWhen you compare the cost of a professional monthly service to the cost of buying dozens of cans of personal spray, bug zappers (which are mostly ineffective), and patio candles, the professional service often proves to be more cost-effective. Furthermore, a professional service addresses the root of the problem—the eggs and larvae—rather than just the few adults flying around. In a climate like Oregon's, where the window for outdoor enjoyment is cherished, professional mosquito control is a minor expense that yields massive dividends in property value and personal comfort."
    },
    {
      q: "Which smell do mosquitoes hate?",
      a: "Mosquitos are uniquely sensitive to odors, and they 'hate' any scent that overpowers their ability to detect their prey. The top scent they avoid is peppermint. The high concentration of menthol in peppermint oil is abrasive to their sensory organs. Other smells they dislike include garlic (though eating it doesn't help much), rosemary, lemongrass (citronella), and tea tree oil. Many Eagle Point residents try to use 'citronella plants'—which are actually a type of geranium—to keep them away, but the plant itself doesn't release enough scent to be effective unless the leaves are crushed. \n\nAnother smell they notably dislike is smoke, which is why fire pits can provide a localized 'no-fly zone.' However, for a homeowner, the goal isn't just to make them 'hate' the air but to remove them entirely. Professional insecticides are designed to be virtually odorless to humans but highly effective as a repellent and contact killer for mosquitos. By using a professional Eagle Point service, you get the benefit of a 'mosquito-hated' environment without having to surround yourself with the overpowering smell of garlic or essential oils, providing a clean and comfortable yard."
    },
    {
      q: "What state has the worst mosquito problem?",
      a: "The title for the 'worst state' usually goes to Alaska or Florida, depending on how you measure it. Florida has the longest season and the most diverse range of species (over 80), while Alaska has the most intense 'swarms' during the summer thaw. However, according to pest control industry data, Atlanta, Georgia often ranks as the city with the highest volume of mosquito control service calls, placing Georgia high on the list. \n\nIn Oregon, while we may not have the same national reputation for mosquitos as the Everglades, we have our own local 'worst' zones. The Rogue Valley and Eagle Point are within these zones due to our agricultural water usage and temperate summers. This means that while Oregon isn't the 'worst' state nationally, Eagle Point can certainly feel like a 'worst' city during a heavy mosquito year. This is why local SEO and NAP-focused companies are so important in our community—they provide a specialized service for a local problem that national statistics often overlook."
    },
    {
      q: "Is there dengue in Oregon?",
      a: "Dengue fever is not currently endemic to Oregon, meaning it is not naturally established in the local mosquito population in Eagle Point. However, cases are reported in the state every year, almost exclusively from travelers returning from tropical regions where Dengue is common. The risk is that if an infected traveler returns to Eagle Point and is bitten by a local mosquito (specifically an Aedes species), that mosquito could then spread the virus to other local residents. \n\nPublic health officials in Jackson County monitor these situations closely. While the current risk of a local outbreak is extremely low, the presence of the Aedes mosquito—which is shifting its range northward into the Pacific Northwest—makes it a future possibility. By maintaining professional mosquito control on your property, you are contributing to a community-wide 'herd protection.' If the mosquito density in Eagle Point is kept low through professional spraying and source control, the chances of any travel-related disease establishing a local transmission cycle are drastically reduced. It is another reason why proactive mosquito management is a responsible choice for both personal and public health."
    },
    {
      q: "What blood do mosquitoes dislike the most?",
      a: "Research indicates that mosquitos have a relative 'dislike' for Type A blood, or more accurately, they find it significantly less attractive than Type O. In controlled experiments, certain mosquito species like Aedes albopictus landed on people with Type O blood twice as often as they did on those with Type A. People with Type B blood fell somewhere in the middle of the attraction scale. This preference is linked to the 'secretors'—nearly 80% of humans secrete a chemical signal through their skin that reveals their blood type. \n\nHowever, it's important to note that 'dislike' is a relative term. A hungry mosquito in Eagle Point will happily bite someone with Type A blood if they are the most accessible target. Attraction is a complex cocktail of your blood type, your CO2 output, your body temperature, and your specific skin chemistry. If you have Type A blood, you might be the last person hit at a BBQ, but you will still be hit. Relying on your blood type for protection is a losing strategy. The only way to ensure you aren't bitten, regardless of your biology, is to have a professional barrier spray applied to your property to keep the mosquitos away from your social zones entirely."
    },
    {
      q: "What hours of the day are mosquitoes the worst?",
      a: "For the most common species in Eagle Point, such as the Culex mosquito, activity peaks during the 'crepuscular' hours—the period of dawn and dusk. This is because these mosquitos are sensitive to desiccation (drying out) and avoid the intense heat and direct sunlight of the Oregon afternoon. During the middle of the day, they hide in deep shade, under leaves, and in the dense greenery around your home. As the sun goes down and humidity rises, they emerge to forage. \n\nHowever, it is a mistake to think you are safe during the day. Other species, particularly the invasive Aedes mosquitos, are 'daylight biters.' They are most active during the morning and broad afternoon, and they are much more aggressive and persistent than our native Culex. This means that if you have a variety of species on your property, the 'worst hours' could be 24/7 if you aren't careful. A professional mosquito control treatment is designed to handle this by coating the daytime hiding spots with a residual insecticide, effectively killing the mosquitos while they are 'off-duty,' so they never emerge during the evening to bother you."
    },
    {
      q: "What are the giant mosquito looking bugs in Oregon?",
      a: "Many Eagle Point residents are often alarmed to see giant, mosquito-like insects that are nearly two inches long. These are actually 'Crane Flies,' often mistakenly called 'Mosquito Hawks.' Despite their intimidating appearance and the myth that they eat mosquitos, Crane Flies are entirely harmless. They do not bite, they do not sting, and as adults, many species don't even have mouthparts—they exist solely to mate and then die. They are often attracted to porch lights and can be quite clumsy fliers inside a house. \n\nIt is important to distinguish these from actual mosquitos, as Crane Flies don't require pest control. However, if you are seeing 'giant' bugs alongside many smaller, biting ones, the smaller ones are the ones to worry about. Actual mosquitos in Oregon are much smaller and more agile. If you're constantly swatting at small, fast insects while the giant crane flies bounce off your ceiling, you have a real mosquito problem. A professional Eagle Point exterminator will help you identify the specific species to ensure that the treatment targets the actual biting threats while letting the harmless local insects go about their business."
    },
    {
      q: "Which state doesn't have mosquitoes?",
      a: "As mentioned, there is no state that is completely mosquito-free. However, if you are looking for the region with the lowest mosquito impact, you generally have to look at arid, high-altitude desert regions where water is scarce and the climate is too dry for larvae to survive. Parts of the Nevada and Arizona deserts have very few mosquitos in the open areas, though they still congregate near any oasis or urban swimming pool. \n\nIn Oregon, the high-desert areas east of the Cascades have fewer mosquitos than the lush valleys, but they are still present. Eagle Point and the Rogue Valley are unfortunately in one of the higher-activity zones due to our beautiful environment and water access. The takeaway for homeowners is that you cannot move away from the problem—but you can eliminate it on your property. By hiring a professional mosquito control service, you can effectively experience 'no mosquitos' in your own private yard, giving you the best of both worlds: Oregon's beautiful scenery without the annoying and dangerous bite of its most common pests."
    }
  ];

  // Split faqs into two columns
  const firstCol = faqs.slice(0, 12);
  const secondCol = faqs.slice(12);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <BookOpen className="w-4 h-4" />
            Mosquito Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Deep Insights Into <span className="text-amber-500">Mosquito Control</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Everything you need to know about managing, removing, and preventing mosquito populations in Eagle Point, OR.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {firstCol.map((item, idx) => (
              <FAQItem key={idx} item={item} index={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {secondCol.map((item, idx) => (
              <FAQItem key={idx + 12} item={item} index={idx + 12} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Still Getting Bites?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't let mosquitos ruin your Oregon summer. Our Eagle Point specialists are ready with barrier sprays and source control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:3238801224" className="bg-white text-amber-600 hover:bg-amber-50 h-16 px-10 rounded-2xl text-xl font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl">
                <ShieldCheck className="w-6 h-6" />
                (323) 880-1224
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosquitoInfo;
