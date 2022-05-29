import { StyledLocalePicker } from "components/LocalePicker/styles";
import { useUserContext } from "context/user";

const LocalePicker = () => {
  const { locale, setLocale } = useUserContext();

  return (
    <StyledLocalePicker>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
      <span>Locale</span>
    </StyledLocalePicker>
  );
};

export default LocalePicker;
