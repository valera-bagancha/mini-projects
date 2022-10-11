export const generateAnswerNodes = (answers) => answers.map(({text, id}) => 
  `<div id='${id}' class='answer'>${text}</div>`).join('');