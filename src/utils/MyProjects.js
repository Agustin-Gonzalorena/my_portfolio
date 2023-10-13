import ashComputerImg from "../assets/img/proyects/ashComputer.png";
import melonShopImg from "../assets/img/proyects/shopMelon.png";
import ashIndumentariaImg from "../assets/img/proyects/ashIndumentaria.png";
import marioGame from "../assets/img/proyects/marioGame.png";

export const myProjects = [
  {
    id: 1,
    name: "Racing game React JS",
    description:
      "Racing game with mario bros characters, practicing simple animations. Only in mobile version",
    stacks: ["React"],
    img: marioGame,
    deploy: "https://mario-kart-six.vercel.app/",
    github: "https://github.com/Agustin-Gonzalorena/MarioKart",
  },
  {
    id: 2,
    name: "E-commerce React JS",
    description:
      "E-commerce of technological products, consuming Mercado Libre API.",
    stacks: ["React", "Bootstrap", "React-router-dom"],
    img: melonShopImg,
    deploy: "https://shop-melon-react-js.vercel.app/",
    github: "https://github.com/Agustin-Gonzalorena/shop_melon_react_js",
  },
  {
    id: 3,
    name: "E-commerce server-side rendering",
    description:
      "Clothing e-commerce developed rendered from the server with Php and using the MySQL database. ",
    stacks: ["Php", "MySQL"],
    img: ashIndumentariaImg,
    deploy: "none",
    github: "https://github.com/Agustin-Gonzalorena/ashIndumentariaPhp",
  },
  {
    id: 4,
    name: "E-commerce Angular",
    description: "Computer shop consuming mockAPI api to get the products.",
    stacks: ["Angular", "Angular Material"],
    img: ashComputerImg,
    deploy: "https://agustin-gonzalorena.github.io/ashComputer/home",
    github: "https://github.com/Agustin-Gonzalorena/ashComputer",
  },
];
