import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import { StyledNavigation } from "components/Navigation/styles";
import { StyledButton } from "components/styles";
import IconList from "icons/IconList";
import IconUser from "icons/IconUser";

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, logout } = useUserContext();

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
