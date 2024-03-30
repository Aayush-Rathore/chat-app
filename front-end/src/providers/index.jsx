import BrowserRouterProvider from "./browserRouter.provider";
import ThemeProvider from "./theme.provider";

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  return (
    <BrowserRouterProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </BrowserRouterProvider>
  );
};

export default Provider;
