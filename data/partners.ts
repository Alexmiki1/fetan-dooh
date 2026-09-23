export interface Partner {
  id: string;
  name: string;
  logo: string;
  /** Optional scale multiplier for visually-small logos (default 1) */
  scale?: number;
}

export const partners: Partner[] = [
  {
    id: "dashen-bank",
    name: "Dashen Bank",
    logo: "/images/partners/dashen-bank.png",
  },
  {
    id: "yango",
    name: "Yango",
    logo: "/images/partners/yango.png",
  },
  {
    id: "bamacon",
    name: "Bamacon Construction",
    logo: "/images/partners/bamacon.png",
  },
  {
    id: "bdo",
    name: "BDO",
    logo: "/images/partners/bdo.png",
  },
  {
    id: "alpha-post-tension",
    name: "Alpha Post Tension",
    logo: "/images/partners/alpha-post-tension.png",
  },
  {
    id: "horra",
    name: "Horra Corporate Group",
    logo: "/images/partners/horra.png",
  },
  {
    id: "dahabshiil",
    name: "Dahabshiil",
    logo: "/images/partners/dahabshiil.png",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logo: "/images/partners/coca-cola.png",
  },
  {
    id: "zemen-bank",
    name: "Zemen Bank",
    logo: "/images/partners/zemen-bank.png",
  },
  {
    id: "scope-lubricants",
    name: "Scope Lubricants",
    logo: "/images/partners/scope-lubricants.png",
    scale: 1.6,
  },
  {
    id: "awash-bank",
    name: "Awash Bank",
    logo: "/images/partners/awash-bank.png",
    scale: 1.6,
  },
  {
    id: "dema-hope",
    name: "Dema Hope Real Estate",
    logo: "/images/partners/dema-hope.png",
    scale: 1.6,
  },
  {
    id: "l1",
    name: "Partner L1",
    logo: "/images/partners/l1.png",
  },
  {
    id: "l2",
    name: "Partner L2",
    logo: "/images/partners/l2.png",
  },
  {
    id: "l3",
    name: "Partner L3",
    logo: "/images/partners/l3.png",
  },
  {
    id: "l4",
    name: "Partner L4",
    logo: "/images/partners/l4.png",
  },
  {
    id: "l5",
    name: "Partner L5",
    logo: "/images/partners/l5.png",
  },
];
