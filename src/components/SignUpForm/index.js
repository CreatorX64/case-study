import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import LocalePicker from "components/LocalePicker";
import { StyledButton } from "components/styles";
import { StyledForm, StyledLabelWithInput } from "components/SignUpForm/styles";
import iconLoading from "icons/loading.svg";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    setSignUpLoading(true);

    // Simulate login process
    setTimeout(() => {
      // For demo purposes we set a dummy value for fullName, we also use the email &
      // password as is. Normally, we would invoke a function/hook that talks to a
      // remote API & receives user data on success, upon which we would either
      // redirect the user to the ListPage or show and error modal/component
      // if the sign up / login was unsuccessful.
      setUser({
        email,
        password: password.slice(0, -4).padEnd(password.length, "*"),
        fullName: "John Doe"
      });
      setSignUpLoading(false);

      setEmail("");
      setPassword("");

      navigate("/");
    }, 2000);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabelWithInput moveLabel={Boolean(email)}>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{t("c.signUpForm.email")}</span>
      </StyledLabelWithInput>

      <StyledLabelWithInput moveLabel={Boolean(password)}>
        <input
          required
          type="password"
          value={password}
          minLength="9"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{t("c.signUpForm.password")}</span>
      </StyledLabelWithInput>

      <LocalePicker />

      {/* Note that StyledButton's "invalid" state & "disabled" state differ
      slightly, that's why they're passed individually. */}
      <StyledButton
        primary
        isInvalid={!email || !password}
        isLoading={signUpLoading}
        disabled={signUpLoading || !email || !password}
      >
        <span>{t("c.signUpForm.signUp")}</span>
        <img src={iconLoading} alt="Loading icon" aria-hidden="true" />
      </StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
