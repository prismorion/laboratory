import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Accreditation from '../pages/Accreditation/Accreditation';
import Contacts from '../pages/Contacts/Contacts';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/accreditation" element={<Accreditation />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
