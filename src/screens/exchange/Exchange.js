import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import './Exchange.css';

const Exchange = () => {
  const [value, setValue] = useState('');
  const [p2p] = useState('p2p');
  const [marketRate] = useState('marketRate');
  let history = useHistory();

  const handleClick = (e) => {
    if (value === marketRate) {
      history.push('/exchange-one');
    } else {
      history.push('/p2p');
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className='exchange'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Exchange</h4>
          </div>
        </div>

        <form>
          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='text-white fs-6 mt-4'>Select Asset</h4>
              <select className='form-select form-select-lg'>
                <option>Select asset pair</option>
                <option value='1'>TSH/KSH</option>
                <option value='2'>NGN/TSH</option>
              </select>

              <h4 className='text-white fs-6 mt-4'>Exchange Method</h4>
              <select
                className='form-select form-select-lg'
                onChange={onChange}
              >
                <option>Select an option</option>
                <option value={p2p}>P2P</option>
                <option value={marketRate}>Market rate</option>
              </select>
            </div>
          </div>

          <div className='d-grid gap-2 d-block mt-4'>
            <button onClick={handleClick} className='btn btn-primary btn-lg'>
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Exchange;
