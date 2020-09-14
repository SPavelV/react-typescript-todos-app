import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere neque
        culpa ullam delectus a. Nostrum, ducimus? Molestiae, repellat!
        Repellendus exercitationem veritatis voluptatum a cumque unde aperiam
        similique, sed odio dolorum?
      </p>
      <button className="btn" onClick={()=> history.push("/")}>Обратно к списку дел.</button>
    </>
  );
};
