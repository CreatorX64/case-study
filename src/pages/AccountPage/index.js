import { useUserContext } from "context/user";
import SignUpForm from "components/SignUpForm";
import { StyledHeading, StyledWrapper } from "pages/AccountPage/styles";
import Profile from "components/Profile";

const AccountPage = () => {
  const { user } = useUserContext();

  return (
    <StyledWrapper>
      <StyledHeading>Account</StyledHeading>

      {/* If user is logged in show Profile, else show the sign up form.  */}
      {user ? <Profile user={user} /> : <SignUpForm />}
    </StyledWrapper>
  );
};

export default AccountPage;
