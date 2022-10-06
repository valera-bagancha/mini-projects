import { render } from "../../../mainpage/render";

export const redirectMainPage = (event: Event) => {
  event.preventDefault();
  
  render();
};