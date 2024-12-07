import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    price: "50,000,000",
    date: "15.12.24",
    topic: "Jio Tower Installation - Infrastructure Development in Rural Areas",
    image: funds_1,
    circleText: "Available Funding",
  },
  {
    id: 2,
    price: "25,000,000",
    date: "15.12.24",
    topic: "Upgrading Existing Jio Towers to 5G Technology",
    image: funds_2,
    circleText: "Apply Now",
  },
  {
    id: 3,
    price: "40,000,000",
    date: "15.12.24",
    topic: "Jio Tower Expansion Project - Enhancing Network Coverage in Remote Regions",
    image: funds_3,
    circleText: "Join the Initiative",
  },
  {
    id: 4,
    price: "30,000,000",
    date: "15.12.24",
    topic: "Funding for Jio Tower Installation in Tier 2 Cities",
    image: funds_4,
    circleText: "Explore Opportunities",
  },
  {
    id: 5,
    price: "70,000,000",
    date: "15.12.24",
    topic: "Supporting Jio’s 5G Infrastructure Rollout with Tower Installations",
    image: funds_5,
    circleText: "Invest Today",
  },
  {
    id: 6,
    price: "60,000,000",
    date: "15.12.24",
    topic: "Building Jio Towers in Urban Areas for High-Speed Connectivity",
    image: funds_6,
    circleText: "Limited Funds Available",
  },
  {
    id: 7,
    price: "35,000,000",
    date: "15.12.24",
    topic: "Innovative Funding for Jio Tower Installation and Maintenance",
    image: funds_7,
    circleText: "Get Started",
  },
  {
    id: 8,
    price: "45,000,000",
    date: "15.12.24",
    topic: "Jio Tower Deployment in High-Demand Locations Across India",
    image: funds_8,
    circleText: "Secure Your Spot",
  },
];

export default function FundCards() {
  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Explore Jio Tower Installation Funding Opportunities
      </h1>
      <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-8">
        {cards.map((card) => (
          <FundCard key={card.id} card={card} />
        ))}
      </article>
    </section>
  );
}
