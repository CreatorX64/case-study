import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import IconList from "icons/IconList";
import IconUser from "icons/IconUser";
import { StyledNavigation } from "components/Navigation/styles";
import { StyledButton } from "components/styles";

const Navigation = () => {
  const { user, logout } = useUserContext();
  const location = useLocation();
  const { t } = useTranslation();

  const isProfilePage = location.pathname.includes("/account");

  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink to="/">
            <IconList />
            <span>{t("c.navigation.list")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <IconUser />
            <span>{t("c.navigation.account")}</span>
          </NavLink>
        </li>

        {user && isProfilePage && (
          <StyledButton onClick={logout}>
            {t("c.navigation.logout")}
          </StyledButton>
        )}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
