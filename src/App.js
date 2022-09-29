import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { PointScoredButton } from "./PointScoredButton";
import { ResetButton } from "./ResetButton";
import { PlayerScore } from "./PlayerScore";

export default function App() {
  return (
    <div>
        <Display />
        <PlayerScore playerId="Player1" playerName="Player 1" />
        <PlayerScore playerId="Player2" playerName="Player 2" />
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
