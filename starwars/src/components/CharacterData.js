import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import styled from "styled-components";


const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterData() {
  let [characterData, setCharacterData] = useState([]);

  const fecthCharData = () => {
    axios
    .get("https://swapi.co/api/people")
    .then(response => {
      setCharacterData(characterData = response.data.results);
      console.log("this is characterData", characterData);
    })
    .catch(error => {
      console.log(error);
    })
  };

  useEffect(fecthCharData, []);


  return (
    <CardContainer>
      {characterData.map((person, index) => {
        return <CharacterCard person={characterData[index]}/>;
      })}
    </CardContainer>
  )
};