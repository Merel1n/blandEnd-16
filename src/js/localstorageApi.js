function add(data) {
  const dataArr = JSON.parse(localStorage.getItem('key')) || [];
  dataArr.push(data);
  localStorage.setItem('key', JSON.stringify(dataArr));
}

export const localStorageApi = { add };
