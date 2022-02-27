import { CustomizationProvider } from './context/Customization';
import Header from './components/Header';
import Router from './components/Router';

export default function App() {
  return (
    <CustomizationProvider>
      <Header />
      <Router />
    </CustomizationProvider>
  );
}