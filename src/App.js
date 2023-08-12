import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Alger from "./weather/Alger";
import Blida from "./weather/Blida";
import Tizi from "./weather/Tizi";
import HomePage from "./weather/HomePage";
import Asr from "./weather/Asr";
import Algerpt from "./weather/Algerpt";
import Tizipt from "./weather/Tizipt";
import Mapp from "./weather/Mapp";
import Imagesa from "./pages/images/Imagesa";
import Imagesb from "./pages/images/Imagesb";
import Imagest from "./pages/images/Imagest";



import { useEffect } from "react";


function App() {

  
  useEffect(() => {
    document.title = 'Weather and Prayer times!';
  }, []);

  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alger" element={<Alger />} />
          <Route path="/blida" element={<Blida />} />
          <Route path="/tizi" element={<Tizi />} />
          <Route path="/asr" element={<Asr />} />
          <Route path="/algerpt" element={<Algerpt />} />
          <Route path="/tizipt" element={<Tizipt />} />
          <Route path="/mapp" element={<Mapp />} />
          <Route path="/imagesa" element={<Imagesa />} />
          <Route path="/imagesb" element={<Imagesb />} />
          <Route path="/imagest" element={<Imagest />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
