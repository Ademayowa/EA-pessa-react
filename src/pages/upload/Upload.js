import { useState } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './Upload.css';

const Upload = () => {
  const [recepient, setReceipent] = useState('');
  const [sender, setSender] = useState('');
  const [amount, setAmount] = useState('');
  const [fee, setFee] = useState('');

  const onChange = (e) => {
    setReceipent('Bayo Mayowa');
    setSender('Emeka Titi');
    setAmount('50000');
    setFee('10000');
  };

  return (
    <div className='container'>
      <div className='col-lg-12'>
        <Link to='/dashboard' className='text-white arrow'>
          <BsArrowLeft />
        </Link>
      </div>

      <div className='col-lg-6 mx-auto mt-5 text-white text-center'>
        <input type='file' onChange={onChange} />
      </div>
      <Form recepient={recepient} sender={sender} amount={amount} fee={fee} />
    </div>
  );
};

export default Upload;
