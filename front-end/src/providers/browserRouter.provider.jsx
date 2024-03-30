import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BrowserRouterProvider({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
