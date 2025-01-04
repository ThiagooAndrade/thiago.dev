import { projectsDataType } from './../types/Types';
export const links = {
  github: "https://github.com/ThiagooAndrade",
  linkedin: "https://www.linkedin.com/in/thiagoo-andrade/",
}

export const projectsData: projectsDataType[] = [
  {
    img: "meutempo.png",
    title: "Meu Tempo",
    description: "Um site para previsão do tempo com dados de clima e previsões do tempo",
    livePreviewUrl: "https://meu-tempo.vercel.app/",
    githubUrl: "https://github.com/ThiagooAndrade/Meu-tempo",
    stack: ["HTML", "CSS", "JAVASCRIPT", "OpenWeatherMap API"],
  },
  {
    img: "portfolio.png",
    title: "Portfolio",
    description: "Meu portfolio para expor meus melhores projetos",
    livePreviewUrl: "https://thiago-dev.vercel.app",
    githubUrl: "https://github.com/ThiagooAndrade/thiago.dev",
    stack: ["HTML", "CSS", "VueJs"]
  },
  {
    img: "Meupet.jpeg",
    title: "Meu Pet",
    description: "Projeto feito para um hackathon com o tema de animais em situação de rua",
    livePreviewUrl: "",
    githubUrl: "https://github.com/MeuPet-Start",
    stack: ["ReactJs, SpringBoot, Mysql"],
  }
]

