import { Link } from "react-router-dom";

export const artworksdata = [
  {
    title: "Wildflower Series",
    brief_info: "Graphics Communication Capstone Project",
    image: (
      <Link to="/wildflowerseries" className="to_wildflower_series">
        <img
          src="https://res.cloudinary.com/jadyhome/image/upload/v1634760620/portfolio/wildflower%20series/wildflower-cover.png"
          alt="wildflower-cover"
          className="art-image"
        />
      </Link>
    ),
  },
  {
    title: "Feeling Colors",
    brief_info: "New Media Arts Capstone Project",
    image: (
      <Link to="/colorsproject" className="to_colors_proj">
        <img
          src="https://res.cloudinary.com/jadyhome/image/upload/v1634847501/portfolio/colorcover.png"
          alt="colors-cover"
          className="art-image"
        />
      </Link>
    ),
  },
  // {
  //   title: "Flower Series",
  //   brief_info: "A series of botanical illustrations done in Procreate.",
  //   image: (
  //     <Link to="/flowerseries" className="to_flower_series">
  //       <img
  //         src="https://res.cloudinary.com/jadyhome/image/upload/v1633118767/portfolio/flower%20series/flower%20series_cover.jpg"
  //         alt="flower-cover"
  //         className="art-image"
  //       />
  //     </Link>
  //   ),
  // },
  // {
  //   title: "What's In My Bag Series",
  //   brief_info:
  //     "A series of illustrations I did for my friends as gifts, drawing from the prompt of ' what's in my bag? '.",
  //   image: (
  //     <Link to="/whatsinmybagseries" className="to_wimb_series">
  //       <img
  //         src="https://res.cloudinary.com/jadyhome/image/upload/v1633127842/portfolio/whats%20in%20my%20bag/cover_vkgivm.jpg"
  //         alt="wimb-cover"
  //         className="art-image"
  //       />
  //     </Link>
  //   ),
  // },
];
