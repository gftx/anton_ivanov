import "./index.scss"
import { CONTACTS } from "../../../../const.ts";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-list">
        {CONTACTS.map(contact => (
          <a
            className="contacts-list-item"
            key={contact.url}
            href={contact.url}
            target="_blank"
          >
            {contact.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export { Contacts }