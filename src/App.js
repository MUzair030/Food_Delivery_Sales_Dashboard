import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import {ThemeProvider, CssBaseline, createTheme} from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {Layout} from "./components";
import {Dashboard} from "./pages";
import {themeSettings} from "./theme";
import EditProfile from "./pages/EditProfile";


function App() {

  const mode = useSelector((state)=> state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Navigate to="/dashboard" replace={true} /> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
                <Route path="/menu" element={ <Dashboard/> } />
                <Route path="/bookings" element={ <Dashboard/> } />
                <Route path="/reviews" element={ <Dashboard/> } />
                <Route path="/orders" element={ <Dashboard/> } />
                <Route path="/delivery" element={ <Dashboard/> } />
                <Route path="/restaurants" element={ <Dashboard/> } />
                <Route path="/edit-profile" element={ <EditProfile/> } />
            </Route>
              {/*<Route path="/dashboard" element={ <Dashboard/> } />*/}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
