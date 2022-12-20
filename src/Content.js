// import images
// import Hero_person from "./assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "3D Animator",
    firstName: "Sadhan ",
    LastName: "Kirtonia",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in 3D Animator",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Animation",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Animation",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui Animation",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Animation Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hero_person,
    project_content: [
      {
        title: "Gym Animation",
        image: project1,
      },
      {
        title: "Social Animation",
        image: project2,
      },
      {
        title: "Creative Animation",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hero_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "SadhanKirtonia@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "01827578666",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Animator",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
