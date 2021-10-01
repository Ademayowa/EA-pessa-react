import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../feed/Feed';

const Dashboard = () => {
  return (
    <div className='col-xl-11 mx-auto'>
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Dashboard;
