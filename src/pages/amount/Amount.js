import './Amount.css';

const Amount = () => {
  return (
    <div className='container'>
      <h2 className='title1'>Assets</h2>
      <div className='grid'>
        <div className='gridone'>
          <div>
            <div className='rowone'>
              <h2 className='numbs1'>78,458</h2>
              <h3 className='tshape1'>T</h3>
            </div>

            <div className='rowtwo'>
              <h4 className='text-secondary'>TSH</h4>
            </div>
          </div>
        </div>

        <div className='gridtwo'>
          <div>
            <div className='rowthree'>
              <h2 className='numbsone'>0.00</h2>
              <h3 className='tshapeone'>N</h3>
            </div>

            <div className='rowtwo'>
              <h4 className='text-secondary'>NGN</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amount;
