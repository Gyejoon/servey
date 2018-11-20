import React from 'react';

import './Header.scss';

const Header = ({ right, userMenu }) => (
  <header className="header">
    <div className="header-wrapper">설문조사 관리자</div>
    <div className="right">
      {right}
      {userMenu}
    </div>
  </header>
);

export default Header;
