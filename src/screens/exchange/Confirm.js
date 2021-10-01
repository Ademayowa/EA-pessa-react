import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Exchange.css';

const Confirm = () => {
  return (
    <section className='confirm'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Confirm Exchange</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className=''>Exchange TSH</h1>
                  <h2 className='totbalance'>500</h2>
                  <h3 className='tshape'>Available Balance : 37,21.46</h3>
                  <h4 className='circle'>T</h4>
                </div>
              </div>
            </div>

            <div className='background'>
              <div className='wrapper'>
                <div className='d-flex flex-column'>
                  <h1 className=''>Exchange to KSH</h1>
                  <h2 className='totbalance'>23.76</h2>
                  <h3 className='tshape'>Available Balance : 70.78</h3>
                  <h4 className='circle'>k</h4>
                </div>
              </div>
            </div>

            <p className='text-center grey'>1 TSH = 0.047 KSH</p>
          </div>
        </div>

        <div className='d-grid gap-2 d-block'>
          <Link to='#' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
