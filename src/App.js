import { CustomizationProvider } from './context/Customization';
import Header from './components/header/Header';
import Router from './components/Router';
import './styles/global.css';

export default function App() {
  return (
    <CustomizationProvider>
      <Header />
      <Router />
    </CustomizationProvider>
  );
}