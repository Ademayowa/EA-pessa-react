import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Receive from './screens/receive/Receive';
import Send from './screens/send/Send';
import Exchange from './screens/exchange/Exchange';
import ExchangeOne from './screens/exchange/ExchangeOne';
import Verify from './screens/exchange/Verify';
import VerifySuccess from './screens/exchange/VerifySuccess';
import QrScan from './screens/qrscan/Qr';
import Wallets from './pages/wallets/Wallets';
import Home from './components/home/Home';

import SendOne from './screens/send/SendOne';
import SendThree from './screens/send/SendThree';
import SendFour from './screens/send/SendFour';
import Successful from './screens/send/Successful';
import ReceiveOne from './screens/receive/ReceiveOne';
import ReceiveThree from './screens/receive/ReceiveThree';
import ReceiveFour from './screens/receive/ReceiveFour';
import ReceiveFive from './screens/receive/ReceiveFive';
import Sendsuccess from './screens/send/Sendsuccess';

import User from './screens/uservalidation/User';
import UserOne from './screens/uservalidation/UserOne';
import Usersuccess from './screens/uservalidation/Usersuccess';
import './index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/send' component={Send} />
        <Route exact path='/receive' component={Receive} />
        <Route exact path='/exchange' component={Exchange} />
        <Route exact path='/qr' component={QrScan} />
        {/* Sidebar Routes */}
        <Route exact path='/wallets' component={Wallets} />

        {/* Dashboard Routes */}
        <Route exact path='/sendone' component={SendOne} />
        <Route exact path='/sendthree' component={SendThree} />
        <Route exact path='/sendfour' component={SendFour} />
        <Route exact path='/success' component={Successful} />
        <Route exact path='/receiveone' component={ReceiveOne} />
        <Route exact path='/receivethree' component={ReceiveThree} />
        <Route exact path='/receivefour' component={ReceiveFour} />
        <Route exact path='/receivefive' component={ReceiveFive} />

        <Route exact path='/send-success' component={Sendsuccess} />
        <Route exact path='/exchange-one' component={ExchangeOne} />
        <Route exact path='/verify' component={Verify} />
        <Route exact path='/verify-success' component={VerifySuccess} />

        {/* User validation Routes */}
        <Route exact path='/user' component={User} />
        <Route exact path='/user-one' component={UserOne} />
        <Route exact path='/user-success' component={Usersuccess} />
      </Switch>
    </Router>
  );
};

export default App;
