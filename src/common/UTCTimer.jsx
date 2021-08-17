import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";

const TimerContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const TimerLayout = styled.span`
    margin : 10px;
    display: flex;
`;


const UTCTimer = () => {
  const currTime = new Date();
  const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  const weekEng = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  const monthEng = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  const korCurrTime = new Date(currTime.getTime());
  const usCurrTime = new Date(currTime.getTime() - (840 * 60 * 1000));

  const korFormatDate = (date) => {
    return date.getFullYear() + '년' + ' ' 
    + (date.getMonth() +1) + '월' + ' ' + date.getDate() + '일' + ' ' 
    + week[date.getDay()];
  };
  
  const usFormatDate = (date) => {
    return weekEng[date.getDay()] + ' ' +  monthEng[date.getMonth()] + ' '
    + date.getDate() + ', ' + date.getFullYear();
  };
  return (
    <TimerContainer>
      <TimerLayout>
        {ClassNames === 'ko' ? (korFormatDate(korCurrTime)) : usFormatDate(usCurrTime)}
      </TimerLayout>
    </TimerContainer>
  )
};

export default UTCTimer;
