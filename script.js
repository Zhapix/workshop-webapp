let items = [];
const form = document.getElementById('crudForm');
const nameInput = document.getElementById('nameInput');
const itemList = document.getElementById('itemList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    items.push(name);
    nameInput.value = '';
    renderList();
  }
});

function renderList() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <div>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;
    itemList.appendChild(li);
  });
}

function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}

function editItem(index) {
  const newName = prompt("Edit item:", items[index]);
  if (newName !== null && newName.trim()) {
    items[index] = newName.trim();
    renderList();
  }
}
