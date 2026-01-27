import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";

const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !password) {
    alert("All fields are required");
    return;
  }

  try {
    await addDoc(collection(db, "commerce"), {
      name,
      password,
      createdAt: new Date()
    });

    alert("Data saved successfully");
    form.reset();
  } catch (error) {
    console.error("Error saving data:", error);
  }
});
