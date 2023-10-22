import {reactive} from "vue";

export const store = reactive({
  menuHeader: [
    "Home",
    "Pages",
    "Courses",
    "Features",
    "blog",
    "shop"
  ],
  cardsArray: [
    {
      id: 1,
      src: "course-02-480x298.jpg",
      price: {
        isFree: false,
        units: "40",
        decimals: "00",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 20,
      students: 50
    },
    {
      id: 2,
      src: "course-featured-image-01-480x298.jpg",
      price: {
        isFree: true,
        units: "",
        decimals: "",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 24,
      students: 769
    },
    {
      id: 3,
      src: "stock-full-hd-03-480x298.jpg",
      price: {
        isFree: false,
        units: "19",
        decimals: "00",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 17,
      students: 62
    },
    {
      id: 4,
      src: "stock-full-hd-04-480x298.jpg",
      price: {
        isFree: false,
        units: "26",
        decimals: "00",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 14,
      students: 62
    },
    {
      id: 5,
      src: "stock-full-hd-05-480x298.jpg",
      price: {
        isFree: false,
        units: "39",
        decimals: "00",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 6,
      students: 51
    },
    {
      id: 6,
      src: "stock-full-hd-06-480x298.jpg",
      price: {
        isFree: false,
        units: "59",
        decimals: "00",
      },
      text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
      lessons: 14,
      students: 72
    },
  ],
  featuresArray: [
    {
      src:"home-2-image-box-01.png",
      title: "customize preferences",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "start here"
    },
    {
      src:"about-us-02-image-box-02.png",
      title: "Cloud storage",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "get free quote"
    },
    {
      src:"home-2-image-box-03.png",
      title: "multimedia channels",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "start now"
    },
  ]
});