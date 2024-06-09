export function formSubmit(e) {
  e.preventDefault();
  const data = {};
  new FormData(e.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
}
