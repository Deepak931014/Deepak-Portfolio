import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Royalties Buffet",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Vite", "Vercel"],
    image: {
      LIGHT: "/images/projects/buffetlight.png",
      DARK: "/images/projects/buffet-dark.png",
    },
  },
  {
    index: 1,
    title: "MoviesGo",
    href: "/projects",
    tags: [
      "Html",
      "Css",
      "Javascript",
      "Imdb Api"
    ],
    image: {
      LIGHT: "/images/projects/movie.png",
      DARK: "/images/projects/movie.png",
    },
  },
  {
    index: 2,
    title: "MySell",
    href: "/projects",
    tags: ["Reactjs", "Nodejs", "Expressjs", "MongoDB"],
    image: {
      LIGHT: "/images/projects/mysell.png",
      DARK: "/images/projects/mysell.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Royalties Buffet",
    favicon: "/images/projects/logos/logo1.png",
    imageUrl: [
      "/images/projects/buffetlight.png",
      "/images/projects/buffet-dark.png",
    ],
    description:
      "A MERN Stack e-commerce website for order food online with dashboard as admin pannel.",
    sourceCodeHref: "https://github.com/Amreshup/Royalties-Buffet-Client",
    liveWebsiteHref: "https://royalties-buffet-client.vercel.app/",
  },
  {
    name: "Chat app",
    favicon: "/images/projects/logos/chat.ico",
    imageUrl: [
      "/images/projects/ChatApp.png",
    ],
    description:
      "Random people chatting app build in Mongodb as Database and Nodejs as server and React.js as Frontend.",
    sourceCodeHref: "https://github.com/Deepak931014/Mern-ChatApp",
    liveWebsiteHref: "https://meet-people-chat.netlify.app/",
  },
  {
    name: "BlogApp",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Blogapp.png",
    ],
    description:
      "A blog website where you can post your daily blogs..build in Mongodb as Database and Nodejs as server and React as frontend.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://blogapp-mern-deepak.netlify.app/",
  },
  {
    name: "MoviesGo",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/movie.png",
    ],
    description:
      "A movie rating website where you can see rating of latest movies with their trailer also connected Api with imdb",
    sourceCodeHref: "https://github.com/Deepak931014/MoviesGo",
    liveWebsiteHref: "https://deepak931014.github.io/MoviesGo/",
  },
  {
    name: "MySell",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/mysell.png",
    ],
    description:
      " e-commerce website for buying and selling second hand products.build in Mongodb as Database and Nodejs ",
    sourceCodeHref: "https://github.com/Deepak931014/MySell-Backend",
    liveWebsiteHref: "https://mysell-shopping-app.netlify.app/",
  },
  {
    name: " Internship company website",
    favicon: "/images/projects/logos/internship.png",
    imageUrl: [
      "/images/projects/internship.png",
    ],
    description:
      "A internship task for making a website for their company",
    sourceCodeHref: "",
  },
];
