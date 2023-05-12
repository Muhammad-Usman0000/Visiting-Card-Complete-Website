function changeImg(){
    var img = document.getElementById("image");
    img.src = "./image/background1.webp" ;
}

function changeImgcd(){
    var img = document.getElementById("image");
    img.src = "./image/background2.webp";
}

function changeImgsim(){
    var img = document.getElementById("image");
    img.src = "./image/background3.webp";
}

// ........ SLIDER LOGIC ..............

var splide = new Splide(".splide", {
    type: "loop",
    perPage: 5,
    rewind: true,
    breakpoints: {
      640: {
        perPage: 3,
        gap: ".7rem",
        height: "12rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        height: "12rem",
      },
    },
  });
  splide.mount();