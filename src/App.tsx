import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MedicalScreen from "./pages/MedicalScreen";
import Languages from "./pages/LanguageSelection";
import Services from "./pages/Services";
import TransitScreen from "./pages/TransitScreen";
import RiderInformation from "./pages/RiderInformation";
import FaresScreen from "./pages/FaresScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BannerProvider } from "./components/BannerContextProps";
import ServicesSpanish from "./pages/ServicesSpanish";
import Hospitals from "./pages/HospitalsPage";
import UnderConstruction from "./pages/UnderConstruction";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <BannerProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/Languages" element={<Languages />} />
            <Route path="/MedicalScreen" element={<MedicalScreen />} />
            <Route
              path="/Languages/Services/Transit"
              element={<TransitScreen />}
            />
            <Route
              path="/Languages/Services/Transit/Rider Information"
              element={<RiderInformation />}
            />
            <Route
              path="/Languages/Services/Transit/Fares"
              element={<FaresScreen />}
            />
            <Route path="/Languages/Services" element={<Services />} />
            <Route
              path="/Languages/Services/Alberta Heath"
              element={<MedicalScreen />}
            />
            <Route
              path="/Languages/Services/Alberta Heath/Hospitals"
              element={<Hospitals />}
            />
            <Route path="/ServicesSpanish" element={<ServicesSpanish />} />
            <Route
              path="/Languages/Services/Education"
              element={<UnderConstruction />}
            />
            <Route
              path="/Languages/Services/Job Assistance"
              element={<UnderConstruction />}
            />
            <Route
              path="/Languages/Services/Activities"
              element={<UnderConstruction />}
            />
            <Route
              path="/Languages/Services/Social Programs"
              element={<UnderConstruction />}
            />
            <Route
              path="/Languages/Services/Emergency Services"
              element={<UnderConstruction />}
            />
            <Route
              path="/Languages/Services/Housing"
              element={<UnderConstruction />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </BannerProvider>
  );
}
export default App;
