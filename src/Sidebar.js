import React from 'react'
import './styles/sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SlidebarRow  from './SlidebarRow';

function Sidebar() {
    return (
        <div className = "sidebar">
           <SlidebarRow selected Icon ={HomeIcon} title="Home"/>
           <SlidebarRow Icon ={WhatshotIcon} title="Trending"/>
           <SlidebarRow Icon ={SubscriptionsIcon} title="Subscription" />
           <hr />
           <SlidebarRow Icon ={VideoLibraryIcon} title="Library"/>
           <SlidebarRow Icon ={HistoryIcon}  title="History"/>
           <SlidebarRow  Icon ={OndemandVideoIcon} title="Your videos"/>
           <SlidebarRow Icon ={WatchLaterIcon} title="Watch Later"/>
           <SlidebarRow Icon ={ThumbUpAltIcon} title="Liked videos"/>
           <SlidebarRow Icon ={ExpandMoreIcon} title="Show more"/> 
            <hr />
        
           </div>
    )
}

export default Sidebar
