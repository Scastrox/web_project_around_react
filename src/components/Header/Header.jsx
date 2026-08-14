import logo from '../../images/logo_around.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logotipo de Around The U.S." />
    </header>
  );
}

export default Header;
