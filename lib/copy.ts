import { FaUmbrellaBeach, FaUserFriends, FaTree, FaCity } from "react-icons/fa";

export const COPY = {
  meta: {
    title: "Vacation Village",
    description: "A mobile home community in Elk Rapids, Michigan.",
    icon: "/favicon.svg",
  },
  hero: {
    title: "A mobile home community",
    subtitle:
      "Beneath the towering maples on the water's edge, you will love calling Vacation Village your home.",
  },
  price: {
    low: 371,
    high: 417,
  },
  about: {
    heading: "about",
    title: "Some facts to remember",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Sit arcu nulla ipsum penatibus accumsan lorem tempus amet egestas.",
    cards: [
      {
        title: "Senior Community",
        content: "A vibrant and peaceful community of 55+ residents.",
        icon: FaUserFriends,
      },
      {
        title: "300ft of Lakeshore",
        content: "Sitting along 300ft of private lake frontage on Bass Lake.",
        icon: FaUmbrellaBeach,
      },
      {
        title: "65 Sites",
        content:
          "Yearly leases with city-operates utilities in out wooded community.",
        icon: FaTree,
      },
      {
        title: "Downtown Elk Rapids",
        content: "Just minutes away from the heart of Elk Rapids.",
        icon: FaCity,
      },
    ],
  },
} as const;
