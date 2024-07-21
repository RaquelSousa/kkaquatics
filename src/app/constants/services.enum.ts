export interface ServicesInterface {
  id: number;
  title: string;
  description: string;
  background?: any;
  content: string;
  link?: string;
}

export const services: Array<ServicesInterface> = [
  {
    id: 0,
    title: "Bespoke Aquariums",
    description:
      "Aquariums built from scratch to tailor your needs for size and location",
    background: "/krevan-aquarium.jpg",
    content:
      "We source the materials, and build the aquariums from scratch. This can include cabinets, aquarium equipment, aquascaping and lifestock.",
    link: "https://www.youtube.com/watch?v=TTkffjNRkXk",
  },
  {
    id: 1,
    title: "Bespoke Ponds",
    description: "Ponds built from scratch to tailor your needs",
    background: "/pond.jpg",
    content:
      "We source the materials, and build the ponds from scratch. This can include digging, pond equipment and lifestock.",
    link: "https://www.youtube.com/watch?v=v8P6y0d782Q",
  },
  {
    id: 2,
    title: "Aquarium and Pond Maintenance",
    description:
      "Aquarium and Pond Maintenance, including cleaning and triming",
    background: "/maintenance.jpg",
    content:
      "We go on-site, and do water changes, water test, trimming, and whatever else the aquariums might need. This can only be done locally to us.",
    link: "https://www.youtube.com/watch?v=cfGmspxZKSA",
  },
  {
    id: 3,
    title: "Aquascaping",
    description: "Aquascaping of new or existing aquariums",
    background: "/aquascaping.png",
    content:
      "If you have an existing aquarium, or don't need it built from scratch but need help setting it up, we can source and install all the aquaspacing needed, as well as the lifestock.",
    link: "https://www.youtube.com/watch?v=LmWrmYpFC1g",
  },
];
