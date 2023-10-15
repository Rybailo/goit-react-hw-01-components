import user from '../components/Data/user.json';
import { Profile } from '../components/Profile/Profile';

import data from '../components/Data/data.json';
import { Statistics } from '../components/Statistics/Statistics';

import friends from '../components/Data/friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
