import { GlobalStyles, LayoutWrapper } from "components/Layout/styles";
import Navigation from "components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <LayoutWrapper>
        <Navigation />
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
