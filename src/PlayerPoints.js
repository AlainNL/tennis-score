import { useSelector } from "react-redux";
import { selectPlayerPoints } from "./selectors";

export function PlayerPoints({ playerId, playerName }) {
  const playerPoints = useSelector(selectPlayerPoints(playerId));

  return (
    <div className="player-games">
      <p>{playerName}</p>
      <span>
        {playerPoints === 0
          ? "Aucun jeu gagné"
          : playerPoints === 1
          ? "1 jeu gagné"
          : `${playerPoints} jeux gagnés`}
      </span>
    </div>
  );
}
