export interface Producto {
  id: string | number;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string; // Link de ML
  priceDirect?: number; // Precio fuera de ML (Local / WSP)
  priceML?: number; // Precio de referencia en Mercado Libre
  available?: boolean; // true = "Disponible", false = "Consultar"
  whatsappMessage?: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    name: "Turbo Biagio GT45",
    category: "TURBOS",
    description: "Turbo GT45 marca Biagio compatible con Mercedes Benz 1634, 1938 y 0500 RSD. Producto nuevo, alta performance.",
    image: "/Fotosdeproductos/turbo.png",
    link: "https://www.mercadolibre.com.ar/turbo-gt45-para-mercedez-benz-1634-1938-0500-rsd/up/MLAU2873900976",
    priceDirect: 760000,
    priceML: 960000,
    available: true
  },
  {
    id: 2,
    name: "Turbo Biagio T04B27",
    category: "TURBOS",
    description: "Turbo Biagio T04B27 compatible con camión Mercedes Benz 1114, motor OM 352. Producto nuevo, alta calidad.",
    image: "/Fotosdeproductos/turbo mb1114.png",
    link: "https://www.mercadolibre.com.ar/turbo-biagio-t04b27--camion-mb-1114--om-352/up/MLAU3179987628",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 3,
    name: "Filtro Secador de Aire",
    category: "FILTROS",
    description: "Filtro secador de aire Hengst. Compatible con Mercedes Benz, Iveco y VW. Calidad original.",
    image: "/Fotosdeproductos/filtro.png",
    link: "https://www.mercadolibre.com.ar/filtro-secador-de-aire-hengst-para-mercedes-benz-iveco-vw/up/MLAU3033345233",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 4,
    name: "Bomba Hidráulica Levanta Cabina",
    category: "BOMBAS",
    description: "Bomba hidráulica para levanta cabina. Compatible con Mercedes Benz Axor 2035, 2036 y 2040.",
    image: "/Fotosdeproductos/bomba hid 2034.png",
    link: "https://www.mercadolibre.com.ar/bomba-hidraulica-levanta-cabina-mbaxor-2035-2036-2040/up/MLAU3099964384",
    priceDirect: 139000,
    priceML: 173900,
    available: true
  },
  {
    id: 5,
    name: "Bomba de Combustible",
    category: "BOMBAS",
    description: "Bomba de combustible Truckteck para camión Mercedes Benz 1634. Producto nuevo y resistente.",
    image: "/Fotosdeproductos/bomba combustible.png",
    link: "https://www.mercadolibre.com.ar/bomba-combustible-truckteck-camion-mb1634/up/MLAU2865706789",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 6,
    name: "Cilindro Levanta Cabina Scania",
    category: "CILINDROS",
    description: "Cilindro hidráulico para levanta cabina. Compatible con camiones Scania R112 y R113.",
    image: "/Fotosdeproductos/cilindro112.png",
    link: "https://www.mercadolibre.com.ar/cilindro-levanta-cabina--camion-scania-r112113/up/MLAU3154585796",
    priceDirect: 193000,
    priceML: 269300,
    available: true
  },
  {
    id: 7,
    name: "Cilindro Levanta Cabina Iveco Euro",
    category: "CILINDROS",
    description: "Cilindro para levanta cabina. Compatible con camiones Iveco Euro, varios modelos.",
    image: "/Fotosdeproductos/cilin iveco - euro.jpg",
    link: "https://www.mercadolibre.com.ar/cilindro-levanta-cabina--camiones-iveco--euro--varios/up/MLAU3149155653",
    priceDirect: 213000,
    priceML: 296300,
    available: true
  },
  {
    id: 8,
    name: "Filtro de Aire Hengst",
    category: "FILTROS",
    description: "Filtro de aire con tapa Hengst. Para Mercedes Benz Atego y Axor con motor OM904/906.",
    image: "/Fotosdeproductos/filtrocontapa.png",
    link: "https://www.mercadolibre.com.ar/filtro-de-aire-con-tapa-hengst--ategoaxor-om904906/up/MLAU3023294369",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 9,
    name: "Bomba Hidráulica Iveco - Euro",
    category: "BOMBAS",
    description: "Bomba hidráulica para levantamiento de cabina. Compatible con Iveco / Eurotech, Eurotrakker.",
    image: "/Fotosdeproductos/bomba iveco euro.jpg",
    link: "https://www.mercadolibre.com.ar/bomba-hidraulica-levantamiento-cabina--iveco--euro/up/MLAU3169288878",
    priceDirect: 107000,
    priceML: 133900,
    available: true
  },
  {
    id: 10,
    name: "Bomba Hidráulica Scania",
    category: "BOMBAS",
    description: "Bomba hidráulica para levantamiento de cabina. Compatible con Scania 114 / 124... Producto nuevo.",
    image: "/Fotosdeproductos/bomba33.jpg",
    link: "https://www.mercadolibre.com.ar/bomba-hidraulica-levantamiento-cabina--scania-114124/up/MLAU3163752551",
    priceDirect: 120000,
    priceML: 163900,
    available: true
  },
  {
    id: 11,
    name: "Correa Continental 9PK2300",
    category: "CORREAS",
    description: "Correa Continental 9PK2300. Compatible con Mercedes Benz 1938 y 2638. Alta durabilidad.",
    image: "/Fotosdeproductos/correa2300.png",
    link: "https://www.mercadolibre.com.ar/correa-continental-9pk2300--mb-1938--2638/up/MLAU3034408312",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 12,
    name: "Cilindro Levanta Cabina Eurotech",
    category: "CILINDROS",
    description: "Cilindro para levanta cabina. Compatible con Iveco Eurotech 440 y Eurotrakker.",
    image: "/Fotosdeproductos/euroteck440.png",
    link: "https://www.mercadolibre.com.ar/cilindro-levanta-cabina-camion-eurotech-440--eurotrakker/up/MLAU3149016755",
    priceDirect: 190000,
    priceML: 243900,
    available: true
  },
  {
    id: 13,
    name: "Cilindro Levanta Cabina Stralis",
    category: "CILINDROS",
    description: "Cilindro hidráulico para levanta cabina. Compatible con Iveco Stralis, varios modelos.",
    image: "/Fotosdeproductos/cilin iveco-stralis.png",
    link: "https://www.mercadolibre.com.ar/cilindro-levanta-cabina--camiones-iveco--stralis-varios/up/MLAU3154696438",
    priceDirect: 193000,
    priceML: 260900,
    available: true
  },
  {
    id: 14,
    name: "Pulmón de Freno",
    category: "FRENOS",
    description: "Pulmón de freno Spring Brake 30/30 TKL. Para camiones, alta resistencia.",
    image: "/Fotosdeproductos/pulmon.png",
    link: "-",
    priceDirect: 55000,
    priceML: 79900,
    available: true
  },
  {
    id: 15,
    name: "Correa Continental 8PK2155",
    category: "CORREAS",
    description: "Correa Continental 8PK2155. Compatible con Scania R114 y T114. Calidad garantizada.",
    image: "/Fotosdeproductos/correa 2155.png",
    link: "https://www.mercadolibre.com.ar/correa-continental-8pk2155--scania-r-114--t-114/up/MLAU3034380802",
    priceDirect: 0,
    priceML: 0,
    available: false
  },
  {
    id: 16,
    name: "Optica Faro Der/Izq",
    category: "ILUMINACION",
    description: "Óptica faro derecha o izquierda VIC. Compatible con Mercedes Benz 1215, 1620 y 1633.",
    image: "/Fotosdeproductos/optica mb.png",
    link: "https://www.mercadolibre.com.ar/optica-faro-derechaizq--mercedes-benz-121516201633--vic/up/MLAU3179527116",
    priceDirect: 54000,
    priceML: 76300,
    available: true
  },
  {
    id: 17,
    name: "Bomba Dirección Hidráulica",
    category: "BOMBAS",
    description: "Bomba de dirección hidráulica para camión Mercedes Benz Atego 1634. Resistente.",
    image: "/Fotosdeproductos/bomba hid dir 1634.png",
    link: "https://www.mercadolibre.com.ar/bomba-direccion-hidraulica-camion-mercedes-benz--atego-1634/up/MLAU3173922879",
    priceDirect: 0,
    priceML: 0,
    available: false
  }
];