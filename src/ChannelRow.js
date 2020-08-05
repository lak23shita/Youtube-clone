import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './styles/ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image,channel,subs,noofVideos,description,verified}) {

    return (
        <div className="channelRow">
        <Avatar className="channelRow__logo" alt={channel} src={image} />
          <div className="channelRow__text">
          <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />} </h4>
          <p>{subs}  subscribers • {noofVideos} videos</p>
          <p>{description}</p>
          </div>
        </div>
    )
}

export default ChannelRow
