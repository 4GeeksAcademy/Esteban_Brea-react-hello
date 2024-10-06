import React from "react";
import Card from "./Card";

const Cards = () => {
  let infoAcademy = [
    { title: "4Geeks Academy", description: "Es mi academia" },
    { title: "UY-PT-3", description: "Es mi cohort" },
    { title: "Clase React", description: "Es la clase de hoy" },
    { title: "Razones por las que me gusta React", description: "Porque me ahorra tiempo!"},
  ];

  let randomImages = infoAcademy.map(() => {
    let randomSeed = Math.floor(Math.random() * 10000);
    return `https://picsum.photos/seed/${randomSeed}/400/600`;
  });


  return (
    <div className="container">
      <div className="row">
        {infoAcademy.map((value, index, array) => {
          return (
            <div key={index} className="col">
              <Card title={value.title} description={value.description} images={randomImages[index]}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
