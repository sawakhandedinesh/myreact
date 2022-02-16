
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Header from './Header/Header';
import ChatApp from './Component/ChatApp/Home'
import AxiosUser from './Component/AxiosUser/AxiosUser';
import HomePage from './Component/HomePage/HomePage';
import AxiosAsyncAwait from './Component/AxiosAsyncAwait/AxiosAsyncAwait';
import Footer from './Footer/Footer';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import ContextApi from './Component/ContextAPIConcept/A';
import Scroll from './Component/InfiniteScroll/InfiniteScroll';
import ScrollUserData from './Component/ScrollUserData/ScrollUserData';
import HOCHome from './Component/HOC/HOCHome';
import ContextTaskHome  from './Component/ContextTask/ContextTaskHome';

function App() {
  return (
    <div className='container'>
      
       <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Home" element={<ChatApp/>}/>
        <Route path="/AxiosUser" element={<AxiosUser/>}/>
        <Route path="/AxiosAsyncAwait" element={<AxiosAsyncAwait/>}/>
        <Route path="/ContextAPI" element={<ContextApi/>}/>
        <Route path="/Scroll" element={<Scroll/>}/>
        <Route path="/UserScroll" element={<ScrollUserData/>}/>
        <Route path="/ContextTaskAPI" element={<ContextTaskHome/>}/>
        <Route path="/HOC" element={<HOCHome/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes> 
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;

