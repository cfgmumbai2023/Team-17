import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import AddStudent from "scenes/addStudent";
import ViewGroups from "scenes/viewGroups";
import UpdateStudents from "scenes/updateStudents";
import Admin from "scenes/admin";
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
              <Route path="/addStudent" element={<AddStudent />} />
              <Route path="/addTeacher" element={<AddTeacher />} />
              <Route path="/globalAnalytics" element={<GroupAnalytics />} />
              <Route path="/viewGroups" element={<ViewGroups />} />
              <Route path="/updateStudentPerformance" element={<UpdateStudents />} />
              <Route path="/admin" element={<Admin />} />
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
