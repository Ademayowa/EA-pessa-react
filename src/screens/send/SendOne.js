import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './Send.css';

const SendOne = () => {
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
    history.push('/sendthree');
  };

  return (
    <section className='sendOne'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/send'>
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

            <div className='hold'>
              <h4 className='text-white fs-6 mt-4 ms-2'>Wallet Address</h4>
              <span className='text-white label-tsh1'>0.00 TSH</span>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bgc fs-5 fw-bold'
                  onChange={onChange}
                />
                <span className='input-group-text'>T</span>
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
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default SendOne;
