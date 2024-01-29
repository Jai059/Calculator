const result = document.querySelector(".display");
let gstRate = 0.18;

const appendToResult = (value) => {
  result.textContent =
    result.textContent === "0" ? value : result.textContent + value;
};

const clearAll = () => (result.textContent = "0");

const calculateResult = () => {
  result.textContent = eval(result.textContent);
};

const deleteLastCharacter = () => {
  result.textContent = result.textContent.slice(0, -1);
  if (result.textContent === "") {
    result.textContent = "0";
  }
};

const applyGST = () => {
  const num = parseFloat(result.textContent);
  if (!isNaN(num)) {
    result.textContent = (num + num * gstRate).toFixed(2);
  }
};
