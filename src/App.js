import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StylingOptions from './Pages/StylingOptions';
import WritingLetter from './Pages/WritingLetter';

function App() {
    return (
        <>
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/2" element={<StylingOptions />} />
                    <Route path="/3" element={<WritingLetter />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
