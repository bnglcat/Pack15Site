import imageSrc from '../images/rockets-back.jpeg';
import PackEvents from './packevents';

const WhatWeDo = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content'>
        <PackEvents />

      </div>
    </>
  );
};

export default WhatWeDo;
