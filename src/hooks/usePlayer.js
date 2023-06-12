import { useContext } from "react";
import { PlayerContext } from "../contexts/player";

export default function usePlayer() {
    const context = useContext(PlayerContext)

    return context
}