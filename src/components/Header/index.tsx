import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

  const pagesList = [
    { name: "Главная", link: "/" },
    { name: "Программы", link: "/programs" },
    { name: "Упражнения", link: "/exercises" },
    { name: "Диеты", link: "/diets" },
  ];
  return <div>header</div>;
};

export default Header;
