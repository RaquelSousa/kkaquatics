export interface ServicesInterface {
  id: number;
  title: string;
  description: string;
  background?: any;
  content: string;
}

export const services: Array<ServicesInterface> = [
  {
    id: 0,
    title: "Bespoke Aquariums",
    description:
      "Aquariums built from scratch to tailor your needs for size and location",
    background: "bg-[url('/krevan-aquarium.jpg')]",
    content:
      "We source the materials, and build the aquariums from scratch. This can include cabinets, aquarium equipment, aquascaping and lifestock.",
  },
  {
    id: 1,
    title: "Bespoke Ponds",
    description: "Ponds built from scratch to tailor your needs",
    background: "bg-[url('/pond.jpg')]",
    content:
      "We source the materials, and build the ponds from scratch. This can include digging, pond equipment and lifestock.",
  },
  {
    id: 2,
    title: "Aquarium and Pond Maintenance",
    description:
      "Aquarium and Pond Maintenance, including cleaning and triming",
    background: "bg-[url('/krevan-aquarium.jpg')]",
    content:
      "We go on-site, and do water changes, water test, trimming, and whatever else the aquariums might need. This can only be done locally to us.",
  },
  {
    id: 3,
    title: "Aquascaping",
    description: "Aquascaping of new or existing aquariums",
    background: "bg-[url('/krevan-aquarium.jpg')]",
    content:
      "If you have an existing aquarium, or don't need it built from scratch but need help setting it up, we can source and install all the aquaspacing needed, as well as the lifestock.",
  },
];
