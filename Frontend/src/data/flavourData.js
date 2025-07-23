const flavorData = [
  {
    name: "Almond",
    url: "/images/almond.webp",
    rotation: "md:rotate-[-8deg] rotate-0",
    elemUrl:"/images/black-elements.webp",
    bgUrl:"/images/birthday-cake-batter-bg.webp",
    color:"text-milk",
    width:"w-[100%]",
    height:"h-[95%]"
  },
  {
    name: "Cake batter",
    url: "/images/birthday-cake-batter.webp",
    rotation: "md:rotate-[8deg] rotate-0",
    elemUrl:"/images/blue-elements.webp",
    bgUrl:"/images/white-bg.svg",
    color:"text-dark-brown",
    width:"w-[100%]",
  },
  {
    name: "Dark Sea Salt",
    url: "/images/dark-chocolate-sea-salt.webp",
    rotation: "md:rotate-[-8deg] rotate-0",
    elemUrl:"/images/brown-elements.webp",
    bgUrl:"/images/brown-bg2.avif",
    color:"text-milk",
    width:"w-[100%]",
    height:"h-[95%]"

  },
  {
    name: "Dark Chocolate",
    url: "/images/dark-chocolate.webp",
    rotation: "md:rotate-[8deg] rotate-0",
    elemUrl:"/images/choco_element.png",
    bgUrl:"/images/birthday-cake-batter-bg.webp",
    color:"text-milk",
    width:"w-[100%]",
    height:"h-[95%]"
  },
  {
    name: "Milk Chocolate",
    url: "/images/milk-chocolate.webp",
    rotation: "md:rotate-[-8deg] rotate-0",
    elemUrl:"/images/crunch-elements.webp",
    bgUrl:"/images/white-bg.svg",
    color:"text-dark-brown",
    width:"w-[100%]",
  },
  {
    name: "Milk Crunch",
    url: "/images/milk-crunch.webp",
    rotation: "md:rotate-[8deg] rotate-0",
    elemUrl:"/images/orange-elements.webp",
    bgUrl:"/images/bg2.png",
    color:"text-milk",
    width:"w-[100%]",
  },
  {
    name: "Peanut Butter",
    url: "/images/peanut-butter-crunch.webp",
    rotation: "md:rotate-[8deg] rotate-0",
    elemUrl:"/images/red-elements.webp",
    bgUrl:"/images/blue-bg.svg",
    color:"text-milk",
    width:"w-[100%]",
  },
  {
    name: "Cookies Creme",
    url: "/images/Cookies_Creme.webp",
    rotation: "md:rotate-[8deg] rotate-0",
    elemUrl:"/images/white-elements.webp",
    bgUrl:"/images/brown-bg.svg",
    color:"text-dark-brown",
    width:"w-[100%]",
    
  },

];

const CravingCards = [
  {
    src: "/videos/video1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/birthday-cake-batter.webp",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/video2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/video3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/video4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/video5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/video6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/video7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];

const products = {
  chocolates: [
    {
      id: 1,
      title: "Birthday Cake Batter",
      image: "/images/product1.png",
      price: "$34.99"
    },
    {
      id: 2,
      title: "Milk Chocolate",
      image: "/images/product2.png",
      price: "$34.99"
    },
        {
      id: 3,
      title: "Peanut Butter",
      image: "/images/product3.png",
      price: "$34.99"
    },
        {
      id: 4,
      title: "Milk Crunch",
      image: "/images/product4.png",
      price: "$34.99"
    },
        {
      id: 5,
      title: "Peanut Butter Crunch",
      image: "/images/product5.png",
      price: "$34.99"
    },
        {
      id: 6,
      title: "Almond",
      image: "/images/product6.png",
      price: "$34.99"
    },
        {
      id: 7,
      title: "Dark Chocolate",
      image: "/images/product7.png",
      price: "$34.99"
    },
        {
      id: 8,
      title: "Dark Chocolate Sea Salt",
      image: "/images/product8.png",
      price: "$34.99"
    },
        {
      id: 9,
      title: "Cookies and Creme",
      image: "/images/product9.png",
      price: "$34.99"
    },
  ],
  cups: [
    {
      id: 10,
      title: "Peanut Butter Cups",
      image: "/images/cup1.png",
      price: "$2.49"
    },
    {
      id: 11,
      title: "Hazelnut Cups",
      image: "/images/cup2.png",
      price: "$3.12"
    },
  ],
  bundles: [
    {
      id: 12,
      title: "Sampler Pack",
      image: "/images/bundle1.png",
      price: "$24.99"
    },
    {
      id: 13,
      title: "Milk Chocolate Pack",
      image: "/images/bundle2.png",
      price: "$20.99"
    },
    {
      id: 14,
      title: "Peanut Butter Pack",
      image: "/images/bundle3.png",
      price: "$20.99"
    },
    {
      id: 15,
      title: "Milk Crunch Pack",
      image: "/images/bundle4.png",
      price: "$20.99"
    },
    {
      id: 16,
      title: "Value Pack",
      image: "/images/bundle5.png",
      price: "$24.99"
    },
    {
      id: 17,
      title: "Snack Size Variety Pack",
      image: "/images/bundle6.png",
      price: "$10.59"
    },
  ],
  limited: [
    {
      id: 18,
      title: "Birthday Cake Batter",
      image: "/images/limited1.png",
      price: "$34.99"
    },
    {
      id: 19,
      title: "HeadPhone Mrbeast x Jlab",
      image: "/images/limited2.png",
      price: "$29.88"
    },
    {
      id: 20,
      title: "Headphone Stand Beast Tower",
      image: "/images/limited3.png",
      price: "$24.92"
    },
    {
      id: 21,
      title: "MrBeast BriefCase Collector's Edition",
      image: "/images/limited4.png",
      price: "$49.97"
    },
    {
      id: 22,
      title: "Beast Game Box",
      image: "/images/limited5.png",
      price: "$14.99"
    },
  ]
};

export default products;


export { flavorData, CravingCards, products };