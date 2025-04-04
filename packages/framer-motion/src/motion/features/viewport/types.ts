import { TargetAndTransition } from "../../../types"
import { RefObject } from "../../../utils/safe-react-types"
import { VariantLabels } from "../../types"

export type ViewportEventHandler = (
    entry: IntersectionObserverEntry | null
) => void

export interface ViewportOptions {
    root?: RefObject<Element | null>
    once?: boolean
    margin?: string
    amount?: "some" | "all" | number
}

export interface ViewportProps {
    whileInView?: VariantLabels | TargetAndTransition
    onViewportEnter?: ViewportEventHandler
    onViewportLeave?: ViewportEventHandler
    viewport?: ViewportOptions
}

export type ViewportState = {
    hasEnteredView: boolean
    isInView: boolean
}
