import { useState } from "react";
import Button from "./Button";

function AddFriend({onAddFriend}){
  const [newFriend , setNewFriend] = useState('');
  const [newImage , setNewImage] = useState('https://i.pravatar.cc/48');

  function handleNewFriend(e){
    setNewFriend(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    const id = crypto.randomUUID();

    if(!newFriend || !newImage) return;

    const newFriends = {
       id,
       name : newFriend,
       image : `${newImage}?=${id}`, 
       balance : 0
    }
     
    onAddFriend(newFriends);

    setNewFriend('');
    setNewImage('https://i.pravatar.cc/48');
  }

  return(
    <>
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧍Friend name</label>
      <input type="text" value={newFriend} onChange={handleNewFriend}/>

      <label>🌄image URL</label>
      <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>

      <Button>Add</Button>
    </form>
    </>
  );
}

export default AddFriend