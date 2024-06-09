export function createData(e) {
  const data = {};
  new FormData(e.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
