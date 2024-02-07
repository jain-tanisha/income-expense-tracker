import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDashboard from "./components/Dashboard/AccountDashboard";
import AccountDetails from "./components/Dashboard/AccountDetails";
import AddAccount from "./components/Forms/AddAccount";
import AddTransaction from "./components/Forms/AddTransaction";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/add-transaction/:id" element={<AddTransaction />} />
        <Route exact path="/dashboard" element={<AccountDashboard />} />
        <Route
          exact
          path="/account-details/:accountID"
          element={<AccountDetails />}
        />
        <Route
          exact
          path="/dashboard/accounts/create"
          element={<AddAccount />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
