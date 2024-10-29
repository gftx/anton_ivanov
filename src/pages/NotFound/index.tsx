import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NoMatch() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("notFoundTitle")}</h2>
      <p>
        <Link to='/'>{t("notFoundLink")}</Link>
      </p>
    </div>
  );
}

export { NoMatch };
