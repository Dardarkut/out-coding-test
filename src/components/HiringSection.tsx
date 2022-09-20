import BG_image from "../assets/bg_image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
    HiringContainer,
    ContainerData,
    ContainerTitle,
    ContainerText,
    ButtonFreeTrial
  } from "./styles/HiringSection.style";
import '../assets/css/hiringSection.css';

const HiringSection = () => {

    
    return (
    <HiringContainer>
        <ContainerData className="container-data" >
            <div className="container-buttons-hiring">
                <div className="hiring">
                    WE’RE HIRING
                </div>
                <div id="careers-link">
                <a href="/">Visit our careers page <FontAwesomeIcon className="icon-arrow" icon={faChevronRight} /></a>
                </div>
            </div>
            <ContainerTitle className="container-title">
                <h2>
                    A better way to 
                    <br/>
                    <span>ship web apps</span>
                </h2>
            </ContainerTitle>
            <ContainerText>
                <p>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. 
                Elit sunt amet fugiat veniam occaecat fugiat.
                </p>
            </ContainerText>
            <div className="container-enter-email-free-trial">
                <input type="email" placeholder="Enter your email"/>
                <ButtonFreeTrial className="button-free-trial-primary">Start free trial</ButtonFreeTrial>
                <p>
                Start your free 14-day trial, no credit card necessary. 
                By providing your email, you agree to our terms or service.
                </p>
            </div>
        </ContainerData>
        <div className="container-img-bg">
            <div id="img-bg">
                <img src={BG_image} alt="bg" className="responsive"/>
            </div>
        </div>
    </HiringContainer>
    )
  }
  
  export default HiringSection