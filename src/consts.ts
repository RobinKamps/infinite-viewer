import styled from "css-styled";
import { InfiniteViewerOptions } from "./types";

export const injector = styled(`
{
    position: relative;
    display: block;
    overflow: auto;
}
:host::-webkit-scrollbar {
    display: none;
}
`);

/**
 * @memberof InfiniteViewer
 */
export const CLASS_NAME = injector.className;

/**
 * @memberof InfiniteViewer
 */
export const OPTIONS = [
    // ignore target, container,
    "margin",
    "threshold",
    "zoom",
    "scrollArea",
    "rangeX",
    "rangeY",
] as const;

/**
 * @memberof InfiniteViewer
 */
export const PROPERTIES = [
    "margin",
    "threshold",
    "zoom",
    "rangeX",
    "rangeY",
] as const;

export const OPTION_TYPES: { [key in keyof InfiniteViewerOptions]: any } = {
    margin: Number,
    threshold: Number,
    zoom: Number,
    scrollArea: Object,
    rangeX: Array,
    rangeY: Array,
};

/**
 * @memberof InfiniteViewer
 */
export const EVENTS = [
    "scroll",
] as const;

/**
 * @memberof InfiniteViewer
 */
export const METHODS = [
    "getScrollLeft",
    "getScrollTop",
    "getScrollWidth",
    "getScrollHeight",
    "scrollTo",
    "scrollBy",
] as const;
