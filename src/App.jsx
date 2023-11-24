import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import JournalDetails from "./JournalDetails";
import CreateJournal from "./CreateJournal";

function App() {
  return (
    <div className="flex bg-slate-800 h-screen overflow-hidden justify-center">
      <div className="container w-[80%]">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/create-journal" element={<CreateJournal/>} />

              <Route path="/journals/:id" element={<JournalDetails/>} />
              {/* Add other routes as needed */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
