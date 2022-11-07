import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";

import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={''} element={<Home/>}/>
              <Route path={'films'} element={<Films/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
