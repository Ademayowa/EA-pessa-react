import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './Receive.css';

const ReceiveThree = () => {
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
    history.push('/receivefour');
  };
  return (
    <section className='receiveThree'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/receiveone'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Receive TSH</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='hold'>
              <h4 className='text-white fs-6 mt-4 ms-2'>Select Asset</h4>
              <span className='text-white label-tsh1'>TSH</span>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc fs-5 fw-bold'
                  onChange={onChange}
                />
                <span className='input-group-text'>T</span>
              </div>
            </div>

            <form>
              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>From</h4>
                <div className='input-group group'>
                  <input
                    type='text'
                    className='form-control bgc fs-6'
                    placeholder='Enter email or userID'
                    onChange={onChange}
                  />
                  <span className='input-group-text'>T</span>
                </div>
              </div>

              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>Amount</h4>
                <div className='input-group group'>
                  <input
                    type='text'
                    className='form-control bgc fs-6'
                    placeholder='0.00 TSH'
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
                  onClick={handleClick}
                  disabled={disabled}
                  className='btn btn-secondary btn-lg'
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

export default ReceiveThree;
