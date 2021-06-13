// local reviews data
const reviews = [
  {
    id: 1,
    name: "Anna Johnson",
    title: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "Susan Smith",
    title: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Peter Jones",
    title: "Intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    title: "The Boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// get buttons
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
const surpriseBtn = document.querySelector(".surprise-btn");

// get elements to update
const img = document.querySelector(".author-image");
const authorName = document.querySelector(".author-name");
const authorTitle = document.querySelector(".author-title");
const reviewText = document.querySelector(".review-text");

let current = 0;

function updateReviews(current) {
  // get current reviews
  let currentImg = reviews[current].img;
  let currentName = reviews[current].name;
  let currenttitle = reviews[current].title.toUpperCase();
  let currentText = reviews[current].text;

  // update reviews
  img.src = currentImg;
  authorName.innerHTML = currentName;
  authorTitle.innerHTML = currenttitle;
  reviewText.innerHTML = currentText;
}

// pre
pre.addEventListener("click", decreaseCurrent);

function decreaseCurrent() {
  if (current <= 0) {
    current = reviews.length - 1;
  } else {
    current--;
  }
  updateReviews(current);
}

// next
next.addEventListener("click", increaseCurrent);

function increaseCurrent() {
  if (current >= 3) {
    current = 0;
  } else {
    current++;
  }
  updateReviews(current);
}

// surprise
surpriseBtn.addEventListener("click", surpriseCurrent);

function surpriseCurrent() {
  let current = Math.floor(Math.random() * reviews.length);

  updateReviews(current);
}
