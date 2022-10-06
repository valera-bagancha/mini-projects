import { showRandomNumByValue } from "./handlers/showRandomNumByValue";

export const addShowRandomNumberByValue = () => {
  const generate = document.querySelector('#second-button');

  generate.addEventListener('click', showRandomNumByValue);
};