/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MfUsers {
    }
}
declare global {
    interface HTMLMfUsersElement extends Components.MfUsers, HTMLStencilElement {
    }
    var HTMLMfUsersElement: {
        prototype: HTMLMfUsersElement;
        new (): HTMLMfUsersElement;
    };
    interface HTMLElementTagNameMap {
        "mf-users": HTMLMfUsersElement;
    }
}
declare namespace LocalJSX {
    interface MfUsers {
        "onOutClickedItem"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "mf-users": MfUsers;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mf-users": LocalJSX.MfUsers & JSXBase.HTMLAttributes<HTMLMfUsersElement>;
        }
    }
}
