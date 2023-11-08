import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World
      <BrowserRouter>
        <Routes>
          {/* <Route path="/:id" Component={comp} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
