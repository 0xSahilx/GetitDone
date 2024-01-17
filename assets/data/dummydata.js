import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Link from "next/link";
import Banner from "./../../components/Banner";

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
    width: "50%",
    url: "https://ecell-beta.vercel.app/",

    catgeory: "DIGITAL MARKETING",
  },

  {
    id: 2,
    title: "Anwesha IITP",
    catgeory: "WEBSITES",
    url: "https://anweshaaa.vercel.app/",

    cover: "/images/an.png",
  },
  {
    id: 3,
    title: "Njack IITP",
    cover: "/images/nk.png",
    url: "https://njackwebsite.vercel.app/",

    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Portfolio",
    cover: "/images/pf.png",
    catgeory: "Website",
    url: "https://shanzal-sidhiqui.vercel.app/",
  },
  {
    id: 5,
    title: "Merch Designing",
    cover: "/images/design1.png",
    catgeory: "Ui/UX",
    url: "https://www.instagram.com/p/CyytHbWy6Uu/?igshid=MTc4MmM1YmI2Ng==",
  },
  {
    id: 6,
    title: "VR Experience",
    cover: "/images/photu2.png",
    catgeory: "Design",
    url: "https://dmahez.gmetri.com/xr_experience",
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
    cover: "/images/seo.jpeg",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
    content: `
    <div>
    <p 
    Contrary to what many believe, of the 307 hours that an average
    consumer spends online per month, less than half of that is
    spent on social media, User Generated Content (UGC) platforms
    and live game streaming. Media habits in India have changed. In
    the latest report by The Trade Desk, consumers in India are 
    spending 52 per cent of their time on the open internet, beyond
    the traditional search, social media and UGC platforms that
    marketers are so familiar with. Meet the Open Internet Even
    though social media and UGC platforms have gained large numbers
    of users over the past decade, the open internet has flourished
    equally with the advent of new media channels, such as
    over-the-top (OTT) and CTV (connected TV) video streaming and
    music streaming.
  </p>

  <p>
    The open internet maximises user engagements.
    <p>Consumers are</p>
    <li>
      19 per cent more likely to find ads on news/websites less
      intrusive
    </li>
    <li>
      compared to social media Consumers are 22 per cent more likely
      to recall ads on OTT/CTV
    </li>
    <li>
      compared to YouTube Premium content on the open internet
      offers greater brand impact Consumers are 33 per cent more
      likely to view ads on OTT/CTV as more premium
    </li>
    <li>
      compared to YouTube Consumers are 17 per cent more likely to
      purchase products advertisers on news/websites, compared to
      social media
    </li>
    <p>
      <a href="https://blog.hubspot.com/marketing/become-seo-expert">
        Read More..
      </a>
    </p>
  </p> 
  </div>`,
  },
  {
    id: 2,
    title: "Indian consumers are spending 52% of their time on open internet.",
    cover: "/images/52percent.cms",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
    content: `
    <div>
      <p>
        According to recent trends, Indian consumers are increasingly dedicating their time to the open internet. This shift in behavior is notable, considering that the open internet includes a diverse range of online activities, such as news and general websites, over-the-top (OTT) and connected TV (CTV), music streaming, and online gaming.
      </p>

      <p>
        In a digital landscape where social media and user-generated content (UGC) platforms have been dominant, this report highlights a significant change. The open internet now reaches almost 600 million consumers in India, encompassing nearly every internet user in the country.
      </p>

      <p>
        As consumers explore various online channels, marketers need to adapt their strategies to effectively engage with audiences on the open internet. Understanding these shifting patterns is crucial for staying relevant and maximizing brand impact in the evolving digital landscape.
      </p>

      <p>
        <a href="https://government.economictimes.indiatimes.com/news/digital-india/indian-consumers-are-spending-52-of-their-time-on-open-internet-report/101378454#:~:text=2%20min%20read-,Indian%20consumers%20are%20spending%2052%25%20of%20their%20time%20on%20open,every%20internet%20user%20in%20India.">Read More..</a>
      </p>
    </div>`,
  },
  // {
  //   id: 3,
  //   title:
  //     "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
  //   cover: "",
  //   catgeory: "TIPS & TRICKS",
  //   date: "OCTOBER 9, 2023",
  // },
  // {
  //   id: 4,
  //   title: "What eleifend posuere tincidunt",
  //   cover: "",
  //   catgeory: "EVENTS",
  //   date: "OCTOBER 8, 2023",
  // },
];
export const teamdata = [
  {
    id: 1,
    title: "Kanahia",
    cover: "/images/ka.jpeg",
    post: "Web and App Developer",
    url: "https://www.linkedin.com/in/kanahia-kaushal-9850bb253/",
  },
  {
    id: 2,
    title: "Pradhuman",
    cover: "/images/pr.jpg",
    post: "Video Editor",
    url: "https://www.linkedin.com/in/pradhuman-nayak-245148202/",
  },
  {
    id: 3,
    title: "Kunjal Singh",
    cover: "/images/k.jpeg",
    post: "UI/UX expert",
    url: "",
  },
  {
    id: 4,
    title: "Krishna Rathore",
    cover: "/images/krs.jpeg",
    post: "Design Head",
    url: "https://www.linkedin.com/in/kr005/",
  },
  {
    id: 5,
    title: "Shuchi",
    cover: "/images/sh.jpg",
    post: "Web Designer",
    url: "https://www.linkedin.com/in/shuchi-saxena-9539b8284/",
  },
  {
    id: 6,
    title: "Sahil",
    cover: "/images/t6.jpg",
    post: "Web Developer",
    url: "",
  },
  {
    id: 7,
    title: "Shanzal",
    cover: "/images/t7.jpg",
    post: "PROJECT MANAGER",
    url: "",
  },
  {
    id: 8,
    title: "shambhvi",
    cover: "/images/t7.jpg",
    post: "PROJECT MANAGER",
    url: "",
  },
  {
    id: 9,
    title: "Join our team!",
    cover: "/images/t8.jpg",
    post: "Now",
    url: "https://forms.gle/Skjso3amBqs3Djfu5",
  },
];
