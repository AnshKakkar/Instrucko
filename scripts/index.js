// for thank you page
const renderIframe = (url1, url2) => {
  return `<iframe
            src=${url1}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src=${url2}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
};

const renderEachIframe = (url) => {
  return `<iframe
            src=${url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
};

let videoUrls;

let newVideoContainerScroll = [
  "https://www.youtube.com/embed/gVWWPSjQDlk",
  "https://www.youtube.com/embed/KkfBWkcnwVU",
  "https://www.youtube.com/embed/Mi2v5GYeTHI",
  "https://www.youtube.com/embed/x4CIKySbB7A",
  "https://www.youtube.com/embed/WCN2Ihs2PEA",
  "https://www.youtube.com/embed/G9rvXZpjQJc",
];

if (window.innerWidth < 430) {
  videoUrls = [
    [
      "https://www.youtube.com/embed/gVWWPSjQDlk",
      "https://www.youtube.com/embed/KkfBWkcnwVU",
    ],
    [
      "https://www.youtube.com/embed/Mi2v5GYeTHI",
      "https://www.youtube.com/embed/x4CIKySbB7A",
    ],
    [
      "https://www.youtube.com/embed/WCN2Ihs2PEA",
      "https://www.youtube.com/embed/G9rvXZpjQJc",
    ],
  ];
} else {
  videoUrls = [
    [
      "https://www.youtube.com/embed/Mi2v5GYeTHI",
      "https://www.youtube.com/embed/x4CIKySbB7A",
    ],
    [
      "https://www.youtube.com/embed/WCN2Ihs2PEA",
      "https://www.youtube.com/embed/G9rvXZpjQJc",
    ],
    [
      "https://www.youtube.com/embed/gVWWPSjQDlk",
      "https://www.youtube.com/embed/KkfBWkcnwVU",
    ],
  ];
}
// ---------------

// for courses page
const renderCourseCard = ({ url, title }) => {
  return `<img class="tick_add"
            src="./assets/Tick/Tick-green.svg"
            alt="tick"
          />
          <img
            src=${url}
            alt="student photos"
          />
          <p class="course-title">${title}</p>`;

  // return `<img
  //   src=${url}
  //   alt="student photos"
  // />
  // <div class="course-card-content">
  //   <div class="course-triangle"></div>
  //   <div class="content-course">
  //     <p>${title}</p>
  //     <p>Listening, Speaking.</p>
  //     <p>Reading and Writing</p>
  //     <p>Skills (LSRW Skills</p>
  //   </div>
  // </div>`;
};

const isCourseSelected = (e) => {
  // // for single selection
  // let allCourseCards = document.getElementsByClassName("course-card");
  // // for removing
  // for (let index = 0; index < allCourseCards.length; index++) {
  //   if (allCourseCards[index].classList.contains("course-card-selected")) {
  //     allCourseCards[index].classList.remove("course-card-selected");
  //   }
  // }
  // // for adding
  // for (let index = 0; index < allCourseCards.length; index++) {
  //   if (allCourseCards[index].id === e.target.id) {
  //     allCourseCards[index].classList.add("course-card-selected");
  //   }
  // }
  // // -------------

  // for multiple selection

  if (e.target.classList.contains("course-card-selected")) {
    e.target.classList.remove("course-card-selected");
    e.target.firstChild.style.display = "none";
  } else {
    e.target.classList.add("course-card-selected");
    e.target.firstChild.style.display = "block";
  }
};
// on clicking submit button
let selectedItemsData = [];
const submitCourses = (e) => {
  selectedItemsData = [];
  let allCourseCards = document.getElementsByClassName("course-card");
  for (let index = 0; index < allCourseCards.length; index++) {
    if (allCourseCards[index].classList.contains("course-card-selected")) {
      selectedItemsData.push(allCourseCards[index]);
    }
  }
  // alert(`you have slected item Id: ${selectedItemsData[0].id}`);
  console.log(selectedItemsData);
};
// -----------

// landing page
const renderInstruckoUnique = (image, text, alt) => {
  return `<img src=${image} alt=${alt} />
            <p>
              ${text}
            </p>`;
};

const renderReviewContainer = (image, review, name) => {
  return `<p>
             ${review}
          </p>
          <p>${name}</p>
          <img src=${image} alt=${name} />`;
};

const isAgeSelected = (e) => {
  // for single selection
  let allAgeCards = document.getElementsByClassName("child-age-box");
  // for removing
  for (let index = 0; index < allAgeCards.length; index++) {
    if (allAgeCards[index].classList.contains("child-age-box-active")) {
      allAgeCards[index].classList.remove("child-age-box-active");
    }
  }
  // for adding
  for (let index = 0; index < allAgeCards.length; index++) {
    if (allAgeCards[index].id === e.target.id) {
      allAgeCards[index].classList.add("child-age-box-active");
    }
  }
  console.log(e.target.id);
};

// ---------

// render iframe tags carousel
let currentUrl = "";

const renderCarouselIframe = (url, type) => {
  if (!document.getElementsByClassName("carousel")[0]) return;
  let carouselDiv = document.getElementsByClassName("carousel")[0];
  let currentIndex = newVideoContainerScroll.indexOf(url);
  if (type === "right") {
    if (currentIndex === newVideoContainerScroll.length - 1) {
      currentUrl = newVideoContainerScroll[0];
      carouselDiv.innerHTML = renderEachIframe(currentUrl);
    } else {
      currentUrl = newVideoContainerScroll[currentIndex + 1];
      carouselDiv.innerHTML = renderEachIframe(currentUrl);
    }
  } else if (type === "left") {
    if (currentIndex === 0) {
      currentUrl = newVideoContainerScroll[newVideoContainerScroll.length - 1];
      carouselDiv.innerHTML = renderEachIframe(currentUrl);
    } else {
      currentUrl = newVideoContainerScroll[currentIndex - 1];
      carouselDiv.innerHTML = renderEachIframe(currentUrl);
    }
  } else {
    currentUrl = newVideoContainerScroll[0];
    carouselDiv.innerHTML = renderEachIframe(currentUrl);
  }
};

const rigthSwipe = (e) => {
  e.classList.add("carousel-btn-pressed");
  renderCarouselIframe(currentUrl, "right");
  setTimeout(() => {
    e.classList.remove("carousel-btn-pressed");
  }, 200);
};

const leftSwipe = (e) => {
  e.classList.add("carousel-btn-pressed");
  renderCarouselIframe(currentUrl, "left");
  setTimeout(() => {
    e.classList.remove("carousel-btn-pressed");
  }, 200);
};

window.addEventListener("load", (event) => {
  // -------phone number
  setTimeout(() => {
    let input = document.querySelector("#phone"),
      errorMsg = document.querySelector("#error-msg"),
      validMsg = document.querySelector("#valid-msg");

    // here, the index maps to the error code returned from getValidationError - see readme
    let errorMap = [
      "Invalid number",
      "Invalid country code",
      "Too short",
      "Too long",
      "Invalid number",
    ];

    // initialise plugin
    let iti = window.intlTelInput(input, {
      initialCountry: "in",
      utilsScript: "../../build/js/utils.js?1638200991544",
    });

    let reset = function () {
      input.classList.remove("error");
      errorMsg.innerHTML = "";
      errorMsg.classList.add("hide");
      validMsg.classList.add("hide");
    };

    // on blur: validate
    input.addEventListener("blur", function () {
      reset();
      if (input.value.trim()) {
        if (iti.isValidNumber()) {
          validMsg.classList.remove("hide");
        } else {
          input.classList.add("error");
          var errorCode = iti.getValidationError();
          errorMsg.innerHTML = errorMap[errorCode];
          errorMsg.classList.remove("hide");
        }
      }
    });

    // on keyup / change flag: reset
    input.addEventListener("change", reset);
    input.addEventListener("keyup", reset);
  }, 100);
  // --------- phone number ---------

  renderCarouselIframe();
  //   random elements
  // setTimeout(() => {
  //   $(".randomnumber").each(function () {
  //     let pageHeight = document.body.scrollHeight;
  //     let randomtop = Math.floor(Math.random() * pageHeight - 250);
  //     let randomleft = Math.floor(Math.random() * window.innerWidth - 150);
  //     $(this).css({
  //       "margin-top": randomtop,
  //       "margin-left": randomleft,
  //       "z-index": "-11111",
  //     });
  //   });
  // }, 1000);
  // ------

  // -------contact us form
  if (document.getElementsByClassName("contact-us-from")[0]) {
    document
      .getElementsByClassName("contact-us-from")[0]
      .addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = `${window.location.origin}/courses.html`;
      });
  }
  if (document.getElementsByClassName("video1-iframe").length !== 0) {
    // ---------

    if (window.innerWidth < 430) {
      let element = document.getElementsByClassName("render-iframe-mobile")[0];
      let div = document.createElement("div");
      for (let i = 0; i < newVideoContainerScroll.length; i++) {
        let innerDiv = document.createElement("div");
        let data = renderEachIframe(newVideoContainerScroll[i]);
        innerDiv.innerHTML = data;
        div.append(innerDiv);
      }
      element.appendChild(div);
    } else {
      let renderArr = [
        document.getElementsByClassName("video1-iframe"),
        document.getElementsByClassName("video2-iframe"),
        document.getElementsByClassName("video3-iframe"),
      ];
      renderArr.map((item, index) => {
        item[0].innerHTML = renderIframe(
          videoUrls[index][0],
          videoUrls[index][1]
        );
      });
    }
  }
  // ------
  if (document.getElementsByClassName("courses-heading").length !== 0) {
    let allEleArr = [
      {
        element: document.getElementsByClassName("course-1")[0],
        count: [
          {
            img: "./assets/Courses/english.png",
            p1: "English",
            p2: "",
            p3: "",
          },
          {
            img: "./assets/Courses/maths.png",
            p1: "Mathematics",
            p2: "",
            p3: "",
          },
        ],
      },
      {
        element: document.getElementsByClassName("course-2")[0],
        count: [
          {
            img: "./assets/Courses/public-speaking.jpg",
            p1: "Public Speaking",
            p2: "",
            p3: "",
          },
          {
            img: "./assets/Courses/creative-writing.jpg",
            p1: "Creative Writing",
            p2: "",
            p3: "",
          },
          // {
          //   img: "./assets/Courses/leadership.jpg",
          //   p1: "Leadership",
          //   p2: "",
          //   p3: "",
          // },
        ],
      },
      {
        element: document.getElementsByClassName("course-3")[0],
        count: [
          {
            img: "./assets/Courses/etiquette.jpg",
            p1: "Etiquette Training",
            p2: "",
            p3: "",
          },
          {
            img: "./assets/Courses/sustainabilty.jpg",
            p1: "Sustainability",
            p2: "",
            p3: "",
          },
        ],
      },
      {
        element: document.getElementsByClassName("course-4")[0],
        count: [
          {
            img: "./assets/Courses/french.jpg",
            p1: "French",
            p2: "",
            p3: "",
          },
          {
            img: "./assets/Courses/spanish.jpg",
            p1: "Spanish",
            p2: "",
            p3: "",
          },
          { img: "./assets/Courses/german.jpg", p1: "German", p2: "", p3: "" },
        ],
      },
      {
        element: document.getElementsByClassName("course-5")[0],
        count: [
          {
            img: "./assets/Courses/mandarin.jpg",
            p1: "Mandarin",
            p2: "",
            p3: "",
          },
          { img: "./assets/Courses/hindi.jpg", p1: "Hindi", p2: "", p3: "" },
        ],
      },
    ];

    allEleArr.map((item) => {
      item.count.map((data) => {
        let div = document.createElement("div");
        div.classList.add("course-card");
        div.id = `${Math.random()}`;
        div.innerHTML = renderCourseCard({ url: data.img, title: data.p1 });
        div.addEventListener("click", isCourseSelected, false);
        item.element.appendChild(div);
      });
    });
  }
  if (document.getElementsByClassName("instrucko-unique-container")) {
    // rendering instrucko unique section
    let textLogo = [
      {
        img: "./assets/landingAsset/1.svg",
        text: "15,000+ Unique Lesson Plans",
        alt: "Image 1",
      },
      {
        img: "./assets/landingAsset/2.svg",
        text: "1,500+ Teachers certified by University of Cambridge",
        alt: "Image 2",
      },
      {
        img: "./assets/landingAsset/3.svg",
        text: "3,00,000+ Story based visual and gamified activities",
        alt: "Image 3",
      },
      {
        img: "./assets/landingAsset/4.svg",
        text: "20,000+ Students Worldwide",
        alt: "Image 4",
      },
    ];
    let renderInstruckoUniqueElement = document.getElementsByClassName(
      "instrucko-unique-container"
    )[0];
    textLogo.map((item) => {
      let div = document.createElement("div");
      div.innerHTML = renderInstruckoUnique(item.img, item.text, item.alt);
      renderInstruckoUniqueElement.append(div);
    });

    // rendering reviews
    let reviews = [
      {
        img: "./assets/landingAsset/image1.svg",
        text: `<strong>instrucko</strong> has created a beautiful bond between the teacher and my son. Their instruckos are warm, talented and focused on disseminating high quality education. Wish instrucko to grow to heights.`,
        name: `Sandhya Raju`,
      },
      {
        img: "./assets/landingAsset/image3.svg",
        text: `I went through the program, and I did feel that it was up to the
              mark. My son is able to frame his answer better.`,
        name: "Rashi Dixit",
      },
      {
        img: "./assets/landingAsset/image2.svg",
        text: `<strong>instrucko</strong>'s teachers are excellent at delivering
              fun, engaging lessons. My daughter is always so excited for her
              class and the storytelling techniques help her build reading &
              comprehension skills.`,
        name: "Jasmine Pestonji",
      },
    ];
    let renderReviewsElement =
      document.getElementsByClassName("reviews-container")[0];
    reviews.map((item) => {
      let div = document.createElement("div");
      div.innerHTML = renderReviewContainer(item.img, item.text, item.name);
      renderReviewsElement.append(div);
    });

    // form age boxes logic
    let boxes = document.getElementsByClassName("child-age-box");
    for (let k = 0; k < boxes.length; k++) {
      boxes[k].id = `${Math.random()}`;
      boxes[k].addEventListener("click", isAgeSelected, false);
    }
  }
});
