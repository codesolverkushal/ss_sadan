import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef();

  const handleToggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const aboutDropdownContent = (
    <>
      <Link to="/about/school-overview" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">School Overview</Link>
      <Link to="/about/mission-vision" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Mission & Vision</Link>
      <Link to="/about/principals-message" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Principal's Message</Link>
      <Link to="/about/history" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">History</Link>
      <Link to="/about/school-staff" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">School Staff</Link>
    </>
  );

  const admissionsDropdownContent = (
    <>
      <Link to="/admissions/admission-form" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Admission Form</Link>
      <Link to="/admissions/admission-process" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Admission Process</Link>
      <Link to="/admissions/fee-structure" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Fee Structure</Link>
    </>
  );

  const academicsDropdownContent = (
    <>
      <Link to="/academics/class-schedules" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Class Schedules</Link>
      <Link to="/academics/curriculum" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Curriculum</Link>
      <Link to="/academics/examination" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Examination</Link>
      <Link to="/academics/homework" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Homework</Link>
      <Link to="/academics/study-material" className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-200">Study Material</Link>
    </>
  );

  return (
    <header className="bg-blue-500 text-white font-semibold p-4 overflow-visible">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">S.S.Sadan</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li
              onClick={() => handleToggleDropdown('about')}
              className="relative"
              ref={activeDropdown === 'about' ? dropdownRef : null}
            >
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              {activeDropdown === 'about' && <DropdownMenu content={aboutDropdownContent} />}
            </li>
            <li
              onClick={() => handleToggleDropdown('admissions')}
              className="relative"
              ref={activeDropdown === 'admissions' ? dropdownRef : null}
            >
              <Link to="/admissions" className="hover:underline">
                Admissions
              </Link>
              {activeDropdown === 'admissions' && <DropdownMenu content={admissionsDropdownContent} />}
            </li>
            <li
              onClick={() => handleToggleDropdown('academics')}
              className="relative"
              ref={activeDropdown === 'academics' ? dropdownRef : null}
            >
              <Link to="/academics" className="hover:underline">
                Academics
              </Link>
              {activeDropdown === 'academics' && <DropdownMenu content={academicsDropdownContent} />}
            </li>
            <li>
              <Link to="/activities" className="hover:underline">Activities</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
