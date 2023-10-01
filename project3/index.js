const reviewContainer = document.querySelector(".review-container");
const nextBtn = document.querySelector("#nextbtn");
const prevBtn = document.querySelector("#prevbtn");

const persons = [
  {
    image: "assets/images/jacksmith.jpg",
    fullName: "Jack Hanselman",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error nisi, ab sint officia, in et reiciendis qui laborum nobis laboriosam. Dolorem quae culpa dolores quasi eveniet laudantium temporibus incidunt",
  },
  {
    image: "assets/images/marry.jpg",
    fullName: "mary stallman",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error nisi, ab sint officia, in et reiciendis qui laborum nobis laboriosam. Dolorem quae culpa dolores quasi eveniet laudantium temporibus incidunt.",
  },
  {
    image: "assets/images/linus.jpg",
    fullName: "lenus torvalds",
    description:
      "t Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error nisi, ab sint officia, in et reiciendis qui laborum nobis laboriosam. Dolorem quae culpa dolores quasi eveniet laudantium temporibus incidunt.",
  },
];
let index = 0;
const person = persons[index];
reviewContainer.children[0].children[0].setAttribute("src", person.image);
reviewContainer.children[1].children[0].textContent = person.fullName;
reviewContainer.children[2].textContent = person.description;

nextBtn.addEventListener("click", () => {
  index += 1;
  if (index >= persons.length) index = 0;
  const person = persons[index];
  reviewContainer.children[0].children[0].setAttribute("src", person.image);
  reviewContainer.children[1].children[0].textContent = person.fullName;
  reviewContainer.children[2].textContent = person.description;
});

prevBtn.addEventListener("click", () => {
  index -= 1;
  if (index < 0) index = persons.length - 1;
  const person = persons[index];
  reviewContainer.children[0].children[0].setAttribute("src", person.image);
  reviewContainer.children[1].children[0].textContent = person.fullName;
  reviewContainer.children[2].textContent = person.description;
});
