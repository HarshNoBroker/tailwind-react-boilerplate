import logo from "./logo.svg";
import "./App.css";
import Example from "./Menu";
import React from "react";
import MessageListComponent from "./Messages/MessageListComponent";
import PostMessageComponent from "./Messages/PostMessageComponent";
import { MessageContextProvider } from "./ContextProvider/MessageContextProvider";

function App() {
  const [messageList, setMessageList] = React.useState([]);
  return (
    <div className="App">
      <PostMessageComponent messageList={messageList} setMessageList={setMessageList}/>
      <MessageListComponent messageList={messageList} setMessageList={setMessageList}/>
    </div>
  );
}

export default App;
