"use strict";

// Αρχικοποίηση μεταβλητών
const buttonJoke = document.getElementById("btnJoke");
const textJoke = document.getElementById("txtJoke");

buttonJoke.addEventListener("click", () => {
  getJoke();
});

async function getJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    const resJSON = await res.json();
    textJoke.textContent = resJSON.joke;
  } catch (error) {
    console.error("Error retrieving joke:", error);
    textJoke.textContent = "Error retrieving joke.";
  }
}

//1ο αστείο
getJoke();
