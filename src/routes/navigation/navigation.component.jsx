import { Fragment } from 'react';
import CrwnLogo from '../../assets/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
