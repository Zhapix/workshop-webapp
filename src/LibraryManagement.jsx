import { useEffect } from "react"
// import './LibraryManagement.css'


export const LibraryManagement = () => {
    useEffect(() => {
    const form = document.getElementById('addBookForm');
    const tableBody = document.querySelector('#bookTable tbody');
    const filterInput = document.getElementById('filterInput');

     const books = [];

    function renderTable(data) {
      debugger;
      tableBody.innerHTML = '';
      data.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.year}</td>
        `;
        tableBody.appendChild(row);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const year = document.getElementById('year').value;

      books.push({ title, author, year });
      renderTable(books);
      form.reset();
    });

    filterInput.addEventListener('input', function () {
      const searchTerm = filterInput.value.toLowerCase();
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
      renderTable(filteredBooks);
    });
      //  renderTable();

    },[])

return(
     <div class="container">
    <h1>Library Management System</h1>

    <form id="addBookForm">
      <h3>Add New Book</h3>
      <input type="text" id="title" placeholder="Book Title" required />
      <input type="text" id="author" placeholder="Author" required />
      <input type="number" id="year" placeholder="Publication Year" required />
      <button type="submit">Add Book</button>
    </form>

    <div class="filter-box">
      <input type="text" id="filterInput" placeholder="Filter by title or author..." />
    </div>

    <h3>Book List</h3>
    <table id="bookTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
)
}