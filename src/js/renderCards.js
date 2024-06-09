import { localStorageApi } from './localstorageApi';
import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';
export function renderCards() {
  const localStorageDate = localStorageApi.getAll();
  const markup = localStorageDate.map(createMarkupCard).join('');
  refs.listElem.insertAdjacentHTML('beforeend', markup);
}
