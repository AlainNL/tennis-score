import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { PointScoredButton } from "./PointScoredButton";
import { ResetButton } from "./ResetButton";

export default function App() {
  return (
    <div>
        <Display />
        <div className="buttons-row">
          <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
          <PointScoredButton playerId="player2">Point joueur 2</PointScoredButton>
        </div>
        <div className="buttons-row">
          <ResetButton />
          <PlayPauseButton />
        </div>
    </div>
  );
}
