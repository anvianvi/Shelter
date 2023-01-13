(function () {
  const pets = [
    {
      name: "Jennifer",
      img: "../../assets/images/pets-ourPets/pets-jennifer.svg",
      type: "Dog",
      breed: "Labrador",
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Sophia",
      img: "../../assets/images/pets-ourPets/pets-sophia.svg",
      type: "Dog",
      breed: "Shih tzu",
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Woody",
      img: "../../assets/images/pets-ourPets/pets-woody.svg",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"],
    },
    {
      name: "Scarlett",
      img: "../../assets/images/pets-ourPets/pets-scarlett.svg",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Katrine",
      img: "../../assets/images/pets-ourPets/pets-katrine.svg",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Timmy",
      img: "../../assets/images/pets-ourPets/pets-timmy.svg",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"],
    },
    {
      name: "Freddie",
      img: "../../assets/images/pets-ourPets/pets-freddie.svg",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Charly",
      img: "../../assets/images/pets-ourPets/pets-charly.svg",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"],
    },
  ];
  const HAMBURGER = document.querySelector("#hamburger");
  const BURGERSCREAN = document.querySelector("#burger-screan");
  const HELPLINK = document.querySelector("#help-link");
  const CONTACTSLINK = document.querySelector("#contacts-link");
  const BODY = document.querySelector(".body");
  const SHADOW = document.querySelector("#shadow");
  const POPUP = document.querySelector(".popup");
  const createpopup = document.querySelector(".popup-content-container");

  let bp = getBreakpoint();
  function shuffle(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  function closeburger() {
    HAMBURGER.classList.remove("is-active");
    BURGERSCREAN.classList.remove("is-active");
    BODY.classList.remove("body-popup");
    SHADOW.classList.remove("is-active");
  }

  function showPopUp(data) {
    const popupCompiled = _.template(
      `<div class="popup-img"><img src="<%- img %>" alt="" class="popup-img"></div>
          <div class="popup-info">
              <div class="popup-name"><%- name %></div>
              <div class="popup-type-breed"><%- type %> - <%- breed %></div>
              <div class="popup-description"><%- description %></div>
              <div class="popup-li"><span><strong>Age: </strong><%- age %></span></div>
              <div class="popup-li"><span><strong>Inoculations: </strong><%- inoculations %></span></div>
              <div class="popup-li"><span><strong>Diseases: </strong><%- diseases %></span></div>
              <div class="popup-li"><span><strong>Parasites: </strong><%- parasites %></span></div> 
              `
    );

    createpopup.innerHTML = popupCompiled(data);

    POPUP.classList.remove("popup-hide");
    BODY.classList.add("body-popup");
    POPUP.classList.add("popup-active");
  }

  function closeModal() {
    POPUP.classList.add("popup-hide");
    BODY.classList.remove("body-popup");
    POPUP.classList.remove("popup-active");
  }

  function getBreakpoint() {
    let breakpoint = "desktop";
    if (window.screen.width < 767) {
      breakpoint = "mobile";
    } else if (window.screen.width < 1279) {
      breakpoint = "tablet";
    }

    return breakpoint;
  }

  function getPetsArray(a, b) {
    let arrOfPets = [];
    for (i = 0; i < a; i++) {
      arrOfPets = [...arrOfPets, ...shuffle(pets).slice(0, b)];
    }

    return arrOfPets;
  }

  function initCarusel() {
    console.log('initCarusel', bp);

    let arrOfPets = [];

    switch (bp) {
      case "mobile":
        arrOfPets = getPetsArray(16, 3);
        break;
      case "tablet":
        arrOfPets = getPetsArray(8, 6);
        break;
      default:
        arrOfPets = getPetsArray(6, 8);
    }

    console.log(arrOfPets);

    const petsCardsCompiled = _.template(
      "<% _.forEach(pets, function(pet) { %>" +
        '<a href="##" data-pet="<%- pet.name %>" class="card-container swiper-slide">' +
        '<div class="card-image">' +
        '<img src="<%- pet.img %>" alt="">' +
        "</div>" +
        '<div class="card-title"><%- pet.name %></div>' +
        '<span class="btn">Learn more</span>' +
        "</a>" +
        "<% }); %>"
    );

    document.getElementById("main-cards-container").innerHTML =
      petsCardsCompiled({ pets: arrOfPets });
    const CARDCONTAINER = document.querySelectorAll(".card-container");

    CARDCONTAINER.forEach(function (element) {
      element.addEventListener("click", () => {
        const pet = pets.find((a) => a.name === element.dataset.pet);

        if (pet) {
          showPopUp(pet);
        }
      });
    });

    swiper.update();
  }

  HAMBURGER.addEventListener("click", function () {
    if (HAMBURGER.classList.contains("is-active")) {
      closeburger();
      console.log(2);
    } else {
      HAMBURGER.classList.add("is-active");
      BURGERSCREAN.classList.add("is-active");
      BODY.classList.add("body-popup");
      SHADOW.classList.add("is-active");
      console.log(1);
    }
  });

  HELPLINK.addEventListener("click", function () {
    closeburger();
  });
  SHADOW.addEventListener("click", function () {
    closeburger();
  });
  CONTACTSLINK.addEventListener("click", function () {
    closeburger();
  });

  document.addEventListener("click", function (event) {
    let target = event.target; // where was the click?

    if (["popup-close", "popup-backdrop"].includes(target.className)) {
      closeModal();
    }
  });

  const swiper = new Swiper(".swiper", {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        grid: {
          rows: 3,
        },
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        grid: {
          rows: 3,
        },
      },
      1279: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        grid: {
          rows: 2,
        },
      },
    },

    allowTouchMove: false,

    pagination: {
      el: ".main-pagination-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="page-link ' + className + '">' + (index + 1) + "</span>"
        );
      },
    },

    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });

  const START = document.getElementById("btn-gostart");
  const PREV = document.getElementById("btn-prev");
  const NEXT = document.getElementById("btn-next");
  const END = document.getElementById("btn-goend");

  swiper.on("slideChange", function (instance) {
    if (instance.isEnd == true) {
      NEXT.classList.add("page-link-disabled");
    } else {
      NEXT.classList.remove("page-link-disabled");
    }
    if (instance.isEnd == true) {
      END.classList.add("page-link-disabled");
    } else {
      END.classList.remove("page-link-disabled");
    }
    if (instance.isBeginning == true) {
      START.classList.add("page-link-disabled");
    } else {
      START.classList.remove("page-link-disabled");
    }
    if (instance.isBeginning == true) {
      PREV.classList.add("page-link-disabled");
    } else {
      PREV.classList.remove("page-link-disabled");
    }
  });

  START.addEventListener("click", () => {
    swiper.slideTo(0);
  });

  END.addEventListener("click", () => {
    swiper.slideTo(999);
  });

  initCarusel();

  window.addEventListener("resize", () => {
    bp = getBreakpoint();
    initCarusel();
    console.log(1);
  });
})();
