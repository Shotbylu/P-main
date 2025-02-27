import {
  mobile,
  backend,
  creator,
  web,
  cinema,
  moteur,
  opencv1,
  medal,
  robot,

  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  linux,
  spring,
  pytorch,
  c,
  csharp,
  flutter,
  angular,
  python,
  java,
  docker,

  ipeit,
  tt,
  enit,
  g2foss,
  bac,

  ai,
  genai,
  dlintro,
  dlint,
  mlsup,
  mlintro,
  ccna,

  cp,
  golden,
  vmate,
  clo,
  ps,
  pr,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },

  {
    id: "associative",
    title: "Certifications",
  },
  {
    id: "social",
    title: "Social",
  },
  {
    id: "others",
    title: "Other Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "AI",
    icon: backend,
  },
  {
    title: "Machine Learning / DeepLearning",
    icon: web,
  },
  {
    title: "Data Science ",
    icon:creator,
  },
];

const technologies = [
   {
    name: "python",
    icon: python,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  }, 

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "typeScript",
    icon: typescript,
  },
  {
    name: "react JS",
    icon: reactjs,
  },
  {
    name: "linux",
    icon: linux,
  },

  {
    name: "node",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Coporate Communications Specialist",
    company_name: "SASOL ",
    icon: bac,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - ",
    points: ["Sandton, Qauteng ", "Present", "Hybrid"],
  },
  {
    title: "End-User Computing Specialsit",
    company_name: "SOUTH32-Hillside",
    icon: ipeit,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jun 2024",
    points: ["Richardsbay, KZN ",
      "On Site",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Media & Marketing Officer",
    company_name: "Empangeni High School",
    icon: enit,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jul 2023",
    points: ["Empangeni, KZN",
      "On Site",     
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Customer Service Advisor",
    company_name: "CCI Global",
    icon: g2foss,
    iconBg: "#E6DEDD",
    date: "April 2019 - October 2021",
    points: ["Durban, KZN.",
      "On Site",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Volunteer ",
    company_name: "Life Line",
    icon: tt,
    iconBg: "#E6DEDD",
    date: "July 2018",
    points: [
      
      ,"Check my LinkedIn for more details",
    ],
  },
];

const testimonials = [
  ""
];

const projects = [
  {
    name: "Visual Lab",
    description:
"Visual Lab is a user-friendly tool that allows data scientists to upload datasets, automatically visualize and profile them, and build, train, and download machine learning models for regression and classification tasks, all without needing to write code. ",    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Visualisation",
        color: "pink-text-gradient",
      },
    ],
    image: moteur,
    source_code_link: "https://github.com/",
  },

  {
    name: "Blog AP",
    description:
"My personal blog, built with Next.js and Tailwind CSS, simplifies sharing coding insights through Bits-of-Codes. It renders markdown content seamlessly, supports dark mode, and streamlines writing and publishing posts.",    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Techblog",
        color: "pink-text-gradient",
      },
    ],
    image: cinema ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Computer Vision Motion-Controlled Ping Pong",
    description:"A motion-controlled Ping Pong game that uses real-time computer vision and motion detection—no controllers needed!",    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Opencv",
        color: "green-text-gradient",
      },
      {
        name: "supervised learning",
        color: "pink-text-gradient",
      },
    ],
    image: medal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hand Gesture-Based Zoom with OpenCV",
    description:
"This project demonstrates an interactive zoom effect controlled by hand gestures using OpenCV and cvzone.HandTrackingModule. Users can resize an image in real-time by moving their hands in front of a webcam. The zoom gesture is detected when both hands are visible, and specific finger combinations are used.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "cvzone.HandTrackingModule",
        color: "pink-text-gradient",
      },
    ],
    image: opencv1,
    source_code_link: "https://github.com/waeletteyeb/Hand-Gesture-Zoom-with-OpenCV",
  },
  {
    name: "FullStack Shopping Website with Angular SpringBoot",
    description:
"Joe's Robot Shop Entity is an e-commerce platform built with Angular (front end) and Spring Boot (back end).",    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/waeletteyeb/TP4-ROBOT-SHOP",
  }
  
];




const works = [
  {
    name: "Understanding Machine Learning",
    description:
"DataCamp",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
    ],
    image: mlintro,
    source_code_link: "https://github.com/",
  },

  {
    name: "Supervised Learning with scikit-learn",
    description:"DataCamp"   ,
     tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },


    ],
    image: mlsup ,
    source_code_link: "https://github.com/",
  },
  {
    name: " Ibtroduction to Deep Learning with PyTorch",
    description:"DataCamp"   ,
     tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },


    ],
    image: dlintro ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Intermediate Deep Learning with PyTorch",
    description:"DataCamp "   ,
     tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },


    ],
    image: dlint ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Understanding Artificial Intelligence",
    description:"DataCamp"   ,
     tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
    ],
    image: ai ,
    source_code_link: "https://github.com/",
  },
  {
    name: "CCNA: Introduction to Networks",
    description:"offered by Ecole Nationale d'Ingénieurs de Tunis (ENIT) through the Cisco Networking Academy program."   ,
     tags: [
      {
        name: "Cisco",
        color: "blue-text-gradient",
      },
      {
        name: "Basics",
        color: "green-text-gradient",
      },


    ],
    image: ccna ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Generative AI concepts",
    description:"DataCamp"   ,
     tags: [
      {
        name: "Genai",
        color: "blue-text-gradient",
      },
      {
        name: "GANs",
        color: "green-text-gradient",
      },


    ],
    image: genai ,
    source_code_link: "https://github.com/",
  },

  ];
  

  const social = [
    {
      name: "Competitive Programming Competition ",
      description:
  "I took part in League of Coders, a competitive programming competition at ENIT, organized by my club G2FOSS. It was a really good experience , challenging but fun. I got to test my problem-solving skills under pressure and compete with other talented coders. It was a great way to learn, collaborate, and push my limits. Definitely an experience worth having!",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: cp,
      source_code_link: "https://github.com/",
    },
  
    {
      name: " G2foss Golden Member Certification ",
      description:"The G2FOSS Golden Member Certification recognizes my active contribution and dedication to the G2FOSS  community at ENIT. This certification highlights my involvement in organizing events, promoting open-source initiatives, and participating in competitive programming and development activities within the club. "   ,
       tags: [
        {
          name: "Social",
          color: "blue-text-gradient",
        },
        {
          name: "G2foss",
          color: "green-text-gradient",
        },
  
  
      ],
      image:  golden ,
      source_code_link: "https://github.com/",
    },
    {
      name: "VMATE Wins 1st Place in Injaz Competition: Advancing to National Stage!",
      description:"Our team, VMATE, won 1st place in the Injaz competition at ENIT! We advanced to the national stage with our Smart Band, which was designed to assist Alzheimer’s patients using GPS-guided voice prompts. During that time, we sought an advisor and sponsor to help bring our vision to life. It was an amazing experience, and I’m proud of what we achieved together!"   ,
       tags: [
        {
          name: "INJAZ",
          color: "blue-text-gradient",
        },
        {
          name: "AlzheimersAwareness",
          color: "green-text-gradient",
        },
  
      ],
      image:  vmate ,
      source_code_link: "https://github.com/",
    }

  
    ];


  const skills = [
      {
        name: "Photoshop",
        icon: ps,
      },
      {
        name: "PremierePro",
        icon: pr,
      },
      {
        name: "CLO3D",
        icon: clo,
      },
]

export { services, technologies, experiences, testimonials, projects , social  , works , skills};
