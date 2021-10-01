import Amount from '../amount/Amount';
import DashboardHeader from '../dashboard/DashboardHeader';
import TotalBalance from '../totalbalance/TotalBalance';
import Transactions from '../transactions/Transactions';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed col-lg-8 col-xl-10 col-xxl-10 ms-auto mt-4'>
      <DashboardHeader />
      <TotalBalance />
      <Amount />
      <Transactions />
    </div>
  );
};

export default Feed;
