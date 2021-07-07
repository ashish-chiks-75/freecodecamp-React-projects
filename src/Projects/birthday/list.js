import React from "react";

const List = ({ persons }) => {
  return (
    <>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h2>{name}</h2>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
