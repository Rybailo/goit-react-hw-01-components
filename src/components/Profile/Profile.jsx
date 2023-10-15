import './Profile.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <div className="statsItem">
              <span className="labelProf">Followers</span>
              <span className="quantity">{stats.followers}</span>
            </div>
          </li>
          <li>
            <div className="statsItem">
              <span className="labelProf">Views</span>
              <span className="quantity">{stats.views}</span>
            </div>
          </li>
          <li>
            <div className="statsItem">
              <span className="labelProf">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
