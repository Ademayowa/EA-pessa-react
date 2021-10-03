import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Support.css';

const Support = () => {
  return (
    <section className='sendOne'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Contact Us</h4>
          </div>
        </div>

        <div className='row'>
          <div className='hold'>
            <h4 className='text-white fs-6 mt-4 ms-2'>Email</h4>
            <div className='input-group'>
              <input type='text' className='form-control bgc fs-5 fw-bold' />
            </div>
          </div>

          <div className='hold'>
            <h4 className='text-white fs-6 mt-4 ms-2'>Phone Number</h4>
            <div className='input-group'>
              <input type='text' className='form-control bgc fs-5 fw-bold' />
            </div>
          </div>

          <div className='hold'>
            <div className='text-white mt-4'>
              <label className='mb-2 ms-2' htmlFor='description'>
                Tell us what you need
              </label>
              <textarea
                className='form-control des'
                rows='8'
                placeholder='Enter a message'
              ></textarea>
            </div>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <button className='btn btn-secondary btn-lg'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Support;
