import { NavLink, useLocation } from "react-router-dom";

import { useUserContext } from "context/user";
import IconList from "icons/IconList";
import IconUser from "icons/IconUser";
import { StyledNavigation } from "components/Navigation/styles";
import { StyledButton } from "components/styles";

const Navigation = () => {
  const { user, logout } = useUserContext();
  const location = useLocation();

  const isProfilePage = location.pathname.includes("/account");

  return (
    <StyledNavigation>
      {user && isProfilePage && (
        <StyledButton onClick={logout}>Log Out</StyledButton>
      )}

      <ul>
        <li>
          <NavLink to="/">
            <IconList />
            <span>List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <IconUser />
            <span>Account</span>
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
