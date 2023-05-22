import ashComputerImg from "../assets/img/proyects/ashComputer.png";
import melonShopImg from "../assets/img/proyects/shopMelon.png";
import ashIndumentariaImg from "../assets/img/proyects/ashIndumentaria.png";

export const myProjects = [
  {
    id: 1,
    name: "E-commerce React JS",
    description:
      "E-commerce de productos tecnologicos, consumiendo API de Mercado Libre.",
    stacks: ["React", "Bootstrap", "React-router-dom"],
    img: melonShopImg,
    deploy: "https://shop-melon-react-js.vercel.app/",
    github: "https://github.com/Agustin-Gonzalorena/shop_melon_react_js",
  },
  {
    id: 2,
    name: "E-commerce server-side rendering",
    description:
      "E-commerce de ropa desarrollado renderizado desde el servidor con Php y utilizando la base de datos MySQL. ",
    stacks: ["Php", "MySQL"],
    img: ashIndumentariaImg,
    deploy: "none",
    github: "https://github.com/Agustin-Gonzalorena/ashIndumentariaPhp",
  },
  {
    id: 3,
    name: "E-commerce Angular",
    description:
      "E-commerce de computadoras consumiendo api de mockAPI para obtener los productos.",
    stacks: ["Angular", "Angular Material"],
    img: ashComputerImg,
    deploy: "https://agustin-gonzalorena.github.io/ashComputer/home",
    github: "https://github.com/Agustin-Gonzalorena/ashComputer",
  },
];
