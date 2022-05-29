import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import { StyledHeading, StyledWrapper } from "pages/AccountPage/styles";
import SignUpForm from "components/SignUpForm";
import Profile from "components/Profile";

const AccountPage = () => {
  const { t } = useTranslation();
  const { user } = useUserContext();

  return (
    <StyledWrapper>
      <StyledHeading>{t("p.account.heading")}</StyledHeading>

      {/* If user is logged in show Profile, else show the sign up form.  */}
      {user ? <Profile user={user} /> : <SignUpForm />}
    </StyledWrapper>
  );
};

export default AccountPage;
