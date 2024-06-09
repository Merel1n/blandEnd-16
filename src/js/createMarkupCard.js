export function createMarkupCard(data) {
  return `<li class="task-list-item">
 <button class="task-list-item-btn">Видалити</button>
 <h3>${data.taskName}</h3>
 <p>${data.taskText}</p>
 </li>`;
}
