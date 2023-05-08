import CompetitorImg from "/src/assets/images/Nacho_AB.jpg";
import QueensImg from "/src/assets/images/Fio_Queens.png";
import FitnessImg from "/src/assets/images/Fitness-KB-Swing.jpg";
import PersonalImg from "/src/assets/images/Personal_Training.jpg";

const products = [
  {
    title: "Competitor",
    description:
      "Competitor esta diseñado para Atletas Avanzados que compitan o busquen competir en el deporte del Fitness.",
    duration: "5 dias/semana, sesiones de 90-120 minutos.",
    img: CompetitorImg,
    endpoint: "solid-comp",
  },
  {
    title: "Queens",
    description:
      "Programa diseñado para personas de cualquier nivel que quieran hacer hincapié en los grupos musculares correspondientes a Gluteos, Abdomen y Piernas.",
    durations: "3 dias/semana, sesiones de 60-90 minutos",
    img: QueensImg,
    endpoint: "solid-queens",
  },
  {
    title: "Solid Hour",
    description:
      "Programa diseñado para Atletas Principiantes/Intermedios que solo dispongan de 1 hora al día para entrenar.",
    durations: "3 o 5 dias/semana, 60 minutos por sesion",
    img: FitnessImg,
    endpoint: "solid-hour-5d",
  },
  {
    title: "Personalizado",
    description:
      "Programa personalizado de 3, 4 o 5 dias. Se adapta 100% a tus objetivos, disponibilidad y necesidades! Consulta más.",
    duration: "Variable",
    img: PersonalImg,
    endpoint: "solid-personalizados",
  },
];

export default products;
