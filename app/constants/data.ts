export const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
  },
  {
    name: "Next.js",
    icon: "/assets/tech/nextjs.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "Mongodb",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Prisma",
    icon: "/assets/tech/prisma.png",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "Framer Motion",
    icon: "/assets/tech/framer.png",
  },
  {
    name: "Vercel",
    icon: "/assets/tech/vercel.png",
  },
];

export const TechSkills = {
  frontend: [
    { name: "Next.js", percentage: 80 },
    { name: "React", percentage: 60 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 70 },
    { name: "TypeScript", percentage: 75 },
    { name: "jQuery", percentage: 50 },
    { name: "Redux", percentage: 50 },
    { name: "Zustand", percentage: 50 },
    { name: "MUI", percentage: 50 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "Bootstrap", percentage: 50 },
    { name: "Module CSS", percentage: 70 },
  ],
  backend: [
    { name: ".NET", percentage: 50 },
    { name: "C#", percentage: 40 },
    { name: "Strapi", percentage: 50 },
    { name: "Node.js", percentage: 75 },
  ],
  cssFrameworks: [
    { name: "Tailwind CSS", percentage: 85 },
    { name: "shadcn/ui", percentage: 95 },
  ],
  database: [
    { name: "PostgreSQL" },
    { name: "Supabase", percentage: 65 },
    { name: "MongoDB", percentage: 60 },
    { name: "Prisma", percentage: 80 },
    { name: "Drizzle", percentage: 50 },
  ],
  tools: [
    { name: "Docker", percentage: 50 },
    { name: "Figma", percentage: 40 },
    { name: "VS Code", percentage: 100 },
    { name: "Postman", percentage: 40 },
  ],
  os: [
    { name: "Ubuntu", percentage: 50 },
    { name: "Windows", percentage: 50 },
  ],
};


export const socialIcons = [
  {
    id: 1,
    name: "Instragram",
    icon: "/assets/social/instagram.png",
    url: "https://www.instagram.com/bunseu_eng/",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "/assets/social/twitter-icon.png",
    url: "https://x.com/bunseu95355",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: "/assets/social/linkedin-icon.png",
    url: "https://www.linkedin.com/in/eng-bunseu-6591a8333/",
  },
];

