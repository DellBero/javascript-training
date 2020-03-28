const button = document.getElementById('create');
const fromYearElement = document.getElementById('fromYear'); // DOM Element document objectm model representation of the input element <input id="fromYeat">
const toYearElement = document.getElementById('toYear');
const resultDivElement = document.getElementById('result');

button.onclick = () => {

};

button.addEventListener('click', () => {
  const fromYear =  fromYearElement.value;
  const toYear = toYearElement.value;
  if (fromYear.length == 0 || toYear.length == 0){
    return;
  } else {
    const from = parseInt(fromYear);
    const to = parseInt(toYear);

    // if (number && number) ==> true;
    if (from && to) { // 2005 - 2007
      // 1- 2005
      // 2- 2006
      // 3- 2007
      const selectElement = document.createElement('select');

      for (let i = from; i <= to; i++) {
        const section = document.createElement('option');
        section.value = i;
        section.textContent = i;
        selectElement.append(section);
      }
      resultDivElement.innerHTML = '';
      resultDivElement.append(selectElement);
    }
  }
})