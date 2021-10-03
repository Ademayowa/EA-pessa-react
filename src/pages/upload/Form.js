const Form = ({ recepient, sender, amount, fee }) => {
  // const [recepient, setReceipent] = useState('');
  // const [sender, setSnder] = useState('');
  // const [amount, setAmount] = useState('');
  // const [fee, setFee] = useState('');
  // const [passphrase, setpassphrase] = useState('');

  return (
    <form className='mt-5'>
      <h4 className='text-white'>Voucher Data</h4>
      <div className='hold text-white'>
        <label htmlFor='recepient' className='text-white fs-6 mt-4 ms-2'>
          Recepient
        </label>
        <div className='input-group'>
          <input
            type='text'
            className='form-control fs-5'
            disabled
            value={recepient}
          />
        </div>

        <label htmlFor='sender' className='text-white fs-6 mt-4 ms-2'>
          Sender
        </label>
        <div className='input-group'>
          <input
            type='text'
            className='form-control fs-5'
            disabled
            value={sender}
          />
        </div>

        <label htmlFor='amount' className='text-white fs-6 mt-4 ms-2'>
          Amount
        </label>
        <div className='input-group'>
          <input
            type='text'
            className='form-control fs-5'
            disabled
            value={amount}
          />
        </div>

        <label htmlFor='fee' className='text-white fs-6 mt-4 ms-2'>
          Fee
        </label>
        <div className='input-group'>
          <input
            type='text'
            className='form-control fs-5'
            disabled
            value={fee}
          />
        </div>

        <label htmlFor='passphrase' className='text-white fs-6 mt-4 ms-2'>
          Passphrase
        </label>
        <div className='input-group'>
          <input type='text' className='form-control fs-5' required />
        </div>
      </div>
      <button className='btn btn-primary mt-3'>Submit</button>
    </form>
  );
};

export default Form;
