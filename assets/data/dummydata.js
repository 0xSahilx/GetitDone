import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "20+ successful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
];
export const expertise = [
  {
    id: 1,
    title: "Web Design & Development",
    cover: "/images/wd3.jpeg",
    width: "100%",
    height: "100%",
    desc: [
      { text: "Web design" },
      { text: "Web development" },
      { text: "Custom icons & illustrations" },
      { text: "Hosting" },
      { text: "Website audit" },
    ],
  },
  {
    id: 2,
    title: "Digital Marketing",
    cover: "/images/dm3.jpeg",
    desc: [
      { text: "Social media marketing" },
      { text: "Marketing campaigns" },
      { text: "Markting management" },
      { text: "SEO" },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    cover: "/images/ui2.jpeg",
    desc: [
      { text: "E-Commerce website design" },
      { text: "WooCommerce" },
      { text: "Content management" },
      { text: "Merch Designing" },
    ],
  },
  {
    id: 4,
    title: "Managing your Buisness",
    cover: "/images/e4.jpg",
    desc: [
      { text: "Visual identity" },
      { text: "Branding for social media" },
      { text: "Custom illustrations" },
      { text: "Online presence on platforms like Linkedin, Instagram, etc." },
    ],
  },
];
export const testimonial = [
  {
    id: 1,
    name: "Adhvet Sharma",
    cover: "qk1.svg",
    post: "Quikart - CEO",
    desc: "Working with Getitdone has been a game-changer for Quikart. Being the Founder and CEO, I've witnessed firsthand their exceptional commitment to helping us establish a robust online presence. From crafting a visually stunning website to implementing effective social media strategies, Getitdone showcased a level of credibility and professionalism that stood out.",
  },
  {
    id: 2,
    name: "Ajay",
    cover: "/images/ss.png",
    post: "StageSplash - Founder & CEO",
    desc: "I appreciate the dedication and flexibility Getidone brought to the table. Getitdone not only delivered a dynamic and visually compelling website for StageSplash but also proved to be exceptionally adaptable throughout the process. Their team's ability to understand our unique needs and translate them into an engaging online platform was impressive",
  },
  {
    id: 3,
    name: "Alexander Black",
    cover: "/images/e3.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 4,
    name: "Diana Green",
    cover: "/images/e4.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
];


export const showcase = [
  {
    id: 1,
    title: "E-cell IIT Patna",
    cover: "/images/ec.png",
    width:"50%",
    url:"https://ecell-beta.vercel.app/",
    
   
   
    
    catgeory: "DIGITAL MARKETING",
  },
  
  {
    id: 2,
    title: "Anwesha IITP",
    catgeory: "WEBSITES",
    url:"https://anweshaaa.vercel.app/",
    
    cover: "/images/an.png",
  },
  {
    id: 3,
    title: "Njack IITP",
    cover: "/images/nk.png",
    url:"https://njackwebsite.vercel.app/",
   
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Portfolio",
    cover: "/images/pf.png",
    catgeory: "Website",
    url:"https://shanzal-sidhiqui.vercel.app/",
  },
  {
    id: 5,
    title: "Merch Designing",
    cover: "/images/design1.png",
    catgeory: "Ui/UX",
    url:"https://www.instagram.com/p/CyytHbWy6Uu/?igshid=MTc4MmM1YmI2Ng==",
  },
  {
    id: 6,
    title: "VR Experience",
    cover: "/images/photu2.png",
    catgeory: "Design",
    url:"https://dmahez.gmetri.com/xr_experience",
  },
];
export const brand = [
  {
    id: 1,
    cover: "/images/l1.svg",
  },
  {
    id: 2,
    cover: "/images/l2.svg",
  },
  {
    id: 3,
    cover: "/images/l3.svg",
  },
  {
    id: 4,
    cover: "/images/l4.svg",
  },
  {
    id: 5,
    cover: "/images/l5.svg",
  },
  {
    id: 6,
    cover: "/images/l6.svg",
  },
];
export const blogdata = [
  {
    id: 1,
    title: "Becoming a SEO analyst.",
    cover: "",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
  },
  {
    id: 2,
    title: "Indian consumers are spending 52% of their time on open internet.",
    cover: "",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
  },
  {
    id: 3,
    title:
      "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
  },
];
export const teamdata = [
  {
    id: 1,
    title: "Kanahia",
    cover: "/images/ka.jpeg",
    post: "Web and App Developer",
  },
  {
    id: 2,
    title: "Pradhuman",
    cover: "/images/pr.jpg",
    post: "Video Editor",
  },
  {
    id: 3,
    title: "Kunjal Singh",
    cover: "/images/k.jpeg",
    post: "UI/UX expert",
  },
  {
    id: 4,
    title: "Krishna Rathore",
    cover: "/images/krs.jpeg",
    post: "Design Head",
  },
  {
    id: 5,
    title: "Shuchi",
    cover: "/images/sh.jpg",
    post: "Web Designer",
  },
  {
    id: 6,
    title: "Sahil Lodu",
    cover: "/images/t6.jpg",
    post: "Web Developer",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "/images/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "/images/t8.jpg",
    post: "",
  },
];
