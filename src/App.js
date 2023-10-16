// // App.js

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from "./NavBar";
// import Footer from "./Footer";
// import Home from "./Home";
// import Introduction from "./Introduction";
// import Projects from "./Projects";
// import WhatIDo from "./WhatIDo";
// import About from "./About";
// import PasswordGenerator from "./Password-Gen";
// import LearningJournal from './LearningJournal';
// import TravelJournal from "./TravelJournal";
// import Endorsement from "./Endorsement";
// import Quizzical from "./Quizzical";
// import ColorScheme from "./ColorScheme";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/introduction" element={<Introduction />} />
//           <Route path="/services" element={<WhatIDo />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<Projects />} />
//           <Route path="/learning-journal" element={<LearningJournal />} />
//           <Route path="/password-generator" element={<PasswordGenerator />} />
//           <Route path="/travel-journal" element={<TravelJournal />} />
//           <Route path="/quizzical" element={<Quizzical />} />
//           <Route path="/color-generator" element={<ColorScheme />} />
//           <Route path="/endorsement" element={<Endorsement />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Introduction from "./Introduction";
import Projects from "./Projects";
import WhatIDo from "./WhatIDo";
import About from "./About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/services" element={<WhatIDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

         
            
          

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

