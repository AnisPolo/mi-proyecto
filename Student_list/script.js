"use strict";

let students = [];

window.onload = function () {
  const stored = localStorage.getItem("students");
  if (stored) {
    students = JSON.parse(stored);
    displayStudents();
    updateAverage();
  }
};

function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "" || name === isNaN) {
    alert("Please enter a valid name.");
    return;
  }

  const grade = parseFloat(document.getElementById("gradeInput").value);
  if (grade > 100 || grade < 0) {
    alert("Please enter a valid grade between 0 and 100.");
    return;
  }

  const student = {
    name,
    grade,
    status: grade >= 70 ? "Passed" : "Failed",
  };

  students.push(student);
  displayStudents();
  updateAverage();
  saveToLocalStorage();
  document.getElementById("nameInput").value = "";
  document.getElementById("gradeInput").value = "";
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    //li.classList.add(students[i].grade => 70 ? "passed" : "failed");
    if (students[i].status === "Passed") {
      li.innerHTML = `<p class="passed">${students[i].name} -${students[i].grade} - ${students[i].status}</p>`;
    } else if (students[i].status === "Failed") {
      li.innerHTML = `<p class="failed">${students[i].name} -${students[i].grade} - ${students[i].status}</p>`;
    }
    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.lenght === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < students.lenght; i++) {
    total = total + students[i].grade;
  }

  let average = total / students.lenght;
  document.getElementById(
    "averageDisplay"
  ).textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}
