import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import {ThemeProvider, CssBaseline, createTheme} from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {Layout} from "./components";
import {
  Dashboard,
  EditProfile,
  Auth,
  Restaurants,
  RestaurantRequests,
  AddRestaurant,
  Menu,
  Orders,
  Deliveries
} from "./pages";
import {themeSettings} from "./theme";
import Bookings from "./pages/Bookings";


function App() {

  const mode = useSelector((state)=> state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
              <Route path="/auth/:authType?" element={ <Auth/> } />
              <Route element={ <Layout /> }>
                <Route path="/" element={ <Navigate to="/auth/login" replace={true} /> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
                <Route path="/menu" element={ <Menu/> } />
                <Route path="/bookings" element={ <Bookings/> } />
                <Route path="/reviews" element={ <Dashboard/> } />
                <Route path="/orders" element={ <Orders/> } />
                <Route path="/delivery" element={ <Deliveries/> } />
                <Route path="/restaurants" element={ <Restaurants/> } />
                <Route path="/edit-profile" element={ <EditProfile/> } />
                <Route path="/restaurants/requests" element={ <RestaurantRequests/> } />
                <Route path="/restaurants/add" element={ <AddRestaurant/> } />
            </Route>
              {/*<Route path="/dashboard" element={ <Dashboard/> } />*/}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
