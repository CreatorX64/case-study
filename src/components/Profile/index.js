import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import LocalePicker from "components/LocalePicker";
import { StyledWrapper } from "components/Profile/styles";

const Profile = ({ user }) => {
  const { t } = useTranslation();
  const { locale } = useUserContext();

  return (
    <StyledWrapper>
      <h2>{user.fullName}</h2>

      <section>
        <p>
          {t("c.profile.email")}: {user.email}
        </p>
        <p>
          {t("c.profile.password")}: {user.password}
        </p>
        <p>
          {t("c.profile.currentLocale")}: {locale.toUpperCase()}
        </p>
      </section>

      <LocalePicker />
    </StyledWrapper>
  );
};

export default Profile;
