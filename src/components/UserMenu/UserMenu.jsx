import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserBar, Text, UserName, Button, Icon } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <UserBar>
      <Icon />
      <Text>
        Welcome, <UserName>{user.name}</UserName>{' '}
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserBar>
  );
};
