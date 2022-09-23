import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import { FC, ReactNode, useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import { store } from "../../../store/redux";

export const MeinProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({ palette: { primary: { main: "#0b4f81" } } });
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        <SkeletonTheme baseColor="#3e79a3" highlightColor="#EDF4FF">
          {children};
        </SkeletonTheme>
        {/* </ThemeProvider> */}
      </Provider>
    );
  }
};
