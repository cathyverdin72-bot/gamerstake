const bets = [];

function createBet(){
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;
  const amount = document.getElementById("amount").value;

  if(!player1 || !player2 || !amount){
    alert("Please fill all fields");
    return;
  }

  const bet = {
    id: Date.now(),
    player1,
    player2,
    amount
  };

  bets.push(bet);
  renderBets();

  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  document.getElementById("amount").value = "";
}

function renderBets(){
  const betList = document.getElementById("betList");
  betList.innerHTML = "";

  bets.forEach(bet => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${bet.player1}</strong> vs <strong>${bet.player2}</strong><br/>
      Bet Amount: $${bet.amount}
    `;
    betList.appendChild(li);
  });
}
