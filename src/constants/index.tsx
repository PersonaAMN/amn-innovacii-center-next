import {
  EducationalProgrammDescription,
  SyllabusCosmeticDescription,
  SyllabusDermatologyDescription,
} from "./programmsDescription";

export const NavLinks = [
  { href: "/", key: "about", text: "О нас", order: "col-start-1" },
  {
    href: "/teachers",
    key: "teachers",
    text: "Преподаватели",
    order: "col-start-2",
  },
  {
    href: "/programms",
    key: "programms",
    text: "Обучающие программы",
    order: "col-start-4",
  },
  {
    href: "/contacts",
    key: "contacts",
    text: "Контакты",
    order: "col-start-5",
  },
];

export const experts = [
  {
    image: "/assets/Peretolchina.png",
    name: "Перетолчина Татьяна Федоровна",
    degree: "Доктор медицинских наук, профессор",
    speciality: "врач терапевт, кардиолог",
    experience: "более 30 лет",
    description: "Что-нибудь еще",
  },
  {
    image: "/assets/Glazkova.jpg",
    name: "Глазкова Лариса Константиновна",
    degree: "Доктор медицинских наук, профессор",
    speciality: "врач-дерматовенеролог",
  },
  {
    image: "/assets/Morozova.jpg",
    name: "Морозова Татьяна Станславовна",
    degree: "Доктор медицинских наук",
    speciality: "гастроэнтеролог",
  },
  {
    name: "Скурихина Марина Евгеньевна",
    degree: "Кандидат медицинских наук",
    speciality: "врач-дерматовенеролог",
  },
];

export const programms = [
  {
    fileName: "Образовательная программа Косметик",
    src: "/pdf/educational-program-cosmetic.pdf",
    preview: "/pdf/educational-program-cosmetic.jpg",
    description: <EducationalProgrammDescription />,
  },
  {
    fileName: 'Рабочая программа дисциплины "Косметик"',
    src: "/pdf/syllabus-cosmetic.pdf",
    preview: "/pdf/syllabus-cosmetic.jpg",
    description: <SyllabusCosmeticDescription />,
  },
  {
    fileName: 'Рабочая программа дисциплины "Основы дерматологии"',
    src: "/pdf/syllabus-basics-of-dermatology.pdf",
    preview: "/pdf/syllabus-basics-of-dermatology.jpg",
    description: <SyllabusDermatologyDescription />,
  },
];
