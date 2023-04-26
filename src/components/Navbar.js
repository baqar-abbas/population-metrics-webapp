import { useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const Navbar = () => {
  const navigation = useNavigate();
  const locate = useLocation();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          {locate.pathname === '/' ? (
            ''
          ) : (
            <BiLeftArrowAlt className="backarrow" onClick={() => navigation('/')} />
          )}
          <span className="dateyear">2023</span>
        </li>
        <li className="headdetails">{locate.pathname === '/' ? 'Country Information' : 'Details'}</li>
        <div className="icons">
          <FaMicrophone className="settings" />
          <FaRegSun className="microphone" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
