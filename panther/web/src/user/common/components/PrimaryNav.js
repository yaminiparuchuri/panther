import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Nav, NavItem, NavLink } from 'reactstrap';

class PrimaryNav extends Component {
  render() {
    return (
      <div>
      <Nav className="primary-nav">
        <NavItem>
          <NavLink tag={IndexLink} to="/user/dashboard" activeClassName="active">
            <svg width="30" height="31" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg"><path d="M2.345 29.332c.005.097.102.183.23.183h24.85c.128 0 .224-.086.23-.182l.888-16.75L15 1.5 1.46 12.582l.887 16.75zM2.575 31C1.69 31 .95 30.336.903 29.476L0 12.454c-.012-.29.12-.565.33-.725L14.44.183c.33-.248.79-.248 1.142.018l14.066 11.51c.233.177.365.453.35.747l-.902 17.015c-.044.86-.785 1.525-1.67 1.525H2.575z" fill="#041E42" opacity=".8"/></svg>
            <label>Dashboard</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/user/leaderboard" activeClassName="active">
            <svg width="28" height="31" viewBox="0 0 28 31" xmlns="http://www.w3.org/2000/svg"><g fill="#041E42" opacity=".8"><path d="M26.55 24.298c0-3.683-5.565-6.86-12.55-6.86s-12.55 3.177-12.55 6.86v5.186c0 .04.04.08.104.08h24.892c.064 0 .105-.04.105-.08v-5.186zm1.45 0v5.186c0 .843-.7 1.516-1.554 1.516H1.554C.7 31 0 30.327 0 29.484v-5.186C0 19.608 6.32 16 14 16s14 3.61 14 8.298zM19.712 7c0-3.118-2.55-5.66-5.712-5.66-3.16 0-5.712 2.542-5.712 5.66 0 3.118 2.55 5.66 5.712 5.66 3.16 0 5.712-2.542 5.712-5.66zM21 7c0 3.873-3.14 7-7 7s-7-3.127-7-7 3.14-7 7-7 7 3.127 7 7z"/></g></svg>
            <label>Leaderboard</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/user/actions" activeClassName="active">
            <svg width="30" height="29" viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg"><path d="M29.744 11.062l-13.95 17.543c-.418.527-1.17.527-1.59 0L.258 11.063c-.336-.42-.343-1.042-.02-1.472L7.154.42c.2-.267.498-.42.812-.42h14.07c.314 0 .612.153.812.418l6.915 9.173c.324.43.316 1.053-.018 1.472zm-7.86-9.543H8.116L1.49 10.307 15 27.298l13.51-16.99-6.626-8.79z" fill="#041E42"/></svg>
            <label>Actions</label>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/user/libraries" activeClassName="active">
            <svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg"><path d="M11.765 5.515L9.45 1.755l-.07-.143c-.038-.112-.12-.175-.2-.175H1.564c-.05 0-.195.208-.195.555v2.832H0v-.092h1.37v16.4c0 3.003 2.26 5.43 5.04 5.43h17.18c2.78 0 5.04-2.427 5.04-5.43V5.758c0-.174-.124-.307-.267-.307l-16.598.065zm16.596-1.5c.91 0 1.64.783 1.64 1.743v15.374C30 24.922 27.133 28 23.59 28H6.41C2.868 28 0 24.92 0 21.132v-16.4h1.37v.092H0V1.992C0 .932.645 0 1.565 0H9.18c.637 0 1.203.412 1.456 1.032l1.873 3.043 15.85-.06z" fill="#041E42" opacity=".8"/></svg>
            <label>Library</label>
          </NavLink>
        </NavItem>
        {/*<NavItem>
          <NavLink tag={Link} to="/user/forums" activeClassName="active">
            <svg width="30" height="28" viewBox="0 0 32 32" version="1.1">
              <g stroke="none" fill="none">
                <g fill="#041E42">
                  <g transform="translate(16.000000, 16.000000) scale(-1, 1) translate(-16.000000, -16.000000) ">
                  <path d="M2.14934449,28.4791112 C1.49452057,28.4791112 0.96000053,27.9375963 0.96000053,27.2649231 L0.96000053,2.37811391 C0.96000053,1.60949869 1.57187618,0.99000001 2.32157637,0.99000001 L30.580656,0.99000001 C31.23548,0.99000001 31.77,1.53151486 31.77,2.20418804 L31.77,27.2649231 C31.77,27.9375963 31.23548,28.4791112 30.580656,28.4791112 L28.9592182,28.4791112 L27.1759576,31.1873271 C26.9014459,31.6042246 26.3032887,31.6042246 26.0287771,31.1873271 L24.2455164,28.4791112 L2.14934449,28.4791112 Z M25.1868132,27.370823 L26.6023673,29.5206076 L28.0179214,27.370823 C28.1466606,27.1753084 28.3615847,27.0581499 28.5915117,27.0581499 L30.3854381,27.0581499 L30.3854381,2.41096129 L2.34456247,2.41096129 L2.34456247,27.0581499 L24.613223,27.0581499 C24.8556717,27.0581499 25.0690109,27.1860595 25.1926667,27.3797126 C25.2640132,27.491446 25.3055039,27.6250655 25.3055039,27.7686305 C25.3055039,28.1610182 24.9955592,28.4791112 24.613223,28.4791112 L24.2455164,28.4791112 L24.0396327,28.1664381 C23.8255576,27.8413248 23.9088205,27.399664 24.2256057,27.1799609 C24.3415096,27.099577 24.4726154,27.0600426 24.6027687,27.0581499 C24.8283466,27.0548696 25.0510629,27.1646607 25.1868132,27.370823 Z" id="Stroke-316"></path>
                  </g>
                </g>
              </g>
          </svg>
          <label>Forums</label>
          </NavLink>
        </NavItem>*/}
      </Nav>
      </div>
    );
  }
}

export default PrimaryNav;

