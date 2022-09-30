import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerScore } from "./selectors";

export function PlayerScore({ playerId, playerName }) {

  const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId));
  const score = useSelector(selectPlayerScore(playerId));

  return (
      <div className="player-score">
          <p>{playerName}</p>
          <p>{(hasAdvantage ? "Avantage " : "") + score}</p>
      </div>
  );
}
