import './App.css';
import Header from '../header/header';
import Articles from '../articles/articles';
import Subreddits from '../subreddits/subreddits';
import Thread from '../thread/thread';
import Footer from '../footer/footer';
import { Error } from '../error/error';
import { themeSelector } from '../../slices/themeSlice';
import { useSelector } from 'react-redux/es/exports';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const theme = useSelector(themeSelector)
  return (
    <div id={theme} >
      <Header />
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={[<Articles key={1}/>, <Subreddits key={2}/> ]}/>
            <Route path='/article' key={2} element={[<Thread key={3}/>, <Subreddits key={2}/> ]} />
            <Route path='*' key={3} element={[<Error key={4}/>, <Subreddits key={2}/> ]} />
          </Routes>
        </BrowserRouter>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
