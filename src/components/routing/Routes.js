import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/Dashboard';
import History from '../../pages/history/History';
import Support from '../../pages/support/Support';
import Upload from '../../pages/upload/Upload';
import Wallets from '../../pages/wallets/Wallets';
import Exchange from '../../screens/exchange/Exchange';
import Sendsuccess from '../../screens/send/Sendsuccess';
import ExchangeOne from '../../screens/exchange/ExchangeOne';
import Verify from '../../screens/exchange/Verify';
import VerifySuccess from '../../screens/exchange/VerifySuccess';
import Login from '../../screens/login/Login';
import Passphrase from '../../screens/login/Passphrase';
import ConfirmDetails from '../../screens/p2p/ConfirmDetails';
import PeerToPeer from '../../screens/p2p/PeerToPeer';
import PeerToPeerOne from '../../screens/p2p/PeerToPeerOne';
import PeerToPeerTwo from '../../screens/p2p/PeerToPeerTwo';
import Pin from '../../screens/p2p/Pin';
import QrScan from '../../screens/qrscan/Qr';
import Receive from '../../screens/receive/Receive';
import ReceiveFive from '../../screens/receive/ReceiveFive';
import ReceiveFour from '../../screens/receive/ReceiveFour';
import ReceiveOne from '../../screens/receive/ReceiveOne';
import ReceiveThree from '../../screens/receive/ReceiveThree';
import Send from '../../screens/send/Send';
import SendFour from '../../screens/send/SendFour';
import SendOne from '../../screens/send/SendOne';
import SendThree from '../../screens/send/SendThree';
import Successful from '../../screens/send/Successful';
import Accountid from '../../screens/uservalidation/Accountid';
import AccountSuccess from '../../screens/uservalidation/Accountsuccess';
import ConfirmSeed from '../../screens/uservalidation/ConfirmSeed';
import CreateAccount from '../../screens/uservalidation/CreateAccount';
import CreateOne from '../../screens/uservalidation/CreateOne';
import Usersuccess from '../../screens/uservalidation/Usersuccess';
import UserDetails from '../../screens/uservalidation/UserDetails';
import User from '../../screens/uservalidation/User';
import UserOne from '../../screens/uservalidation/UserOne';
import Home from '../home/Home';

const Routes = () => {
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
        <Route exact path='/history' component={History} />

        <Route exact path='/send-success' component={Sendsuccess} />
        <Route exact path='/exchange-one' component={ExchangeOne} />
        <Route exact path='/verify' component={Verify} />
        <Route exact path='/verify-success' component={VerifySuccess} />
        <Route exact path='/p2p' component={PeerToPeer} />
        <Route exact path='/p2p-one' component={PeerToPeerOne} />
        <Route exact path='/p2p-two' component={PeerToPeerTwo} />
        <Route exact path='/confirm' component={ConfirmDetails} />
        <Route exact path='/pin' component={Pin} />

        {/* User validation Routes */}
        <Route exact path='/user' component={User} />
        <Route exact path='/user-one' component={UserOne} />
        <Route exact path='/user-success' component={Usersuccess} />
        <Route exact path='/user-details' component={UserDetails} />
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/create-one' component={CreateOne} />
        <Route exact path='/confirm-seed' component={ConfirmSeed} />
        <Route exact path='/account-id' component={Accountid} />
        <Route exact path='/account-success' component={AccountSuccess} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/passphrase' component={Passphrase} />

        {/* Upload Route */}
        <Route exact path='/upload' component={Upload} />
        <Route exact path='/support' component={Support} />
      </Switch>
    </Router>
  );
};

export default Routes;
