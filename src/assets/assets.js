// ✅ Import logos & icons from src/assets
import logo from './logos/logo.svg';
import logo_dark from './logos/logo_dark.svg';
import menu_icon from './icons/menu_icon.svg';
import star_icon from './icons/star_icon.svg';
import cross_icon from './icons/cross_icon.svg';
import left_arrow from './icons/left_arrow.svg';
import right_arrow from './icons/right_arrow.svg';

// ✅ Import images from src/assets/images
import brand_img from './images/brand_img.png';
import project_img_1 from './images/project_img_1.jpg';
import project_img_2 from './images/project_img_2.jpg';
import project_img_3 from './images/project_img_3.jpg';
import project_img_4 from './images/project_img_4.jpg';
import project_img_5 from './images/project_img_5.jpg';
import project_img_6 from './images/project_img_6.jpg';
import contact_img from './images/contactbg.jpg';
import contactus_img from './images/contact.jpg';

// ✅ Import profile images from src/assets/profiles
import profile_img_1 from './profiles/profile_img_1.png';
import profile_img_2 from './profiles/profile_img_2.png';
import profile_img_3 from './profiles/profile_img_3.png';

// ✅ For header_img, which is in public, use a direct path.
const header_img = "/header_img.png";

const assets = {
  logo,
  logo_dark,
  menu_icon,
  star_icon,
  cross_icon,
  left_arrow,
  right_arrow,
  images: {
    header_img, // from public
    brand_img,  // imported from src/assets/images
    contact_img,
    contactus_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    project_img_5,
    project_img_6,
  },
  profiles: {
    profile_img_1,
    profile_img_2,
    profile_img_3,
  },
};

export { assets };

// ✅ Projects Data (No Changes)
export const projectsData = [
    { title: "Skyline Haven", price: "$2,50,000", location: "California", image: project_img_1 },
    { title: "Vista Verde", price: "$2,50,000", location: "San Francisco", image: project_img_2 },
    { title: "Serenity Suites", price: "$2,50,000", location: "Chicago", image: project_img_3 },
    { title: "Central Square", price: "$2,50,000", location: "Los Angeles", image: project_img_4 },
    { title: "Vista Verde", price: "$2,50,000", location: "San Francisco", image: project_img_5 },
    { title: "Serenity Suites", price: "$2,50,000", location: "Chicago", image: project_img_6 },
];

// ✅ Testimonials Data (No Changes)
export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

export const stats = [
  { number: "100+", text: "Projects Completed" },
  { number: "50+", text: "Years of Experience" },
  { number: "20+", text: "Mn. Sq. Ft. Delivered" },
  { number: "10+", text: "Ongoing Projects" },
];


// import logo from './logo.svg'
// import logo_dark from './logo_dark.svg'
// import cross_icon from './cross_icon.svg'
// import menu_icon from './menu_icon.svg'
// import star_icon from './star_icon.svg'
// import left_arrow from './left_arrow.svg'
// import right_arrow from './right_arrow.svg'
// import header_img from './header_img.png'
// import brand_img from './brand_img.png'
// import project_img_1 from './project_img_1.jpg'
// import project_img_2 from './project_img_2.jpg'
// import project_img_3 from './project_img_3.jpg'
// import project_img_4 from './project_img_4.jpg'
// import project_img_5 from './project_img_5.jpg'
// import project_img_6 from './project_img_6.jpg'
// import profile_img_1 from './profile_img_1.png'
// import profile_img_2 from './profile_img_2.png'
// import profile_img_3 from './profile_img_3.png'

// export const assets = {
//     logo,
//     logo_dark,
//     cross_icon,
//     menu_icon,
//     star_icon,
//     header_img,
//     brand_img,
//     project_img_1,
//     project_img_2,
//     project_img_3,
//     project_img_4,
//     left_arrow,
//     right_arrow,
// }

// export const projectsData = [
//     {
//       title: "Skyline Haven",
//       price: "$2,50,000",
//       location: "California",
//       image: project_img_1
//     },
//     {
//       title: "Vista Verde",
//       price: "$2,50,000",
//       location: "San Francisco",
//       image: project_img_2
//     },
//     {
//       title: "Serenity Suites",
//       price: "$2,50,000",
//       location: "Chicago",
//       image: project_img_3
//     },
//     {
//       title: "Central Square",
//       price: "$2,50,000",
//       location: "Los Angeles",
//       image: project_img_4
//     },
//     {
//       title: "Vista Verde",
//       price: "$2,50,000",
//       location: "San Francisco",
//       image: project_img_5
//     },
//     {
//       title: "Serenity Suites",
//       price: "$2,50,000",
//       location: "Chicago",
//       image: project_img_6
//     },
    
//   ];

//   export const testimonialsData = [
//     {
//         name: "Donald Jackman",
//         title: "Marketing Manager",
//         image: profile_img_1,
//         alt: "Portrait of Donald Jackman",
//         rating: 5,
//         text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
//     },
//     {
//         name: "Richard Nelson",
//         title: "UI/UX Designer",
//         image: profile_img_2,
//         alt: "Portrait of Richard Nelson",
//         rating: 4,
//         text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
//     },
//     {
//         name: "James Washington",
//         title: "Co-Founder",
//         image: profile_img_3,
//         alt: "Portrait of James Washington",
//         rating: 5,
//         text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
//     }
// ];