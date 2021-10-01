import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Receive.css';

const Receive = () => {
  return (
    <section className='receive'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Receive Asset</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <h4 className='text-white fs-6 mt-4'>Select Asset</h4>
            <select className='form-select form-select-lg'>
              <option selected>Select an asset</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <Link to='/receiveone' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Receive;
