import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { MeinProviders } from "../Providers/MeinProviders";

interface IPropsLayout {
  children?: React.ReactNode;
}

const Layout: FC<IPropsLayout> = ({ children }) => {
  return (
    <MeinProviders>
      <Navbar />
      {children}
    </MeinProviders>
  );
};

export default Layout;
