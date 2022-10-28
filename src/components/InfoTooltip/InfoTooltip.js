import React from 'react';
import './InfoTooltip.css';
import Preloader from '../Preloader/Preloader'

function InfoTooltip(props) {
  // if(!props.text) {
  //   return <Preloader/>
  // }
  return(
    <div className={`popup-img popup_type_image ${(props.isOpenDone || props.isOpenErr) && 'popup-img_opened'}`}>
      <div className="popup__container-img">
        <button type="button" className="popup__button-close popup__button-close_type_img-card" 
                onClick={props.onClose}></button>
        <img className="popup__img popup__img_tooltip" src={props.img} alt='Значок результата операции'/>
        <h2 className={`popup__title popup__title${props.name}`}>{props.text}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;