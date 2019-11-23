import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 32%;
  height: 180px;
  padding: 15px 5px;
  `;

const CharacterCard = (props) => {
  console.log("this is props", props);
  console.log("this is person", props.person)
  return (
    <CardStyle>
      <h3>Name: {props.person.name}</h3>
      <h3>Birth Year: {props.person.birth_year}</h3>
      <h3>Gender: {props.person.gender}</h3>
      <h3>Height: {props.person.height}</h3>
    </CardStyle>
  );
};

export default CharacterCard;