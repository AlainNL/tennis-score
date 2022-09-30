export const selectPlayerHasAdvantage = (playerId) => {
  return (state) => state.advantage === playerId;
};

export const selectPlayerScore = (playerId) => {
  return (state) => state[playerId];
};


export const selectDisplayText = (state) => {
  if (state.winner) {
    if (state.winner === "player1") {
      return "Joueur 1 gagné";
    } else {
      return "Joueur 2 gagne";
    }
  } else if (state.playing === false) {
    return <p className="display">C'est la pause</p>;
  } else {
    let text = "Le score est: " + state.player1 + " - " + state.player2;
    if (state.advantage) {
      if (state.advantage === "player 1") {
        text += "avantage joueur 1";
      } else {
        text += "avantage joueur 2";
      }
    }
    return text;
    }
  };

export const selectPlayerPoints = (playerId) => {
  return (state) =>
    state.history.filter((item) => item.winner === playerId).length;
};
