import { useDispatch } from "react-redux";

export function PlayPauseButton() {
  const dispatch =  useDispatch();

  return <button onClick={() => {
  dispatch({ type: "playPause" })
  }} >Pause /Reprendre</button>
}
