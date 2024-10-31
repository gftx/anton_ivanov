import { useTranslation } from "react-i18next";
import "./index.scss";

interface Experience {
  title: string;
  data: string;
  bullets: string[];
  link: string;
  skills: string;
}

const Experience = () => {
  const { t } = useTranslation();
  const experienceList = t("experienceList", {
    returnObjects: true,
  }) as Experience[];

  return (
    <div className='experience'>
      <div className='experience-list'>
        {experienceList.map((i) => (
          <div key={i.title} className='experience-list-item'>
            <p className='experience-list-item-data'>{i.data}</p>
            <a
              href={i.link}
              target='_blank'
              className='experience-list-item-title'
            >
              {i.title}
            </a>
            <div className='experience-list-item-bullets'>
              {i.bullets.map((bullet: string) => (
                <p key={bullet}>{bullet}</p>
              ))}
            </div>
            <p className='experience-list-item-skills'>{i.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Experience };
