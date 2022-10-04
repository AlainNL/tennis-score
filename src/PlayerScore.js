import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerScore, selectPointBeforeWin } from "./selectors";

export function PlayerScore({ playerId, playerName }) {

  const score = useSelector(selectPlayerScore(playerId));
  const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId));
  const poinsBeforeWin = useSelector(selectPointBeforeWin(playerId));

  return (
      <div className="player-score">
          <p>
            {playerName}
            {poinsBeforeWin === null
              ? ""
              : ` (encore ${poinsBeforeWin} ${poinsBeforeWin > 1 ? "points" : "point"
            })`}
          </p>
          <p>{(hasAdvantage ? "Avantage " : "") + score}</p>
      </div>
  );
}
