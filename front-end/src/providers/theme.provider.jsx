import { ThemeProvider as NextThemesProvider } from "next-themes";

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
