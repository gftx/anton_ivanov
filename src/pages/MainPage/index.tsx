import plus from "../../assets/icons/white-plus.svg";
import laptop from "../../assets/images/laptop.png";
import "./index.scss";

function Main() {
  return (
    <div className='main'>
      <div className='main-container'>
        <div>
          <h2 className='main-title'>
            Anton <br /> Ivanov
          </h2>
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
                className='text-viewport-cs text-animation-liner'
                style={{ animationDuration: "10.5262s" }}
              >
                <div className='title-text small gs text-animation-item'>
                  SOFTWARE ENGINEER
                </div>
                <div className='title-text small gs text-animation-item'>
                  CONTENT CREATOR
                </div>
                <div className='title-text small gs text-animation-item'>
                  SOFTWARE ENGINEER
                </div>
              </div>
              <img
                src={laptop}
                className="laptop-image"
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
