import "styled-components";
// import type { AppTheme } from "./index";
import type { AppTheme } from "./createTheme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
