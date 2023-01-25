import imageSrc from '../images/camping-back.jpg';
import imageSrc2 from '../images/scout_me_in_horizon.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div>
        <div className='container-fluid content'>
          <div className='row'>
            <div className='col'>
              <img className='scout-me-in' src={imageSrc2} alt='scout me in' />
            </div>
          </div>
          <div className='row'>
            <div className='col resource'>
              <br />
              Cub Scout Pack 15 was chartered in 1984 and has been serving
              scouts in grades K-5 in the Baton Rouge, LA area ever since. We
              are part of the Sewell-Eagle District of the Istrouma Area Council
              and are sponsored by the Rotary Club of Southeast Baton Rouge.
              <br />
              <br />
              We are a very active Cub Scout pack. Pack Meetings occur on one
              Wednesday each month at St. Andrew's Methodist Church in
              Shenandoah. Many of our Dens try to have at least 2 meetings per
              month to maximize the number of adventures our Scouts can
              experience. In addition to Pack and Den meetings, the Pack plans 1
              weekend event every month not only during the school year, but
              through the summer months as well. Typical events include Rocket
              Build and Launches, Pinewood Derby Races, Spring and Fall camp outs,
              and the annual Blue and Gold Banquet where our Arrow of Light
              Scouts will cross over into a Boy Scout Troop.
              <br />
              <br />
              Our goal is to foster the BSA vision of building our youth into
              conscientious, responsible, and productive boys and girls by
              instilling in them lifetime values and developing ethical
              character traits as expressed in the Scout Oath and Law. We want
              to create an environment that fosters a sense of community while
              keeping the fun in scouting. As Robert Baden-Powell once said, we
              are building “Happy, Healthy, and Helpful Citizens.”
              <br />
              <br />
              We require all our leaders to be properly trained so our scouts
              can be mentored in a safe environment. In addition, we encourage
              our leaders to attend regular Scout training events and monthly
              round tables. Many of our scouts go on to join
              <Link to='https://www.facebook.com/troop888/'>
                <b>
                  {' '}
                  <u>Boy Scout Troop 888</u>{' '}
                </b>
              </Link>
              or
              <Link to='https://www.boyscoutmulchbr.org/about-troop-203'>
                <b>
                  {' '}
                  <u>Troop 203</u>{' '}
                </b>
              </Link>
              . We are proud to have past and present leaders who are Eagle
              Scouts and Wood Badge trained.
              <br />
              <br />
              It is our sincerest hope that if you or if someone you know is
              considering becoming involved in Scouting, you will{' '}
              <Link to='contact'>
                <b>
                  <u>Contact Us</u>
                </b>
              </Link>{' '}
              or one of our leaders.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
