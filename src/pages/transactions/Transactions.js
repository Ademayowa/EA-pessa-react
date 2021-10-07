import { Link } from 'react-router-dom';
import Img from '../../images/send.png';
import Img1 from '../../images/receive.png';
import Img2 from '../../images/exchange.png';
import Img3 from '../../images/code.png';
import './Transactions.css';
import Img4 from '../../images/transaction.png';

const Transactions = () => {
  return (
    <div className='container transactions mt-4'>
      <div className='row'>
        <Link to='/send' className='col-3'>
          <div className='bgc mb-2'>
            <div className='d-flex justify-content-center'>
              <img
                src={Img}
                alt='icons'
                width={20}
                height={20}
                className='mb-1'
              />
            </div>
          </div>
          Send
        </Link>

        <Link to='/receive' className='col-3'>
          <div className='bgc mb-2'>
            <div className='d-flex justify-content-center'>
              <img
                src={Img1}
                alt='icons'
                width={20}
                height={20}
                className='mb-1 img-fluid'
              />
            </div>
          </div>
          Receive
        </Link>

        <Link to='/exchange' className='col-3'>
          <div className='bgc mb-2'>
            <div className='d-flex justify-content-center'>
              <img src={Img2} alt='icons' className='mb-1 img-fluid' />
            </div>
          </div>
          Exchange
        </Link>

        <Link to='/qr' className='col-3'>
          <div className='bgc mb-2'>
            <div className='d-flex justify-content-center'>
              <img src={Img3} alt='icons' className='mb-1 img-fluid' />
            </div>
          </div>
          QR
        </Link>

        <Link to='/history' className='col-3 mt-4'>
          <div className='bgc mb-2'>
            <div className='d-flex justify-content-center'>
              <img src={Img4} alt='icons' className='mb-1 img-fluid' />
            </div>
          </div>
          Transaction History
        </Link>
      </div>
    </div>
  );
};

export default Transactions;
