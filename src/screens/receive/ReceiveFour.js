import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './Receive.css';

const ReceiveFour = () => {
  const [disabled, setDisabled] = useState(true);

  let history = useHistory();

  const onChange = (e) => {
    if (e.target.value.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleClick = (e) => {
    history.push('/receivefive');
  };

  return (
    <section className='receiveFour'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/receivethree'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Receive TSH</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <form>
              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>From</h4>
                <div className='input-group group'>
                  <input
                    type='email'
                    className='form-control bgc fs-6'
                    placeholder='emeka@gmail.com'
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>Amount</h4>
                <div className='input-group group'>
                  <input
                    type='text'
                    className='form-control bgc fs-6'
                    placeholder='9,0000 TSH'
                    onChange={onChange}
                  />
                  <span className='input-group-text'>T</span>
                </div>
              </div>

              <div className='hold'>
                <div className='text-white mt-4'>
                  <label className='mb-2 ms-2' htmlFor='description'>
                    Description
                  </label>
                  <textarea
                    className='form-control des'
                    rows='8'
                    onChange={onChange}
                    placeholder='Enter a message'
                  ></textarea>
                </div>
              </div>

              <div className='d-grid gap-2 d-block mt-4'>
                <button
                  className='btn btn-primary btn-lg'
                  onClick={handleClick}
                  disabled={disabled}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveFour;
