import Button from "./Button";
import { useState } from "react";

function SplitBill({selectFriend ,onSplitBill}) {
  const [totalBill , setTotalBill] = useState('');
  const [yourBill , setYourBill] = useState('');
  const [whoIsPaying , setWhoIsPaying] = useState("you");

  let friendBill = totalBill - yourBill

  function handleSubmit(e){
     e.preventDefault();

     if(!totalBill || !yourBill) return;
     
     onSplitBill(whoIsPaying === "you" ? friendBill : -yourBill);
     
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>

      <h2>SPLIT A BILL WITH {selectFriend.name}</h2>
      <label>💰Bill value</label>
      <input type="number" value={totalBill} onChange={(e) => setTotalBill(Number(e.target.value))}/>

      <label>🧍Your expense</label>
      <input type="number" value={yourBill} onChange={(e) => setYourBill(Number((e.target.value)) > totalBill ? yourBill : Number(e.target.value))}/>

      <label>🧍🧍{selectFriend.name} expense</label>
      <input type="text" value={friendBill} disabled/>

      <label>🤑Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button >Split Bill</Button>
    </form>
  );
}

export default SplitBill