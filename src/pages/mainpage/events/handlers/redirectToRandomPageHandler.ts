import { renderRandom } from "../../../random/renderRandom";

export const redirectRandomPageHandler = (event: Event) => {
  event.preventDefault();
  
  renderRandom();
};