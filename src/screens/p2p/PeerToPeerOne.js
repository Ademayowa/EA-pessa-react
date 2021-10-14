import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './PeerToPeer.css';

const PeerToPeerOne = () => {
  let history = useHistory();

  const handleClick = (e) => {
    history.push('/');
  };

  return (
    <section className='p2p-one'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/p2p'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Exchange KSH/TSH</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className=''>Exchange TSH</h1>
                  <h2 className='totbalance'>1500.00</h2>
                  <h3 className='tshape'>Available Balance : 37,21.46</h3>
                  <h4 className='circle'>T</h4>
                </div>
              </div>
            </div>

            <p className='text-center grey'>
              ATTENTION !! Please enter the amount you would like to exchange,
              you will have options to select traders and rates you want to
              trade wth on the p2p system.
            </p>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <button onClick={handleClick} className='btn btn-primary btn-lg'>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PeerToPeerOne;
