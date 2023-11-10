"use strict";

// Αρχικοποίηση μεταβλητών
const buttonJoke = document.getElementById("btnJoke");
const textJoke = document.getElementById("txtJoke");

buttonJoke.addEventListener("click", () => {
  getTodos();
});

async function getTodos() {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const resJSON = await res.json();
  if (resJSON.status === 200) {
    textJoke.textContent = resJSON.joke;
  } else {
    textJoke.textContent = "Error retrieving joke!";
  }
}

//1ο αστείο
getTodos();
