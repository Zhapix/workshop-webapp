import { useEffect } from "react"
 import './B2b.css'

export const B2B = () => {
    useEffect(() => {
        document.getElementById("b2bForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const notes = document.getElementById("notes").value;

  const data = {
    clientName,
    location,
    phone,
    email,
    notes,
  };

  console.log("Form submitted:", data);
  alert("Form submitted! Check console for details.");
  });
},[])
};
  return(
    <div class="form-container">
    <h2>B2B Client Form</h2>
    <form id="b2bForm">
      <label>B2B Client Name <span class="required">*</span></label>
      <input type="text" id="client Name" placeholder="B2B Client Name" required />
      <label>Location</label>
      <input type="text" id="Location" />
      <label>Phone Contact</label>
      <div class="phone-input">
        <span class="flag">flag</span>
        <span class="country-code">+91</span>
        <input type="text" id="phone" placeholder="81234 56789" />
        </div>
        <label>Email contact</label>
        <div class="email-input">
            <input type="email" id="email"/>
            <span class="email-icon">&#9993;</span>
        </div>
        <label>Notes</label>
        <textarea id="Notes" rows="4"></textarea>
        <div class="button group">
            <button type="submit" class="submit">submit</button>
            <button type="Reset"  class="Reset">Reset</button>
             
        </div>
    </form>
    </div>
  )
