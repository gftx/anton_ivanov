import classNames from "classnames";
import plus from "../../assets/icons/white-plus.svg";
import laptop from "../../assets/images/laptop.png";
import "./index.scss";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-title'>
          <h2 className='main-title-heading'>
            Anton <br /> Ivanov
          </h2>
          <p className='main-title-subheading'>{t("mainSubheading")}</p>
        </div>
        <div className='main-laptop'>
          <div className='grid-wrapper'>
            <div className='grid-rcs'>
              <div className='grid-rows'>
                <div className='grid-rows-line'></div>
                <div className='grid-rows-line'></div>
                <div className='grid-rows-line'></div>
                <div className='grid-rows-line'></div>
                <div className='grid-rows-line'></div>
              </div>
              <div className='grid-columns'>
                <div className='grid-columns-line'></div>
                <div className='grid-columns-line'></div>
                <div className='grid-columns-line'></div>
                <div className='grid-columns-line'></div>
                <div className='grid-columns-line'></div>
              </div>
            </div>
            <img className='main-laptop-plus__icon1' src={plus} />
            <img className='main-laptop-plus__icon2' src={plus} />
            <img className='main-laptop-plus__icon3' src={plus} />
            <img className='main-laptop-plus__icon4' src={plus} />

            <div className='grod-wrapper-inner'>
              <div
                className={classNames(
                  "main-laptop-runningString-viewport",
                  "main-laptop-runningString-animation-liner",
                )}
                style={{ animationDuration: "11.9475s" }}
              >
                <div className='main-laptop-runningString__string'>
                  SOFTWARE ENGINEER
                </div>
                <div className='main-laptop-runningString__string'>
                  CONTENT CREATOR
                </div>
                <div className='main-laptop-runningString__string'>
                  SOFTWARE ENGINEER
                </div>
              </div>
              <div
                className={classNames(
                  "main-laptop__addText",
                  "main-laptop__addText-1",
                )}
              >
                react
              </div>
              <div
                className={classNames(
                  "main-laptop__addText",
                  "main-laptop__addText-2",
                )}
              >
                typeScript
              </div>
              <div
                className={classNames(
                  "main-laptop__addText",
                  "main-laptop__addText-3",
                )}
              >
                web3
              </div>
              <img
                src={laptop}
                className='main-laptop__image'
                sizes='(max-width: 479px) 67vw, (max-width: 767px) 72vw, (max-width: 991px) 74vw, 422px'
              />
            </div>
          </div>
        </div>
      </div>
      <p>smth else</p>
    </div>
  );
}

export { Main };
