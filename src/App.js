 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import Donation from './components/Donation/Donation';
import Blog from './components/Blog/Blog';
import AddService from './components/AddService/AddService';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
function App() {
  return (
    <div className="App">
       
       <AuthProvider>
       <BrowserRouter>
           <Header></Header>
           <Banner></Banner>
          <Switch>
              <Route path="/home">
                    <Home></Home>
              </Route>
              <Route exact path="/">
                    <Home></Home>
              </Route>
              <Route path="/login">
                    <Login></Login>
              </Route>
               <Route path="/events">
                    <Events></Events>
              </Route>
              <Route path="/register">
                     <Register></Register>
              </Route>
              <Route path="/donation">
                    <Donation></Donation>
              </Route>
              <Route path="/blog">
                    <Blog></Blog>
              </Route> 
               <Route path="/addService">
                   <AddService></AddService>
               </Route>
               <PrivateRoute path="/service/:id">
                 <ServiceDetail></ServiceDetail>
              </PrivateRoute>
              <Route path="*">
                    <NotFound></NotFound>
              </Route>
          </Switch>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
