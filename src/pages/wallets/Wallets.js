import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './Wallets.css';

const Wallets = () => {
  return (
    <section className='wallets'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard' className='text-white'>
              <BsArrowLeft />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Wallets</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h2 className='totbalance'>Create Wallet</h2>
                  <h4 className='circle'>+</h4>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h2 className='totbalance'>TSH 3,721.46</h2>
                  <h3 className='tshape'>Total Balance</h3>
                  <h4 className='circle'>T</h4>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h2 className='totbalance'>KSH 78,453</h2>
                  <h3 className='tshape'>Total Balance</h3>
                  <h4 className='circle'>K</h4>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h2 className='totbalance'>TSH 139,37.22</h2>
                  <h3 className='tshape'>NGN</h3>
                  <h4 className='circle'>N</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallets;
