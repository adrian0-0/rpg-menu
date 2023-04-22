import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([
    { id: 1, label: "O que é RPG?" },
    { id: 2, label: "Como jogar RPG?" },
    { id: 3, label: "Tipos de RPG" },
    { id: 4, label: "Personagens em RPG" },
    { id: 5, label: "Mecânicas em RPG" },
    { id: 6, label: "Dicas para mestres em RPG" },
    { id: 7, label: "História do RPG" },
    { id: 8, label: "Recursos para jogadores de RPG" },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  const handleBackClick = () => {
    setSelectedOption(null);
  };

  return (
    <div className="App">
      {selectedOption ? (
        <div>
          <button onClick={handleBackClick}>Voltar</button>
          {selectedOption.label === "O que é RPG?" && (
            <p>
              RPG significa Role Playing Game, ou seja, Jogo de Interpretação de
              Papéis.
            </p>
          )}
          {selectedOption.label === "Como jogar RPG?" && (
            <p>
              Em um jogo de RPG, os jogadores interpretam personagens e
              interagem em um mundo imaginário criado pelo mestre do jogo.
            </p>
          )}
          {selectedOption.label === "Tipos de RPG" && (
            <p>
              Existem diversos tipos de RPG, como RPG de mesa, RPG de videogame
              e RPG de ação ao vivo.
            </p>
          )}
          {selectedOption.label === "Personagens em RPG" && (
            <p>
              Os personagens em RPG são criados pelos jogadores e possuem
              características como habilidades, atributos e histórias pessoais.
            </p>
          )}
          {selectedOption.label === "Mecânicas em RPG" && (
            <p>
              As mecânicas em RPG incluem elementos como rolagem de dados,
              pontos de experiência e sistema de combate.
            </p>
          )}
          {selectedOption.label === "Dicas para mestres em RPG" && (
            <p>
              Dicas para mestres em RPG incluem ser flexível, ouvir os jogadores
              e criar uma narrativa envolvente.
            </p>
          )}
          {selectedOption.label === "História do RPG" && (
            <p>
              O RPG surgiu na década de 1970 nos Estados Unidos e desde então se
              popularizou em todo o mundo.
            </p>
          )}
          {selectedOption.label === "Recursos para jogadores de RPG" && (
            <p>
              Existem diversos recursos para jogadores de RPG, como livros de
              regras, cenários prontos e comunidades online.
            </p>
          )}
        </div>
      ) : (
        <ul>
          {menu.map((option) => (
            <li key={option.id} onClick={() => handleMenuClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
