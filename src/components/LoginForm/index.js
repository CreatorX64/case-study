import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "context/user";
import LocalePicker from "components/LocalePicker";
import {
  StyledLoginForm,
  LabelWithInput,
  Button
} from "components/LoginForm/styles";
import iconLoading from "icons/loading.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setSignUpLoading(true);

    // Wait 2 seconds to simulate login process
    setTimeout(() => {
      setUser({ email, password });
      setSignUpLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <LabelWithInput moveLabel={Boolean(email)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>E-mail</span>
      </LabelWithInput>

      <LabelWithInput moveLabel={Boolean(password)}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Password</span>
      </LabelWithInput>

      <LocalePicker />

      <Button
        primary
        isInvalid={!email || !password}
        isLoading={signUpLoading}
        disabled={signUpLoading}
      >
        <span>Sign Up</span>
        <img src={iconLoading} alt="Loading icon" aria-hidden="true" />
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
