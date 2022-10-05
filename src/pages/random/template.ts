export const randomTemplate = `
  <div class="app">
    <div class="back">
      <span id="back-to-main-page"class="material-symbols-outlined">
      arrow_back
      </span>
    </div>
    <h1 class="header">Random number</h1>
    <div class="container-random">
      <div class="title">True Random Number Generator</div>
      <div class="inputs">
        <div class="button-position">
          <button id="first-button" >Generate Random number</button>
        </div>
        <p class='first-random-number'></p>
        <div>
          <input id="min" placeholder="Min" type="number">
        </div>
        <div>
          <input id="max" placeholder="Max" type="number">
        </div>
        <div class="button-position">
          <button id="second-button">GENERATE</button>
        </div>
        <p class='second-random-number'></p>
      </div>
    </div>
  </div> 
`;