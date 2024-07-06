import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import SchoolOverview from './pages/about/SchoolOverview';
import MissionVision from './pages/about/MissionVision';
import PrincipalsMessage from './pages/about/PrincipalsMessage';
import History from './pages/about/History';
import SchoolStaff from './pages/about/SchoolStaff';
import Admissions from './pages/admissions/Admissions';
import AdmissionForm from './pages/admissions/AdmissionForm';
import AdmissionProcess from './pages/admissions/AdmissionProcess';
import FeeStructure from './pages/admissions/FeeStructure';
import Academics from './pages/academics/Academics';
import ClassSchedules from './pages/academics/ClassSchedules';
import Curriculum from './pages/academics/Curriculum';
import Examination from './pages/academics/Examination';
import Homework from './pages/academics/Homework';
import StudyMaterial from './pages/academics/StudyMaterial';
import Activities from './pages/activities/Activities';
import Contact from './pages/contact/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<SchoolOverview />}>
            <Route path="school-overview" element={<SchoolOverview />} />  {/* Use relative path here */}
            <Route path="mission-vision" element={<MissionVision />} />
            <Route path="principals-message" element={<PrincipalsMessage />} />
            <Route path="history" element={<History />} />
            <Route path="school-staff" element={<SchoolStaff />} />
          </Route>
          <Route path="/admissions" element={<AdmissionForm />}>
            <Route path="admission-form" element={<AdmissionForm />} />
            <Route path="admission-process" element={<AdmissionProcess />} />
            <Route path="fee-structure" element={<FeeStructure />} />
          </Route>
          <Route path="/academics" element={<ClassSchedules />}>
            <Route path="class-schedules" element={<ClassSchedules />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="examination" element={<Examination />} />
            <Route path="homework" element={<Homework />} />
            <Route path="study-material" element={<StudyMaterial />} />
          </Route>
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
