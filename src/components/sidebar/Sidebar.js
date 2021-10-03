import { Link } from 'react-router-dom';
import { BiHomeCircle, BiSupport } from 'react-icons/bi';
import { BsPower, BsCloudUpload } from 'react-icons/bs';
import { IoMdWallet } from 'react-icons/io';
import SidebarOption from '../sidebaroption/SidebarOption';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar col-sm-12 col-md-12 col-lg-2 col-xxl-12'>
      <Link to='/'>
        <SidebarOption text='Home' Icon={BiHomeCircle} />
      </Link>

      <Link to='/wallets'>
        <SidebarOption text='Wallets' Icon={IoMdWallet} />
      </Link>

      <Link to='/upload'>
        <SidebarOption text='Upload' Icon={BsCloudUpload} />
      </Link>

      <Link to='/support'>
        <SidebarOption text='Support' Icon={BiSupport} />
      </Link>

      <Link to='/'>
        <SidebarOption text='LogOut' Icon={BsPower} />
      </Link>
    </div>
  );
};

export default Sidebar;
