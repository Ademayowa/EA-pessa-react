import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import './History.css';

const History = () => {
  return (
    <section className='history'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard' className='text-white'>
              <BsArrowLeft />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Transaction History</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background'>
              <div className='wrapper d-flex justify-content-between text-white'>
                <div className='parent'>
                  <div className='icon'>
                    <AiOutlineArrowUp />
                  </div>

                  <div className='sent mt-3'>
                    <h5>Sent 500 TSH</h5>
                    <p className='green'>Successful</p>
                  </div>
                </div>

                <div className='right mt-3'>
                  <span className='text-secondary'>Sept 6 2021</span>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper d-flex justify-content-between text-white'>
                <div className='parent'>
                  <div className='icon2'>
                    <AiOutlineArrowUp />
                  </div>

                  <div className='process mt-3'>
                    <h5>Sent 500 TSH</h5>
                    <p className='yellow'>Processing</p>
                  </div>
                </div>

                <div className='right mt-3'>
                  <span className='text-secondary'>Sept 6 2021</span>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper d-flex justify-content-between text-white'>
                <div className='parent'>
                  <div className='icon'>
                    <AiOutlineArrowDown />
                  </div>

                  <div className='sent mt-3'>
                    <h5 className='mt'>Receive 30 TSH</h5>
                    <p className='green'>Successful</p>
                  </div>
                </div>

                <div className='right mt-3'>
                  <span className='text-secondary'>Sept 6 2021</span>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper d-flex justify-content-between text-white'>
                <div className='parent'>
                  <div className='icon'>
                    <AiOutlineArrowUp />
                  </div>

                  <div className='sent mt-3'>
                    <h5 className='mt'>Exchange 80 TSH</h5>
                    <p className='green'>Successful</p>
                  </div>
                </div>

                <div className='right mt-3'>
                  <span className='text-secondary'>Sept 6 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
