import { render } from "../../../mainpage/render";

export const redirectToMainPage = (event: Event) => {
  event.preventDefault();
  
  render();
};