import { render } from "../../../random/render";

export const redirectRandomPage = (event: Event) => {
  event.preventDefault();
  
  render();
};