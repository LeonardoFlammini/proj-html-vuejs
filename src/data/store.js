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
      id:1,
      src:"home-2-image-box-01.png",
      title: "customize preferences",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "start here"
    },
    {
      id:2,
      src:"about-us-02-image-box-02.png",
      title: "Cloud storage",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "get free quote"
    },
    {
      id:3,
      src:"home-2-image-box-03.png",
      title: "multimedia channels",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam architecto quas eos qui rem reprehenderit. Ipsa, corrupti unde molestiae iste soluta nulla temporibus iusto quidem eligendi explicabo beatae quae!",
      aText: "start now"
    },
  ],
  achievements:[
    {
      id: 1,
      title: "successfully trained",
      data: 1790,
      achievement: "enrolled learners"
    },
    {
      id: 2,
      title: "proudly received",
      data: 19,
      achievement: "countrywide awards"
    },
    {
      id: 3,
      title: "firmly established",
      data: 24,
      achievement: "local branches"
    },
    {
      id: 4,
      title: "getting featured on",
      data: 1090,
      achievement: "blog posts"
    }
  ],
  mostViewed:[
    {
      id:1,
      src: 'artist-blog-03-480x352.jpeg',
      title: "brush strokes energize trees in paintings",
      genre: 'artist',
      date: 'May 15, 2020',
      views: 688
    },
    {
      id:1,
      src: 'artist-blog-01-480x352.jpg',
      title: "pocket sized notebooks hold miniature paintings",
      genre: 'artist',
      date: 'May 15, 2020',
      views: 603
    },
  ],
  learners:[
    {
      id:1,
      name: "Mina Hollace",
      src: "testimonial-avata-01.jpg",
      role: "freelancer",
      text: 'gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue',
      course: 'tortor vitae purus faucibus ornare suspendisse sed nisi'
    },
    {
      id:2,
      name: "Mina Hollace",
      src: "testimonial-avata-03.jpg",
      role: "freelancer",
      text: 'gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue',
      course: 'tortor vitae purus faucibus ornare suspendisse sed nisi'
    },
    {
      id:3,
      name: "Mina Hollace",
      src: "testimonial-avata-02.jpg",
      role: "freelancer",
      text: 'gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue',
      course: 'tortor vitae purus faucibus ornare suspendisse sed nisi'
    },
  ],
  footerMenus:[
    {
      id:1,
      title: "explore",
      voices:[
        'start here',
        'blog',
        'about us'
      ]
    },
    {
      id:2,
      title: "",
      voices:[
        'success story',
        'courses',
        'contact us'
      ]
    },
    {
      id:3,
      title: "information",
      voices:[
        'membership',
        'purchase',
        'about us',
        'voices'
      ]
    },
  ]
});