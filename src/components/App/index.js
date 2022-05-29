import { Routes, Route, Navigate } from "react-router-dom";

import { useUserContext } from "context/user";
import Layout from "components/Layout";
import ListPage from "pages/ListPage";
import AccountPage from "pages/AccountPage";

const App = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Routes>
        {/* User needs to sign up in order to view the ListPage */}
        <Route
          path="/"
          element={user ? <ListPage /> : <Navigate to="/account" />}
        />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
