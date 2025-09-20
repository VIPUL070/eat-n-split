import { useState } from "react";
import Button from './components/Button'
import SplitBill from "./components/SpiltBill";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends , setFriends] = useState(initialFriends);
  const [isOpen , setOpen] = useState(false)
  const [selectFriend , setSelectFriend] = useState(null);

  function toggleBtn(){
    setOpen(!isOpen);
  }

  function handleAddFriend(friend){
    setFriends(friends =>  [...friends , friend]);
    setOpen(false);
  }

  function handleSelect(friend){
     setSelectFriend(friend)
  }

  function handleSplitBill(value){
    console.log(value)

    setFriends((friends) => 
      friends.map((friend) => 
      friend.id === selectFriend.id  
    ? {...friend , balance : friend.balance + value} 
    : friend 
    ))

    setSelectFriend(null);
    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelect={handleSelect} />

        {isOpen && <AddFriend onAddFriend={handleAddFriend}/> }
        <Button onClick={toggleBtn}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>

      </div>
        {selectFriend && <SplitBill  selectFriend={selectFriend} onSplitBill={handleSplitBill} /> }
    </div>
  );
}

export default App
