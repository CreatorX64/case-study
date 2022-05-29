import { useTranslation } from "react-i18next";

import { useUserContext } from "context/user";
import { StyledLocalePicker } from "components/LocalePicker/styles";

const langs = {
  en: { nativeName: "English" },
  tr: { nativeName: "Türkçe" }
};

const LocalePicker = () => {
  const { t } = useTranslation();
  const { locale, setLocale } = useUserContext();

  return (
    <StyledLocalePicker>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        {Object.keys(langs).map((lang) => (
          <option key={lang} value={lang}>
            {langs[lang].nativeName}
          </option>
        ))}
      </select>
      <span>{t("c.localePicker.label")}</span>
    </StyledLocalePicker>
  );
};

export default LocalePicker;
