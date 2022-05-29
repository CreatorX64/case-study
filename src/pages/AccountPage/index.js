import { useUserContext } from "context/user";
import SignUpForm from "components/SignUpForm";
import { Heading } from "pages/AccountPage/styles";
import Profile from "components/Profile";

const AccountPage = () => {
  const { user } = useUserContext();

  return (
    <div>
      <Heading>Account</Heading>

      {/* If user is logged in show Profile, else show the sign up form.  */}
      {user ? <Profile user={user} /> : <SignUpForm />}
    </div>
  );
};

export default AccountPage;
