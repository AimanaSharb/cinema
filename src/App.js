import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Series from "./pages/Series/Series";
import Film from "./pages/Film/Film";
import './styles/style.scss'


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={''} element={<Home/>}/>
              <Route path={'films'} element={<Films/>}/>
              <Route path={'series'} element={<Series/>}/>
              <Route path={'film/:id'} element={<Film/>}/>
          </Route>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/registration'} element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
