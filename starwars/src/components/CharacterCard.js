import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 30%;
  height: auto;
  margin: 15px 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  background-color: white;
  `;

  const CharName = styled.h3`
    background-color: #42b883;
    margin: 0;
    color: white;
    padding: 10px;
    font-size: 25px;
  `;

  const BottomCard = styled.div`
    
  `;

const CharacterCard = (props) => {
  console.log("this is props", props);
  console.log("this is person", props.person)
  return (
    <CardStyle>
      <CharName>{props.person.name}</CharName>
      <BottomCard>
        <h3>Birth Year: {props.person.birth_year}</h3>
        <h3>Gender: {props.person.gender}</h3>
        <h3>Height: {props.person.height} cm</h3>
      </BottomCard>
    </CardStyle>
  );
};

export default CharacterCard;