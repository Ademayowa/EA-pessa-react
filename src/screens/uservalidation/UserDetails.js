import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
  return (
    <section className='sendOne'>
      <form className='container mb-4'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/user-success'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>User Details</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='hold'>
              <label className='text-white fs-6 mt-4 ms-2 mb-2'>
                Full Name
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='Marvelous IK'
                />
              </div>

              <label className='text-white fs-6 mt-4 ms-2 mb-2'>
                Nationality
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='Nigerian'
                />
              </div>

              <label className='text-white fs-6 mt-4 ms-2 mb-2'>Sex</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='Male'
                />
              </div>

              <label className='text-white fs-6 mt-4 ms-2 mb-2'>Age</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='25'
                />
              </div>

              <label className='text-white fs-6 mt-4 ms-2 mb-2'>Address</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='23 street lekki lagos nigeria'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='d-grid d-gap-2'>
          <Link to='/create-account' className='btn btn-primary btn-lg mt-4'>
            Next
          </Link>
        </div>
      </form>
    </section>
  );
};

export default User;
