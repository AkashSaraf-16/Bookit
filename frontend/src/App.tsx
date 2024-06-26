import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SingIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";

function App() {

  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>
            Home page
          </p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>
            <Search/>
          </p>
        </Layout>} 
        />
        <Route path="/detail/:hotelId" element={<Layout><Detail /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/sign-in" element={<Layout><SingIn /></Layout>} />
        {isLoggedIn && <>
          <Route
            path="hotel/:hotelId/booking"
            element=<Layout>
              <Booking />
            </Layout>
          />
          <Route
            path="add-hotel"
            element=<Layout>
              <AddHotel />
            </Layout>
          />
          <Route
            path="my-hotels"
            element=<Layout>
              <MyHotels />
            </Layout>
          />
          <Route
            path="/edit-hotel/:hotelId"
            element={
              <Layout>
                <EditHotel />
              </Layout>
            }
          />
        </>
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
