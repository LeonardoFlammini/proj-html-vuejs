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
  ]
});