import imageSrc from '../images/canoeing-back.jpg';

const Calendar = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content'>
        <div className='row'>
          <div className='col'>
            <iframe
              title='Pack 15 Calendar'
              src='https://calendar.google.com/calendar/embed?src=d5kl6b14ngun2nb5mvgrbhtkddle9r94%40import.calendar.google.com&ctz=America%2FChicago'
              width='800'
              height='600'
              frameborder='0'
              scrolling='no'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
