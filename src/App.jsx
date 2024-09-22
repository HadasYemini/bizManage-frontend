import { Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Customers from './views/Customers';
import Deals from './views/Deals';
import DealNew from './views/DealNew';
import Leads from './views/Leads';
import LeadNew from './views/LeadNew';
import Tasks from './views/Tasks';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import CustomerNew from './views/CustomerNew';
import TaskNew from './views/TaskNew';
import UserProfile from './components/UserProfile';
import Settings from './components/settings/Settings';
import Layout from './components/Layout'; // ייבוא רכיב Layout

function App() {
  return (
    <Routes>
      {/* רוטים ציבוריים */}
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* רוטים מוגנים עם Layout */}
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/new' element={<CustomerNew />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/deals/:status' element={<Deals />} />
        <Route path='/deals/new' element={<DealNew />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/leads/:stage' element={<Leads />} />
        <Route path='/leads/new' element={<LeadNew />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/new' element={<TaskNew />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
