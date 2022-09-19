import { FC } from "react";
import { createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import { SkeletonTheme } from "react-loading-skeleton";

interface IPropsLayout {
  children?: React.ReactNode;
}

const Layout: FC<IPropsLayout> = ({ children }) => {
  const theme = createTheme({ palette: { primary: { main: "#0b4f81" } } });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#3e79a3" highlightColor="#EDF4FF">
          <Navbar />
          {children}
        </SkeletonTheme>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
