import user from '../user.json';
import { Profile } from '../components/Profile/Profile';

export const App = () => {
  return (
    <div style={{}}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
