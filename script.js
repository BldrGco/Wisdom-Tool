const figures = [
  {
    name: "Steve Jobs",
    bio: "Co-founder of Apple, visionary entrepreneur.",
    quote: "Innovation distinguishes between a leader and a follower.",
    mainIdea: "Think differently and relentlessly focus on user experience.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg"
  },
  {
    name: "Mahatma Gandhi",
    bio: "Indian lawyer, anti-colonial nationalist, and political ethicist.",
    quote: "Be the change that you wish to see in the world.",
    mainIdea: "Lead by example and change begins with individual actions.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
  },
  {
    name: "Marie Curie",
    bio: "Pioneer in radioactivity and first woman to win a Nobel Prize.",
    quote: "Nothing in life is to be feared, it is only to be understood.",
    mainIdea: "Pursue knowledge bravely, even when it challenges norms.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Marie_Curie_c1920.jpg"
  },
  {
    name: "Elon Musk",
    bio: "CEO of Tesla and SpaceX, innovator and entrepreneur.",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    mainIdea: "Boldness and risk-taking are essential for breakthroughs.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
  },
  {
    name: "Confucius",
    bio: "Chinese philosopher and politician of the Spring and Autumn period.",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    mainIdea: "Consistency and perseverance are keys to progress.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Confucius_the_sage.jpg"
  }
];

const content = document.getElementById('content');
const loader = document.getElementById('loader');

function renderCard(person) {
  return `
    <div class="card">
      <img class="profile-img" src="${person.img}" alt="${person.name}" />
      <div class="name">${person.name}</div>
      <div class="bio">${person.bio}</div>
      <div class="quote">“${person.quote}”</div>
      <div class="main-idea">${person.mainIdea}</div>
    </div>
  `;
}

function displayFigures() {
  loader.style.display = 'none';
  figures.forEach(person => {
    content.innerHTML += renderCard(person);
  });
}

// Simulate loading delay
setTimeout(displayFigures, 1000);
