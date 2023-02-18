import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Siderbar";
import Dashboard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Contacts from "./Scenes/contacts";
import Bar from "./Scenes/bar";
import Form from "./Scenes/form";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import FAQ from "./Scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