export const recentProjects = [
  {
    id: 0,
    title: "Bunseueng.Dev",
    description:
      "I'm a fourth-year Computer Science student at the Royal University of Phnom Penh (RUPP) with a strong passion for frontend development. I enjoy building clean, responsive user interfaces and bringing ideas to life through modern web technologies.I'm always eager to learn new tools and frameworks, and I strive to create user-friendly experiences that combine design and functionality.",
    img: "/assets/project/bunseuengdev.jpg",
    iconLists: [
      "/assets/project/next.svg",
      "/assets/project/ts.svg",
      "/assets/project/shadcn.png",
      "/assets/project/nodemailer.png",
      "/assets/project/embla.jfif",
    ],
    link: "https://bunseuengdev.vercel.app",
  },
  {
    id: 1,
    title: "Australian Centre for Education - Voting Platform",
    description: "Assisted in developing a web-based platform that allows users to vote for children’s creative work (e.g., drawings).",
    img: "/assets/project/ace-voting.jpg",
    iconLists: [
      "/assets/project/next.svg",
      "/assets/project/ts.svg",
      "/assets/project/nodejs.svg",
      "/assets/project/mongodb.svg",
      "/assets/project/shadcn.png",
    ],
    link: "https://ace-voting.vercel.app",
  },
  {
    id: 2,
    title: "MijuDramaInfo",
    description:
      "Explore the vibrant world of Asian dramas and movies at MijuDramaInfo (MDI). Discover in-depth insights, trending titles, and the latest news about your favorite shows and actors.",
    img: "/assets/project/opengraph-image.png",
    iconLists: [
      "/assets/project/next.svg",
      "/assets/project/ts.svg",
      "/assets/project/nodejs.svg",
      "/assets/project/mongodb.svg",
      "/assets/project/nextauth.svg",
    ],
    link: "https://mijudramainfo.vercel.app/",
  },
  {
    id: 3,
    title: "Lusishoe",
    description:
      "LUSISHOE is your go-to destination for stylish and high-quality footwear. Whether you're looking for casual sneakers, formal shoes, or trendy boots, LUSISHOE offers a curated collection of shoes to suit every occasion and style. Explore our diverse range and step up your shoe game with LUSISHOE.",
    img: "/assets/project/lusiecommerce.PNG",
    iconLists: [
      "/assets/project/next.svg",
      "/assets/project/ts.svg",
      "/assets/project/nodejs.svg",
      "/assets/project/mongodb.svg",
      "/assets/project/nextauth.svg",
    ],
    link: "https://lusiecommerce.netlify.app/",
  },
   {
    id: 4,
    title: "MijuBlog",
    description:
      "MijuBlog is a feature-rich blogging platform built using Nuxt.js and Supabase. It allows authenticated users to write and publish blog posts using a Quill-based rich text editor. The blog supports full SEO optimization with Nuxt SEO and includes email notifications via Nuxt Email and Nodemailer. Posts can be scheduled using Croner, and all content is stored securely in Supabase. Smooth scrolling, image galleries, and dynamic routing enhance the reading experience. This platform is ideal for developers or content creators who want to maintain a modern, self-hosted blog with performance and scalability.",
    img: "/assets/project/homepage.jpg",
    iconLists: [
      "/assets/project/nuxt.svg",
      "/assets/project/tail.svg",
      "/assets/project/supabase.png",
      "/assets/project/ts.svg",
      "/assets/project/nodemailer.png",
    ],
    link: "https://mijublog.netlify.app/",
  },
  {
    id: 4,
    title: "SangZhiStore",
    description:
      "SangzhiStore is your one-stop shop for all things gaming. Discover the latest games, consoles, and accessories to enhance your gaming experience. Whether you're a casual player or a hardcore gamer, we have everything you need to level up your play.",
    img: "/assets/project/sangzhistore.PNG",
    iconLists: [
      "/assets/project/react.svg",
      "/assets/project/formik.png",
      "/assets/project/react-hook-form.png",
      "/assets/project/swiper.svg",
      "/assets/project/animate.ico",
    ],
    link: "https://bunseujjy.github.io/SangZhiStore/",
  },
  {
    id: 5,
    title: "DramaKH",
    description:
      "Discover the best of Asian entertainment with our streaming platform, offering a curated collection of popular and trending Asian dramas. From heartwarming romances to thrilling mysteries, explore a world of captivating stories, all in one place.",
    img: "/assets/project/dramakh.PNG",
    iconLists: [
      "/assets/project/html.svg",
      "/assets/project/css.svg",
      "/assets/project/javascript.svg",
    ],
    link: "https://bunseujjy.github.io/DramaKh/",
  },
];

export const workExperience = [
  {
    id: 1,
    img: "/assets/experience/intern.svg",
    title: "Front-End Intern",
    desc: `Coming Soon: Work Experience, I’m currently looking for an Intern or Junior Front-end Web Developer Job.`,
  },
  {
    id: 2,
    img: "/assets/experience/graduation.svg",
    title: "Bachelor of Science in Computer Science | RUPP",
    desc: `
      - Expected Graduation: 2025 
      <ul>
        <li>- Relevant Coursework: Web Development, Algorithms, Databases, Software Engineering.</li>
        <li>- Built a fully functional eCommerce site as a class project using React and Node.js.</li>
      </ul>`,
  },
  {
    id: 3,
    img: "/assets/experience/project.svg",
    title: "Personal Projects",
    desc: `
      <ul>
        <li>- Assisted in developing a web-based platform that allows users to vote for children’s creative work (e.g., drawings) for Australian Centre for Education (ACE).</li>
        <li>- Asian Drama Streaming Site: Built a full-stack streaming platform for Asian dramas using Next.js, Prisma, and Vercel, with user authentication and commenting features.</li>
        <li>- eCommerce Site: Developed a fully functional eCommerce website using Next.js and Node.js, with PayPal integration for payments.</li>
      </ul>`,
  },
  {
    id: 4,
    img: "/assets/experience/skill.svg",
    title: "Skills",
    desc: `
      <ul>
        <li>- Front-End: React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS.</li>
        <li>- Back-End: Node.js, Prisma, MongoDB, Supabase.</li>
        <li>- Tools: Git, GitHub, Vercel, PayPal API.</li>
      </ul>`,
  },
];
