import { useDispatch } from 'react-redux';
import { LogOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(LogOut())}>
        Logout
      </button>
    </div>
  );
};
