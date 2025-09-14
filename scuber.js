fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((character) => {
      const li = document.createElement("li");
      li.textContent = character.name;
      li.addEventListener("click", () => showDetails(character));
      document.getElementById("animal-list").appendChild(li);
    });
  });

function showDetails(character) {
  document.getElementById("animal-image").src = character.image;
  document.getElementById("animal-name").textContent = character.name;
  document.getElementById("animal-votes").textContent = character.votes;

  let currentVotes = character.votes;

  document.getElementById("vote-button").onclick = () => {
    currentVotes++;
    document.getElementById("animal-votes").textContent = currentVotes;
  };

  document.getElementById("reset-button").onclick = () => {
    currentVotes = 0;
    document.getElementById("animal-votes").textContent = currentVotes;
  };
}
