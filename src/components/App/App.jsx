import user from 'user.json';
import { Profile } from '../Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

import transactions from 'transactions.json';
import friends from 'friends.json';
import data from 'data.json';

export const App = () => {
  return (
    <Container>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </div>
      </div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
