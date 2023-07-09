import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import AddStudent from "scenes/addStudent";
import ViewGroups from "scenes/viewGroups";
import UpdateStudents from "scenes/updateStudents";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";

import StudentSearch from "scenes/searchStudent";

import AddTeacher from "scenes/addTeacher";
import GroupAnalytics from "scenes/groupAnalytics";
import LoginPage from "LandingPage";
import AddSchool from "scenes/addSchool";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          

          <Routes>
          <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/addStudent" replace />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addStudent" element={<AddStudent />} />
              <Route path="/addTeacher" element={<AddTeacher />} />
              <Route path="/globalAnalytics" element={<GroupAnalytics />} />
              <Route path="/viewGroups" element={<ViewGroups />} />
              <Route path="/updateStudentPerformance" element={<UpdateStudents />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/addSchool" element={<AddSchool />} />
              <Route path="/studentSearch" element={<StudentSearch />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
