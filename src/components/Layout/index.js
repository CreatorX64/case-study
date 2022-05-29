import { GlobalStyles, LayoutWrapper } from "components/Layout/styles";
import Navigation from "components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <LayoutWrapper>
        <main>{children}</main>
        <Navigation />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
