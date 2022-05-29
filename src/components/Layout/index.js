import Navigation from "components/Navigation";
import { GlobalStyles, LayoutWrapper } from "components/Layout/styles";

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
