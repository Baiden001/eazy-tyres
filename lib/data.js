export const NAV=[["/","Home"],["/about","About Us"],["/products","Products"],["/industries","Industries"],["/services","Services"],["/contact","Contact"]];
export const WA="https://wa.me/233257510997";
export const CONTACT={
  name:"Eazy Road Tyres (PTY) LTD",
  tagline:"Keeping Your Fleet Rolling, Mile After Mile.",
  location:"Tarkwa, Western Region, Ghana",
  phone:"+233-25-751-0997",
  tel:"+233257510997",
  email:"eazyroadtyres@ashelitegroup.com",
  web:"https://eazytyres.ashelitegroups.com"
};
export const FEATURES=[["shield","Uncompromising Quality"],["globe","Global Brand Partnerships"],["headset","24/7 Emergency Support"],["gear","Professional Tyre Solutions"]];
// Vehicle types shown in the hero, ordered biggest to smallest. Icon files live in public/assets/vehicles/.
export const VEHICLES=[["Tipper Cars","tipper"],["Low Deck","lowdeck"],["Trailers","trailer"],["Pickups","pickup"],["SUVs","suv"],["Saloon Cars","saloon"]];

export const BRAND_DETAILS = [
  { name: "Michelin", logo: "/assets/brands/michelin.png", origin: "France" },
  { name: "Goodyear", logo: "/assets/brands/goodyear.png", origin: "USA" },
  { name: "Continental", logo: "/assets/brands/continental.png", origin: "Germany" },
  { name: "Apollo", logo: "/assets/brands/apollo.png", origin: "India" },
  { name: "Bridgestone", logo: "/assets/brands/bridgestone.png", origin: "Japan" },
  { name: "Yokohama", logo: "/assets/brands/yokohama.png", origin: "Japan" },
  { name: "Triangle", logo: "/assets/brands/triangle.png", origin: "China" },
  { name: "Linglong", logo: "/assets/brands/linglong.png", origin: "China" },
];

export const BRANDS = BRAND_DETAILS.map((brand) => brand.name);

export const BRANDS_INTRO =
  "We offer tyre solutions from recognised international manufacturers, selected to serve passenger vehicles, commercial trucks and trailers.";

export const SIZES=["315/80R22.5","13R22.5","12.00R20","385/65R22.5","295/80R22.5","245/70R19.5","205/75R17.5","265/70R17","265/65R17","245/70R16","235/70R16","215/70R16","195/65R15","205/65R15","175/65R14"];
export const INDUSTRIES=[
 ["Construction","Dependable tyres and on-site support for tipper trucks and construction fleets."],
 ["Infrastructure & Civils","Tyre supply and support for fleets working on infrastructure and civil projects."],
 ["Waste Management","Tyre supply and breakdown support for waste-handling fleets."],
 ["Transport & Logistics","Tyres for commercial trucks, buses and trailers on the move every day."],
 ["Passenger & Private Vehicles","Tyres for saloon cars, SUVs and pick-ups, with professional fitment."]];
export const SERVICES=[
 ["Tyre supply","Supply of suitable tyres for tipper trucks, commercial transportation, SUVs, saloon cars and other supported vehicles."],
 ["Professional fitment","Professional tyre fitting for supported vehicles."],
 ["On-site tyre management","On-site support intended to reduce downtime and keep fleets operational."],
 ["Tyre assessment and consultation","Guidance on selecting tyres appropriate for terrain, load and operating requirements."],
 ["Emergency breakdown support","Emergency support for tyre-related breakdown situations."],
 ["Fleet monitoring and reporting","Monitoring tyre condition, wear and fleet tyre performance."]];
export const HOME_SERVICES=["Tyre supply","Professional fitment","Emergency breakdown support"];
// Only counts we can verify from our own content (no unsupported claims).
export const STATS=[[String(BRANDS.length),"Global brands supplied"],["24/7","Emergency support"],[String(INDUSTRIES.length),"Industries served"],[String(SERVICES.length),"Core services"]];
export const PRODUCT_CATEGORIES=[
 {name:"Tipper and truck tyres",desc:"Radial tyres for tipper trucks, commercial trucks and buses.",sizes:["315/80R22.5","295/80R22.5","13R22.5","12R22.5","12.00R20"],brands:[]},
 {name:"Trailer tyres",desc:"Tyres for trailer axles and commercial haulage.",sizes:["385/65R22.5"],brands:[]},
 {name:"Light truck tyres",desc:"Tyres for light commercial trucks and delivery vehicles.",sizes:["285/70R19.5","245/70R19.5","245/70R17.5","235/75R17.5","215/75R17.5","205/75R17.5","8.25R16","7.50R16"],brands:[]},
 {name:"Saloon car and SUV tyres",desc:"Tyres for saloon cars, SUVs and pick-ups.",sizes:["175/65R14","195/65R15","205/65R15","215/70R16","235/70R16","245/70R16","265/65R17","265/70R17","235/60R18","255/50R19"],brands:[]}];
export const CAROUSEL={
 trucks:[["315/80R22.5","Tipper & truck"],["13R22.5","Tipper & truck"],["12.00R20","Tipper truck"],["12R22.5","Truck & bus"],["295/80R22.5","Truck & bus"],["385/65R22.5","Trailer"]],
 com:[["245/70R19.5","Light truck"],["205/75R17.5","Light truck"],["265/70R17","SUV"],["265/65R17","SUV"],["235/70R16","SUV"],["215/70R16","Passenger"],["205/65R15","Saloon car"],["175/65R14","Saloon car"]]};
export const ABOUT_TEXT=[
 "Eazy Road Tyres (Pty) Ltd is a specialist tyre supply and fitment company serving commercial trucks and everyday vehicles across Ghana. We understand that unplanned downtime on the road does not just cost time; it costs production, revenue, and safety.",
 "Founded on a passion for quality and reliability, Eazy Road Tyres was built to fill a critical gap in the market: a dedicated partner that knows tyres inside out, stocks the right product for the right application, and gets your vehicle back on the road as quickly as possible.",
 "Our team of trained tyre technicians and product specialists work directly on site and at our fitment facilities, providing end-to-end tyre management solutions, from product selection and procurement to fitment, monitoring, and maintenance."];
export const ABOUT_STATS=[["4+","Premium global brands"],["24/7","Emergency support"],["0","Compromise on quality"],[String(SERVICES.length),"Core services"]];
export const VISION="To be the most trusted and preferred tyre specialist in Ghana — recognised for excellence, reliability, and the relentless commitment to keeping our clients' fleets operational.";
export const MISSION="To deliver premium-quality tyre solutions through expert advice, top global brands, and professional fitment services — ensuring maximum uptime, safety, and value for every client we serve.";
export const VALUES=[
 ["Integrity","We deal honestly with every client, supplier, and stakeholder — no shortcuts, no compromise."],
 ["Safety First","Our fitment practices and product standards meet the highest safety requirements to protect people and equipment."],
 ["Reliability","When you need tyres, you need them now. We pride ourselves on responsive, dependable service delivery."],
 ["Excellence","We continuously improve our knowledge, processes, and partnerships to deliver the best possible tyre solutions."],
 ["Customer Focus","Your fleet's performance is our performance. We listen, advise, and act in your best interest every time."],
 ["Innovation","We keep up with the latest tyre technology and industry trends to offer cutting-edge solutions for modern fleets."]];
