import { useSelector } from "react-redux";

export function Display () {
const gamIsPlaying = useSelector((state) => state.playing);

return <p>{gamIsPlaying ? "Jeu en cours" : "C'est la pause"}</p>;
}
