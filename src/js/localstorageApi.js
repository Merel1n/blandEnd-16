function add(data) {
  const dataArr = JSON.parse(localStorage.getItem('key')) || [];
  dataArr.push(data);
  localStorage.setItem('key', JSON.stringify(dataArr));
}
function getAll() {
  return JSON.parse(localStorage.getItem('key')) || [];
}
export const localStorageApi = { add, getAll };
