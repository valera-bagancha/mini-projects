import { render } from "../../../mainpage/render";

export const redirectMainPageHandler = (event: Event) => {
  event.preventDefault();
  
  render();
};