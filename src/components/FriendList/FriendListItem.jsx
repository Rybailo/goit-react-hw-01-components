import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineStatus = isOnline ? css.online : css.offline;
  return (
    <li key={name} className={css.item}>
      <span className={isOnlineStatus}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
