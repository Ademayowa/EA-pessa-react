import './TotalBalance.css';

const TotalBalance = () => {
  return (
    <div className='container mt-4'>
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
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
