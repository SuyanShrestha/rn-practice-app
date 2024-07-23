import React from 'react';
import {View, Text, Button} from 'react-native';

const UserProfile = React.memo(
  ({user, status}) => {
    console.log('Rendering UserProfile');
    return (
      <View>
        <Text>{user.name}</Text>
        <Text>Status: {status}</Text>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name &&
      prevProps.status === nextProps.status
    );
  },
);

const ReactMemo2 = () => {
  const [user, setUser] = React.useState({id: 1, name: 'Suyan'});
  const [status, setStatus] = React.useState('Active');
  const [showProfile, setShowProfile] = React.useState(true);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {showProfile && <UserProfile user={user} status={status} />}
      <Button
        title="Toggle Status"
        onPress={() => setStatus(status === 'Active' ? 'Inactive' : 'Active')}
      />
      <Button
        title="Toggle Profile Visibility"
        onPress={() => setShowProfile(!showProfile)}
      />
    </View>
  );
};

export default ReactMemo2;
