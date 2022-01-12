import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Switch} from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { UserContext } from './context';

import './index.css';


const NavBar        = lazy(() => import('./Components/NavBar/navbar')); 
const Home          = lazy(() => import('./Components/Home/home'));
const CreateAccount = lazy(() => import('./Components/CreateAccount/createaccount'));
const Login         = lazy(() => import('./Components/Login/login'));
const Deposit       = lazy(() => import('./Components/Deposit/deposit'));
const Withdraw      = lazy(() => import('./Components/WithDraw/withdraw'));
/* const Balance       = lazy(() => import('./Components/Balance/balance')); */
const AllData       = lazy(() => import('./Components/AllData/alldata'));
const PrivateRoute = lazy(() => import('./Components/Routers/PrivateRoute'))
const PublicRoute  = lazy(() => import('./Components/Routers/PublicRoute'))
/* const NotFound      = lazy(() => import('./Components/NotFound/notfound')); */


/* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain)
console.log(clientId) */

export default function App() {
/*   const auth = useAuth(); */
  return (
    
      <Router>
       <Switch>
          <Suspense fallback = {<div>loading...</div>}>
            <NavBar />
            <div>
              <UserContext >
                <div className="container" style={{ padding: "20px" }}>
                  <Route path='/' exact component={Home} /> 
                  <PublicRoute path='/createaccount' component={CreateAccount} />
                  <PublicRoute path='/login' component={Login}/>
            
                  <PrivateRoute exact path='/deposit' component={Deposit} />
                  <PrivateRoute exact path='/withdraw' component={Withdraw} />
                  {/* <PrivateRoute exat path='/balance' component={Balance} /> */}
                  <PrivateRoute path='/alldata' component={AllData} />
                  {/* <Route path='*' component={NotFound} /> */}
                </div>
              </UserContext>
            </div>
          </Suspense>
        </Switch>
      </Router>
  
    )
}