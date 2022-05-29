import { NavLink } from "react-router-dom";

import IconList from "icons/IconList";
import IconUser from "icons/IconUser";
import { StyledNavigation } from "components/Navigation/styles";

const Navigation = () => {
  return (
    <StyledNavigation>
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
