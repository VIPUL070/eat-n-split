import Button from "./Button";

function FriendList({friends , onSelect}) {
  return (
    <ul>
      {friends.map((friend) => {
        return(
        <Friend friend={friend} key={friend.id} onSelect={onSelect} />
        );
      })}
    </ul>
  );

}

function Friend({ friend , onSelect }) {
  return (
    <li >
      <img src={friend.image} alt="friend-image"/>
      <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className="red">You owe {friend.name} {(friend.balance)*-1}</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        {friend.balance > 0 && <p className="green">{friend.name} owes you {friend.balance}</p>}
        <Button onClick={() => onSelect(friend)} >Select</Button>
    </li>
  );

}

export default FriendList