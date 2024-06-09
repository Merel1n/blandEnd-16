import { createData } from './createData';
import { localStorageApi } from './localstorageApi';
import { refs } from './refs';
import { createMarkupCard } from './createMarkupCard';

export function formSubmit(e) {
  e.preventDefault();
  const data = createData(e);
  localStorageApi.add(data);

  const markup = createMarkupCard(data);

  refs.listElem.insertAdjacentHTML('beforeend', markup);
  e.currentTarget.reset();
}
