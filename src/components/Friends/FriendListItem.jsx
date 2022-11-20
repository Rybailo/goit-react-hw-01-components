import css from '../Friends/Friends.css';
import PropTypes from 'prop-types';
import { BsFillCircleFill } from "react-icons/bs";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className="FriendListItem">
   
      {isOnline ? (< BsFillCircleFill color='green'/> ) : ((< BsFillCircleFill color='red'/>))}
      <img className="FriendAvatar" src={avatar} alt="User avatar" width="48" />
      <p className="FriendName">{name}</p>
    </div>
  );
};
