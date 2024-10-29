import { useTranslation } from "react-i18next";

function Main() {

  const { t } = useTranslation()
  return (
    <div>
      <h2>{t("homeTitle")}</h2>
    </div>
  );
}

export { Main };
