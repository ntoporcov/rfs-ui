import { extendTheme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
export declare const theme: Record<string, any>;
declare const RfsThemeProvider: (props: PropsWithChildren<{
    theme?: ReturnType<typeof extendTheme>;
}>) => import("react/jsx-runtime").JSX.Element;
export default RfsThemeProvider;
