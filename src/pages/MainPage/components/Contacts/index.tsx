import { useTranslation } from "react-i18next"
import "./index.scss"

const Contacts = () => {
  const { t } = useTranslation()
  return (
    <div className="contacts">
      <h3 className="contacts-title">{t("contactsHeader")}</h3>
      <div className="contacts-list"></div>
    </div>
  )
}

export { Contacts }