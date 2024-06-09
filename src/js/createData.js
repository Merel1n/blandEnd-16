import { nanoid } from 'nanoid';
export function createData(e) {
  const data = { id: nanoid() };
  new FormData(e.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
