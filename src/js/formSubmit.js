import { createData } from './createData';
import { localStorageApi } from './localstorageApi';

export function formSubmit(e) {
  e.preventDefault();
  const data = createData(e);
  localStorageApi.add(data);
}
