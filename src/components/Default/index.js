import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat</C.Title>
      <C.Info>
        Envie mensagens utilizando seu email no login do app
      </C.Info>
    </C.Container>
  );
};

export default Default;
