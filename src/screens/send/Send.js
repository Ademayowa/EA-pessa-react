import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Send.css';

const Send = () => {
  return (
    <section className='send'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Send Asset</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h2 className='totbalance'>TSH 3,721.46</h2>
                  <h3 className='tshape'>Total Balance</h3>
                  <h4 className='circle'>T</h4>
                </div>
              </div>
            </div>

            <h4 className='text-white fs-6 mt-4'>Select Asset</h4>
            <select className='form-select form-select-lg'>
              <option>Select an asset</option>
              <option value='1'>TSH</option>
              <option value='2'>KSH</option>
              <option value='3'>NHG</option>
            </select>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <Link to='/sendone' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Send;
