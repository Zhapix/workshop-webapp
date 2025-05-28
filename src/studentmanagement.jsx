/*import { useEffect } from "react"
import './StudentManagement.css'


export const StudentManagement = ()=> {

    useEffect(() =>{   //javascript code poruma call pannumu
        const studentForm = document.getElementById('studentForm');
        const studentTableBody = document.getElementById('studentTable').querySelector('tbody');

        let students = [
            { id: 1, name: "John Doe", age: 20, email: "john@example.com", city: "New York" },
            { id: 2, name: "Jane Smith", age: 22, email: "jane@example.com", city: "Los Angeles" },
            { id: 3, name: "Alice Johnson", age: 19, email: "alice@example.com", city: "Chicago" }
        ];

        studentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('studentName').value;
            const age = document.getElementById('studentAge').value;
            const email = document.getElementById('studentEmail').value;
            const city = document.getElementById('studentCity').value;

            const student = { id: Date.now(), name, age, email, city };
            students.push(student);

            document.getElementById('studentName').value = '';
            document.getElementById('studentAge').value = '';
            document.getElementById('studentEmail').value = '';
            document.getElementById('studentCity').value = '';

            renderStudents();
        });

        function renderStudents() {
            studentTableBody.innerHTML = '';

            students.forEach(student => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.email}</td>
                    <td>${student.city}</td>
                    <td>
                        <button class="edit" onclick="editStudent(${student.id})">Edit</button>
                        <button class="delete" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                `;

                studentTableBody.appendChild(row);
            });
        }

        function editStudent(id) {
            const student = students.find(s => s.id === id);
            if (student) {
                document.getElementById('studentName').value = student.name;
                document.getElementById('studentAge').value = student.age;
                document.getElementById('studentEmail').value = student.email;
                document.getElementById('studentCity').value = student.city;

                deleteStudent(id);
            }
        }

        function deleteStudent(id) {
            students = students.filter(student => student.id !== id);
            renderStudents();
        }

        // Initial render
        renderStudents();

    },[])
return(   //html code
    <div>
        <h1>Student Management System</h1>
    <form id="studentForm">
        <input type="text" id="studentName" placeholder="Name" required />
        <input type="number" id="studentAge" placeholder="Age" required />
        <input type="email" id="studentEmail" placeholder="Email" required />
        <input type="text" id="studentCity" placeholder="City" required />
        <button type="submit">Add Student</button>
    </form>

    <table id="studentTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>City</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    </div>
)
}*/
