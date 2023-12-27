import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLogin, setLogin] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleForm = (value) => {
    setLogin(value);
  };

  const handleDataFromChild = (child) => {
    if(child){
      setLogin(false);
      setShowDashboard(true)
    }
    else{
      setShowDashboard(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">

{
  isLogin ? (<Login onDataFromChild={handleDataFromChild} toggleForm={toggleForm} />
  ) : ( !isLogin && !showDashboard &&
    <Signup toggleForm={toggleForm} />)
}
{showDashboard&& <Dashboard/>}
    </div>
  );
};

export default App;
