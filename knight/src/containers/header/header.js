import './header.css';
import CleaningCrew from '../../images/vectors/cleaning-crew.svg'

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-h1" >We are the solution to all your cleaning and maintenance problems</h1>
          <p className="header-p">Outstanding Landscaping, Commercial and Residential Cleaning Services in the DMV area.</p>
          <button className="header-button">Contact Us Now!</button>
        </div>
        <div>
          <img src={CleaningCrew} alt="Cleaning Crew" className="cleaningcrew"/>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
