import imageSrc from '../images/camping-back.jpg';

const Resources = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content'>
        <div className='row'>
          <div className='col'></div>
        </div>
        <div className='row'>
          <div className='col resource-section'>Parent Resources</div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='resource-title'>Scoutbook</div>
            <div className='resource'>
              Scoutbook is an advancement tracking tool. It also has messaging,
              forums, service, hiking, camping tracking and calendaring
              features.
              <div>
                <a
                  href='https://scoutbook.scouting.org/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Click Here to Launch Scoutbook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>&nbsp;</div>
        <div className='row'>
          <div className='col'>
            <div className='resource-title'>Medical Forms</div>
            <div className='resource'>
              Download the BSA Medical Form document here -{'> '}
              <br />
              <br />
              <button className='btn btn-primary'>
                <a
                  href='https://filestore.scouting.org/filestore/HealthSafety/pdf/680-001_AB.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  BSA Medical Form (PDF)
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='row'><div className='col section-spacer'>&nbsp;</div></div>
        <div className='row'>
          <div className='col resource-section'>Leader Resources</div>
        </div>
        <div className='row'>
          <div className='col resource-title'>Youth Protection</div>
        </div>
        <div className='row'>
          <div className='col resource'>
            The Boy Scouts of America places the greatest importance on creating
            the most secure environment possible for our youth members. To
            maintain such an environment, the BSA developed numerous procedural
            and leadership selection policies and provides parents and leaders
            with resources for the Cub Scout, Scouts BSA, and Venturing
            programs.
            <br />
            <br />
            <div>
              <button className='btn btn-primary'>
                Youth Protection Information
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Nav
        id='main-navigation'
        className='justify-content-center'
        activeKey='/home'
      >
        <Nav.Item>
          <Link to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/about'>What We Do</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Pack Calendar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Cub Notes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Cub Notes</Nav.Link>
        </Nav.Item>
        <NavDropdown title='Resources' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>
            Parent Resources
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>
            Leader Resources
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title='Scouting.org' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>
            Youth Protection
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>MyScouting.org</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>Scouting Forms</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>BeAScout.org</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href='#calendar'>Contact</Nav.Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
};

export default Resources;
