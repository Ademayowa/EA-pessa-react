import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import Img from '../../images/trader1.png';
import Img2 from '../../images/trader2.png';
import Img3 from '../../images/trader3.png';
import './PeerToPeer.css';

const PeerToPeerTwo = () => {
  let history = useHistory();

  const handleClick = (e) => {
    history.push('/confirm');
  };

  return (
    <section className='p2p-two'>
      <div className='container mb-4'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/p2p-one'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Exchange KSH/TSH</h4>
          </div>
        </div>

        {/* User Trader1 */}

        <div className='user-trader text-white'>
          <div className='bg-color py-3 px-4'>
            <div className='wraps d-flex'>
              <div className='d-flex align-items-center'>
                <img
                  src={Img}
                  alt='trader'
                  className='img-fluid'
                  style={{ objectFit: 'contain' }}
                />

                <div className='ms-3'>
                  <h4 className='text-warning fs-6 fw-light mt-2'>John</h4>
                </div>
              </div>

              <div className='ms-auto numbers'>
                <p>
                  578 Trades <br />
                  completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background pull-up'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className='mt-2'>Exchange Rate</h1>
                  <h2 className='totbalance'>3.5002</h2>
                  <h3 className='tshape'>You will receive : 5350 NG</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User trader2 */}
        <div className='user-trader text-white'>
          <div className='bg-color py-3 px-4'>
            <div className='wraps d-flex'>
              <div className='d-flex align-items-center'>
                <img
                  src={Img2}
                  alt='trader'
                  className='img-fluid'
                  style={{ objectFit: 'contain' }}
                />

                <div className='ms-3'>
                  <h4 className='text-warning fs-6 fw-light mt-2'>Smith</h4>
                </div>
              </div>

              <div className='ms-auto numbers'>
                <p>
                  578 Trades <br />
                  completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background pull-up'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className='mt-2'>Exchange Rate</h1>
                  <h2 className='totbalance'>3.3000</h2>
                  <h3 className='tshape'>You will receive : 4950 NG</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User trader3 */}
        <div className='user-trader text-white'>
          <div className='bg-color py-3 px-4'>
            <div className='wraps d-flex'>
              <div className='d-flex align-items-center'>
                <img
                  src={Img3}
                  alt='trader'
                  className='img-fluid'
                  style={{ objectFit: 'contain' }}
                />

                <div className='ms-3'>
                  <h4 className='text-warning fs-6 fw-light mt-2'>David</h4>
                </div>
              </div>

              <div className='ms-auto numbers'>
                <p>
                  578 Trades <br />
                  completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background pull-up'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className='mt-2'>Exchange Rate</h1>
                  <h2 className='totbalance'>3000</h2>
                  <h3 className='tshape'>You will receive : 4500 NG</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-grid gap-2 d-block'>
          <button onClick={handleClick} className='btn btn-secondary btn-lg'>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PeerToPeerTwo;
