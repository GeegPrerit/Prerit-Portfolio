import img from "./assets/images/prerit-image.png"
// import img2 from "./assets/images/Profile-picture.png"
import projet_img from "./assets/images/project-1.png"
import projet_img2 from "./assets/images/project-2.png"
import projet_img3 from "./assets/images/project-3.png"
const logotext = "Prerit";
const meta = {
  title: "Prerit Khandelwal",
  description: "I’m Prerit Khandelwal Full stack devloper, Software Developer enthusiast currently looking for opportunity.",
};

const introdata = {
  title: "I’m Prerit Khandelwal",
  animated: {
    first: "I love coding",
    second: "I can code cool websites",
  },
  description: "Welcome to my profile! I have completed Master’s in Computer Application at JECRC University, with a strong foundation in Computer Applications.",
  your_img_url: img,
};

const dataabout = {
  title: "a bit about my self",
  aboutme: " As a Traniee-Associate at Kanini Software Solution, I am actively contributing to real-world projects and honing my skills in software development.I have hands-on experience in creating impactful solutions, as evidenced by projects like Make Your Trip, a React-based platform for seamless travel experiences, and Our Hospital React Website, where I implemented role-based access and secure token-based authentication in C.Certified in C#, Google Cloud, Salesforce, and more, my technical skills span various languages and developer tools. Having led a team in the SIH Hackathon and participated in TECH-A-THON organized by iNeuron, I am not only technically proficient but also a collaborative and effective team player.Let's connect and explore the possibilities in the dynamic world of software development and innovation!.",
};
const worktimeline = [{
  jobtitle: "Traniee Associate Intern",
  where: "Kanini Software Solutions, Chennai",
  date: "Feb. - Nov. 2023",
},
{
  jobtitle: "Salesforce Developer Intern",
  where: "AICTE (Remote)",
  date: "2022",
}
];

const skills = [{
  name: "Java",
  value: 90,
},
{
  name: "C++",
  value: 85,
},
{
  name: "React",
  value: 60,
},
{
  name: "Angular",
  value: 60,
},

];

const services = [{
  title: "Servicenow",
  description: "Experienced in ServiceNow development, proficient in creating custom applications, workflows, and configurations. Seeking opportunities for further growth and collaboration.",
},
{
  title: "Salesforce",
  description: "Salesforce developer with expertise in customizing workflows and building applications. Proficient in Apex, Visualforce, and Lightning components. Last used in 2021, quickly recall skills within a week",
}
];

const dataportfolio = [{
  img: projet_img2,
  description: "Our Hospital",
  link: "https://github.com/GeegPrerit/Health_Care",
},
{
  img: projet_img,
  description: "Make Your Trip - Travel Agency Website",
  link: "https://github.com/GeegPrerit/Kanini-Tourism",
},
{
  img: projet_img3,
  description: "Snap Scheduler",
  link: "https://github.com/GeegPrerit/Kanini-Tourism",
},
  // {
  //     img: "https://picsum.photos/400/600/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     img: "https://picsum.photos/400/300/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // }
];

const contactConfig = {
  YOUR_EMAIL: "prerit.web@gmail.com",
  YOUR_FONE: "(+91)797-627-1478",
  description: "Feel free to contact me for any inquiries or provide feedback. I'm here to assist you. ☺ ",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_jdxsk2a",
  YOUR_TEMPLATE_ID: "template_vj08dah",
  YOUR_USER_ID: "Z4YOXgov-cwzz_Zeo",
};

const socialprofils = {
  github: "https://github.com/PreritKhandelwal98",
  facebook: "https://www.facebook.com/prerit.khandelwal.39/",
  linkedin: "https://www.linkedin.com/in/mrpreritkhandelwal/",
  twitter: "https://twitter.com/PreritWeb",
  instragram: "https://www.instagram.com/khandelwalprerit?igsh=d29ocXF5cnY0a2Nw"

};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};