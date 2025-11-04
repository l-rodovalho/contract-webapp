import "./App.css";
import { ThemeProvider } from "./components/utils/theme-provider";
import Header from "./components/utils/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/screens/home-screen";
import Customers from "./components/screens/customers-screen";
import Contracts from "./components/screens/contracts-screen";
import Sidebar from "./components/utils/sidebar";
import Settings from "./components/screens/settings-screen";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 min-w-0 overflow-y-auto">
              <Routes>
                <Route element={<HomeScreen />} path="/" />
                <Route element={<Customers />} path="/customers" />
                <Route element={<Contracts />} path="/contracts" />
                <Route element={<Settings />} path="/settings" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
