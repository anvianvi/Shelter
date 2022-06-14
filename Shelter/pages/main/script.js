// img: '../../assets/images/pets-ourPets//pets-jennifer.svg',

(function () {
  const HAMBURGER = document.querySelector("#hamburger");
  const BURGERSCREAN = document.querySelector("#burger-screan");
  const HELPLINK = document.querySelector("#help-link");
  const CONTACTSLINK = document.querySelector("#contacts-link");
  const BODY = document.querySelector(".body");
  const SHADOW = document.querySelector("#shadow");

  const petsCartTemplate = _.template(
    `<div class="card-image" data-pet="<%- name %>">
      <img src="<%- img %>" alt="">
    </div>
    <div class="card-title"><%- name %></div>
    <span class="btn">Learn more</span>`
  );

  function shuffle(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  const BREAKPOINTS = {
    XS: "mobile",
    L: "tablet",
    XL: "desktop",
  };
  function getBreakpoint() {
    let breakpoint = BREAKPOINTS.XL;
    if (window.screen.width < 767) {
      breakpoint = BREAKPOINTS.XS;
    } else if (window.screen.width < 1279) {
      breakpoint = BREAKPOINTS.L;
    }

    return breakpoint;
  }

  function closeburger() {
    HAMBURGER.classList.remove("is-active");
    BURGERSCREAN.classList.remove("is-active");
    BODY.classList.remove("body-popup");
    SHADOW.classList.remove("is-active");
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

  const petsCardsCompiled = _.template(
    "<% _.forEach(pets, function(pet) { %>" +
      '<a href="##" class="card-container swiper-slide">' +
      '<div class="card-image" data-pet="<%- pet.name %>">' +
      '<img src="<%- pet.img %>" alt="">' +
      "</div>" +
      '<div class="card-title"><%- pet.name %></div>' +
      '<span class="btn">Learn more</span>' +
      "</a>" +
      "<% }); %>"
  );

  document.getElementById("pets-cards").innerHTML = petsCardsCompiled({
    pets: [...pets, ...pets, ...pets],
  });

  const POPUP = document.querySelector(".popup");
  const createpopup = document.querySelector(".popup-content-container");

  function closeModal() {
    POPUP.classList.add("popup-hide");
    BODY.classList.remove("body-popup");
    POPUP.classList.remove("popup-active");
  }

  document.addEventListener("click", function (event) {
    let target = event.target;

    if (["popup-close", "popup-backdrop"].includes(target.className)) {
      closeModal();
    }
  });

  document.addEventListener("click", function (event) {
    const parent = event.path.find(
      (el) => el.className && el.className.includes("card-container")
    );

    if (!parent) {
      return;
    }

    const pet = pets.find((p) => p.name === parent.firstChild.dataset.pet);

    const popupCompiled = _.template(
      `<div class="popup-img">
        <img src="<%- img %>" alt="" class="popup-img">
      </div>
      <div class="popup-info">
        <div class="popup-name"><%- name %></div>
        <div class="popup-type-breed"><%- type %> - <%- breed %></div>
        <div class="popup-description"><%- description %></div>
        <div class="popup-li"><span><strong>Age: </strong><%- age %></span></div>
        <div class="popup-li"><span><strong>Inoculations: </strong><%- inoculations %></span></div>
        <div class="popup-li"><span><strong>Diseases: </strong><%- diseases %></span></div>
        <div class="popup-li"><span><strong>Parasites: </strong><%- parasites %></span></div>
      </div>`
    );

    createpopup.innerHTML = popupCompiled(pet);

    POPUP.classList.remove("popup-hide");
    BODY.classList.add("body-popup");
    POPUP.classList.add("popup-active");
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      1279: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
      },
    },

    loop: true,
    allowTouchMove: false,

    // Navigation arrows
    navigation: {
      nextEl: ".slider-btn-next",
      prevEl: ".slider-btn-prev",
    },
  });

  swiper.on("slideChangeTransitionEnd", function (instance) {
    let activeItemIndex = null;
    const bp = getBreakpoint();
    const newPets = shuffle(pets);

    instance.slides.forEach((element, index) => {
      if (element.classList.contains("swiper-slide-active")) {
        activeItemIndex = index;
      }
    });

    if (instance.slides[activeItemIndex - 1]) {
      instance.slides[activeItemIndex - 1].innerHTML = petsCartTemplate(newPets[0]);
    }
    
    if (bp === BREAKPOINTS.XS && instance.slides[activeItemIndex + 1]) {
      instance.slides[activeItemIndex + 1].innerHTML = petsCartTemplate(newPets[1]);
    }

    if (bp === BREAKPOINTS.L) {
      if (
        instance.slides[activeItemIndex - 2]
      ) {
        instance.slides[activeItemIndex - 2].innerHTML = petsCartTemplate(
          newPets[2]
        );
      }

      if (instance.slides[activeItemIndex + 2]) {
        instance.slides[activeItemIndex + 2].innerHTML = petsCartTemplate(
          newPets[3]
        );
      }

      if (instance.slides[activeItemIndex + 3]) {
        instance.slides[activeItemIndex + 3].innerHTML = petsCartTemplate(
          newPets[4]
        );
      }
    }

    if (bp === BREAKPOINTS.XL) {

      if (
        instance.slides[activeItemIndex - 2]
      ) {
        instance.slides[activeItemIndex - 2].innerHTML = petsCartTemplate(
          newPets[4]
        );
      }

      if (
        instance.slides[activeItemIndex - 3]
      ) {
        instance.slides[activeItemIndex - 3].innerHTML = petsCartTemplate(
          newPets[1]
        );
      }

      if (instance.slides[activeItemIndex + 3]) {
        
        instance.slides[activeItemIndex + 3].innerHTML = petsCartTemplate(
          newPets[1]
        );
      }

      if (instance.slides[activeItemIndex + 4]) {
        
        instance.slides[activeItemIndex + 4].innerHTML = petsCartTemplate(
          newPets[2]
        );
      } else {
        instance.slides[0].innerHTML = petsCartTemplate(
          newPets[2]
        );
      }

      if (instance.slides[activeItemIndex + 5]) {
        
        instance.slides[activeItemIndex + 5].innerHTML = petsCartTemplate(
          newPets[3]
        );
      } else {
        instance.slides[1].innerHTML = petsCartTemplate(
          newPets[3]
        );
      }
    }
    
  });
})();
