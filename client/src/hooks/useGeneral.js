import { useContext } from "react";
import { GeneralContext } from "../contexts/general";

export default function useGeneral() {
    const context = useContext(GeneralContext)

    return context
}