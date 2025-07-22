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
      price: "$4.99"
    },
    {
      id: 2,
      title: "Milk Chocolate",
      image: "/images/product2.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Peanut Butter",
      image: "/images/product3.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Milk Crunch",
      image: "/images/product4.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Peanut Butter Crunch",
      image: "/images/product5.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Almond",
      image: "/images/product6.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Dark Chocolate",
      image: "/images/product7.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Dark Chocolate Sea Salt",
      image: "/images/product8.png",
      price: "$5.49"
    },
        {
      id: 2,
      title: "Cookies and Creme",
      image: "/images/product9.png",
      price: "$5.49"
    },
    // ...total 8 chocolates
  ],
  cups: [
    {
      id: 9,
      title: "Peanut Butter Cups",
      image: "https://example.com/cup1.jpg",
      price: "$3.99"
    },
    {
      id: 10,
      title: "Hazelnut Cups",
      image: "https://example.com/cup2.jpg",
      price: "$4.29"
    },
  ],
  bundles: [
    {
      id: 11,
      title: "Family Bundle",
      image: "https://example.com/bundle1.jpg",
      price: "$19.99"
    },
    {
      id: 12,
      title: "Mega Feast Pack",
      image: "https://example.com/bundle2.jpg",
      price: "$29.99"
    },
  ],
  limited: [
    {
      id: 13,
      title: "Limited Edition Gold Bar",
      image: "https://example.com/limited1.jpg",
      price: "$9.99"
    },
    {
      id: 14,
      title: "Holiday Special Dark Mint",
      image: "https://example.com/limited2.jpg",
      price: "$7.49"
    },
  ]
};

export default products;


export { flavorData, CravingCards, products };