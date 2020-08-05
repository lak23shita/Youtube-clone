import React from 'react'
import './styles/Searchpage.css';
import ad1 from './images/ad1.jpg';
import ad2 from './images/ad2.jpg';
import ad3 from './images/ad3.jpg';
import ad4 from './images/ad4.png';
import ad5 from './images/ad5.jpg';
import ad6 from './images/ad6.jpg';
import ad7 from './images/ad7.jpg';
import ad8 from './images/ad8.png';
import ad9 from './images/ad9.jpg';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import un1 from './images/un1.jpg';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneIcon />
              <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow  
             image="https://yt3.ggpht.com/a/AATXAJzoVWFF6F53ih1i5PZTenioA5CC4FR7zqEPjMl1cQ=s48-c-k-c0xffffffff-no-rj-mo"
             channel="TMC Technology Makers Club"
             verified
             subs="40K"
             noofVideos={26}
             description="TMC is a startup sponsored byEgyption Engineers Syndicate.Our program based on teaching"
             />
             <hr />
             <VideoRow
             views="100K"
             subs="40K"
             description="TMC is a startup sponsored byEgyption Engineers Syndicate.Our program based on teaching"
             timestamp="Streamed live on July 25,2020"
             channel="Traversy Media"
             title="TMT | TechFest 2020 | Day 3"
             image={un1}
              />
              <VideoRow
             views="818,976"
             subs="1.2M"
             description="Build an instagram-like photo gallery app with React & Firebase"
             timestamp="Jul 29, 2020"
             channel="Traversy Media"
             title="Build a Photo Gallery With React & Firebase"
             image={ad5}
              />
              <VideoRow
             views="60.6K"
             subs="3.11K"
             description="n this video we will be creating some simple pure CSS spinners or loaders using keyframes. Code: https://codepen.io/bradtraversy/pen/YLNYQE 💖"
             timestamp="Streamed live on July 25,2020"
             channel="Traversy Media"
             title="
             Simple Pure CSS Spinners"
             image={ad3}
              />
              <VideoRow
             views="2.19M"
             subs="45.3K"
             description="In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a CSS cheat sheet that you may also make that with us"
             timestamp="Jul 19, 2017"
             channel="Traversy Media"
             title="Html Crash Course For Absolute Beginners"
             image={ad2}
              />
              <VideoRow
             views="123k"
             subs="40.67K"
             description="In this Git tutorial we will talk about what exactly Git is and we will look at and work with all of the basic and most important..."
             timestamp="July 25,2020"
             channel="Traversy Media"
             title="Git Crash Course"
             image={ad4}
              />
              <VideoRow
             views="166K"
             subs="60.8K"
             description="How To Create A Website Using HTML And CSS Step By Step Website Tutorial.In this videos you will learn to create a website using HTML and CSS in notepad or any text editor,"
             timestamp="July 26,2020"
             channel="Traversy Media"
             title="Web development crash course"
             image={ad1}
              />
              <VideoRow
             views="10.90K"
             subs="40.9K"
             description="In this video we will talk about what Sass is and look at its features as well as create a landing page header to display things like ..."
             timestamp="July 31,2020"
             channel="Traversy Media"
             title="Sass in 7 days"
             image={ad7}
              />
              <VideoRow
             views="8.0K"
             subs="40.9K"
             description="In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the ..."
             timestamp="March 20,2020"
             channel="Traversy Media"
             title="Angular Crash Course"
             image={ad8}
              />
              <VideoRow
             views="106.8K"
             subs="70.9K"
             description="In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the ..."
             timestamp="April 25,2020"
             channel="Traversy Media"
             title="Node Js crash Course"
             image={ad9}
              />
              <VideoRow
             views="68K"
             subs="56.2K"
             description="n this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the ..."
             timestamp="July 25,2017"
             channel="Traversy Media"
             title="Python and Mysql Crash Course"
             image={ad6}
              />
        </div>
    )
}

export default SearchPage
