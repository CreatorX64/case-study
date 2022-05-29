import LocalePicker from "components/LocalePicker";
import { StyledWrapper } from "components/Profile/styles";

const Profile = ({ user }) => {
  return (
    <StyledWrapper>
      <h2>{user.fullName}</h2>

      <section>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Email: {user.email}</p>
      </section>

      <LocalePicker />
    </StyledWrapper>
  );
};

export default Profile;
