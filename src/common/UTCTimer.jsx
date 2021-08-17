import styled from "@emotion/styled";

const currTime = new Date();
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
const weekEng = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
const monthEng = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
const year = currTime.getFullYear();
const month = currTime.getMonth();
const day = currTime.getDay();

const korFormatDate = (date) => {
  return year + '년' + ' ' 
  + month + '월' + ' ' + day + '일' + ' ' 
  + week[day];
};

const usFormatDate = (date) => {
  return weekEng[day] + ' ' +  monthEng[month] 
  + day + ', ' + year;
};

const TimerContainer = styled.div`
  display: flex;
`;

const TimerLayout = styled.span`
    margin : 10px;
    display: flex;
`;


const UTCTimer = () => {
  return (
    <TimerContainer>
      <TimerLayout>
        {korFormatDate(currTime)}
      </TimerLayout>
      <TimerLayout>
        {usFormatDate(currTime)}
      </TimerLayout>
    </TimerContainer>
  )
};

export default UTCTimer;
