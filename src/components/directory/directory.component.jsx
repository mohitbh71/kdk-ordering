import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "main course",
          imageUrl:
            "https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg",
          id: 1,
          linkUrl: 'mainCourse'
        },
        {
          title: "starters",
          imageUrl:
            "https://i.ytimg.com/vi/EpR4Ie0DR3I/maxresdefault.jpg",
          id: 2,
          linkUrl: ''
        },
        {
          title: "beaverages",
          imageUrl:
            "https://www.madhurasrecipe.com/media/Egg-Kheema-1.jpg",
          id: 3,
          linkUrl: ""
        },
        {
          title: "desi breads",
          imageUrl:
            "https://www.bonappetour.com/assets/images/asset_pictures/1438828773-5599539.jpeg",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "chinese Tastes",
          imageUrl:
            "https://induspizza.com/wp-content/uploads/2017/11/chicken_popcorn.jpg",
          size: "large",
          id: 5,
          linkUrl: ""
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
