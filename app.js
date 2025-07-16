
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore, collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBi4rhvW7t7kQ0eq2WgVxz727qHnOfsJ00",
    authDomain: "saylani-admission-form-d62c8.firebaseapp.com",
    projectId: "saylani-admission-form-d62c8",
    storageBucket: "saylani-admission-form-d62c8.firebasestorage.app",
    messagingSenderId: "82909623611",
    appId: "1:82909623611:web:9693a328ed35808061331e",
    measurementId: "G-9GN4RX1KHW"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


async function admissionForm() {
    const formData = {
        fullName: document.getElementById("fullName").value,
        fatherName: document.getElementById("fatherName").value,
        email: document.getElementById("email").value,
        cnic: document.getElementById("cnic").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        education: document.getElementById("education").value,
        course: document.getElementById("course").value,
        address: document.getElementById("address").value
    };

    try {
        const docRef = await addDoc(collection(db, "admissions"), formData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    admissionForm();
    document.getElementById("registrationForm").reset();
    alert("Form submitted successfully!");
})
async function fetchData (){
  const names =  await getDocs(collection(db, 'admissions'))
   names.forEach((name)=> {
      const {fullName, fatherName, email, cnic, phone, dob, gender, education, course, address} = name.data()
    const card = document.getElementById("infoCard");
    card.innerHTML = `
      <h2>Student Information</h2>
      <div class="info"><span>Full Name:</span> ${fullName}</div>
      <div class="info"><span>Father's Name:</span> ${fatherName}</div>
      <div class="info"><span>Email:</span> ${email}</div>
      <div class="info"><span>CNIC:</span> ${cnic}</div>
      <div class="info"><span>Phone:</span> ${phone}</div>
      <div class="info"><span>Date of Birth:</span> ${dob}</div>
      <div class="info"><span>Gender:</span> ${gender}</div>
      <div class="info"><span>Education:</span> ${education}</div>
      <div class="info"><span>Course:</span> ${course}</div>
      <div class="info"><span>Address:</span> ${address}</div>
    `;
  })
}
