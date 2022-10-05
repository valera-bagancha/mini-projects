import { addRedirectToMainEvent } from "./events/addRedirectToMainPageEvent";
import { showRandomNumbers } from "./showRandomNumbers";
import { showRandomNumByInput } from "./showRandomNumByInput";

import { randomTemplate } from "./template";

export function renderRandom() {
  const $app = document.querySelector('.app');

  $app.innerHTML = randomTemplate;

  addRedirectToMainEvent();
  showRandomNumbers();
  showRandomNumByInput()
}