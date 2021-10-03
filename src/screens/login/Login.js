import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
    history.push('/dashboard');
  };

  return (
    <section className='sendOne'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/account-success'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Login</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='hold'>
              <label
                htmlFor='enterpassphrase'
                className='text-white fs-6 mt-4 ms-2'
              >
                Enter Email/Password
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  placeholder='Enter Email'
                  onChange={onChange}
                />
              </div>

              <p className='mt-4 mb-4 text-secondary'>
                Your seed is very important! In order to be sure that you have
                saved it, please confirm your seed.
              </p>

              <label htmlFor='enterpassphrase' className='text-white fs-6 ms-2'>
                Enter Passphrase
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc'
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <button
            onClick={handleClick}
            disabled={disabled}
            className='btn btn-secondary btn-lg'
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
