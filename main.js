const inputElement = document.querySelector("input");

const callAPI = (e) => {
  console.log("call api", e.target.value);
};

const debounce = (fn, delay) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedCallAPI = debounce(callAPI, 500);

// console.log(debouncedCallAPI);

inputElement.addEventListener("input", debouncedCallAPI);
