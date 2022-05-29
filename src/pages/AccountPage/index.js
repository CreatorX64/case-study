import { useUserContext } from "context/user";
import LoginForm from "components/LoginForm";
import { Heading } from "pages/AccountPage/styles";
import Profile from "components/Profile";

const AccountPage = () => {
  const { user } = useUserContext();

  return (
    <div>
      <Heading>Account</Heading>

      {user ? <Profile /> : <LoginForm />}
    </div>
  );
};

export default AccountPage;
