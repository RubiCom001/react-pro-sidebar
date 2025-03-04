/// <reference types="react" />
import { CSSObject } from '@emotion/styled';
interface StyledMenuPrefixProps {
    firstLevel?: boolean;
    collapsed?: boolean;
    transitionDuration?: number;
    rtl?: boolean;
    rootStyles?: CSSObject;
}
export declare const StyledMenuPrefix: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledMenuPrefixProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
