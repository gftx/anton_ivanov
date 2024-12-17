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
            <div className="experience-list-item-container">
              <a
                href={i.link}
                target='_blank'
                className='experience-list-item-title'
              >
                {i.title}
              </a>
            </div>
            <div className='experience-list-item-bullets'>
              {i.bullets.map((bullet: string) => (
                <div
                  key={bullet}
                  className='experience-list-item-bullets-bullet'>
                  <p>{bullet}</p>
                  <span>&#8226;</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='experience-skills'>
        <h3>
          Skills:
        </h3>
        <p>
          <strong>Frontend:</strong>
          <br/>
          ReactJS, JavaScript and TypeScript with the latest ECMAScript standards,
          Redux, MobX, styled-components, Jest, Testing Library, react-router-dom,
          GraphQL
        </p>
        <p>
          <strong>Other:</strong>
          <br/>
          NestJS, NodeJS, PostgreSQL, CI/CD, Nginx, Webpack, Git, npm, yarn
        </p>
      </div>
    </div>
  );
};

export { Experience };
