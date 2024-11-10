import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage';
import './index.css'; 

const App: React.FC = () => {

    return (
        <AppLayout>
            <HomePage></HomePage>
        </AppLayout>
    );
};
  
export default App;
