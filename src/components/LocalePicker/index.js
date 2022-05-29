import { useState } from "react";
import { StyledLocalePicker } from "components/LocalePicker/styles";

const LocalePicker = () => {
  const [locale, setLocale] = useState("en");

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
