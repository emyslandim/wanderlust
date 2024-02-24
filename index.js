(() => {
  const slideImages = [
    {
      img: "assets/slide-1.jpg",
      title: "Sydney",
      description:
        "Sydney, Australia's largest city, is famous for its stunning harbor, iconic Opera House, and bustling city life. Explore its beautiful beaches, vibrant cultural scene, and diverse culinary experiences.",
    },
    {
      img: "assets/slide-2.jpg",
      title: "Amsterdam",
      description:
        "Amsterdam, the capital of the Netherlands, is known for its picturesque canals, historic architecture, and vibrant cultural scene. Explore its museums, charming streets, and world-renowned tulip gardens.",
    },
    {
      img: "assets/slide-3.jpg",
      title: "Verona",
      description:
        "Verona, located in northern Italy's Veneto region, is famous for its well-preserved ancient Roman structures, including the Arena di Verona and Juliet's House. Explore its romantic atmosphere, rich history, and delicious cuisine.",
    },
    {
      img: "assets/slide-4.jpg",
      title: "New York",
      description:
        "New York City, often called the 'Big Apple,' is a global metropolis known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty. Explore its diverse neighborhoods, world-class museums, and vibrant nightlife.",
    },
    {
      img: "assets/slide-5.jpg",
      title: "Tokyo",
      description:
        "Tokyo, the capital of Japan, is a bustling metropolis known for its futuristic skyline, historic temples, and vibrant pop culture. Explore its bustling streets, traditional tea houses, and Michelin-starred restaurants.",
    },
    {
      img: "assets/slide-6.jpg",
      title: "Paris",
      description:
        "Paris, the 'City of Light,' is renowned for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Explore its charming neighborhoods, world-class art scene, and exquisite cuisine.",
    },
  ];

  // Initialization
  createHtmlStructure(".carousel", slideImages);
})();

function createHtmlStructure(carouselSelector, images) {
  const parent = document.querySelector(carouselSelector, images);

  // create slides
  images.forEach((slideImg, index) => {
    const { img, title, description } = slideImg;
    const slideItem = `
      <div
        class="slide"
        style="background-image: url('${img}');"
        data-attribute="${index}"
      >
        <div class="content">
          <div class="name">${title}</div>
          <div class="description">${description}</div>
        </div>
      </div>
      `;
    const divFragment = document
      .createRange()
      .createContextualFragment(slideItem);
    parent.appendChild(divFragment);
  });

  // create buttons
  const html = `
    <div class="buttons">
      <button onclick="Prev()"> Prev</button>
      <button onclick="Next()"> Next</button>
    </div>
    `;
  const fragment = document.createRange().createContextualFragment(html);
  parent.parentElement.appendChild(fragment);
}


// onClick buttons Next and Prev
function Next() {
  const carousel = document.querySelector(".carousel");

  const items = document.querySelectorAll(".slide");
  carousel.appendChild(items[0]);
}

function Prev() {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".slide");
  carousel.prepend(items[items.length - 1]);
}
