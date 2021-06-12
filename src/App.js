import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Header from './Header';
import CardComponent from './Card';
import './App.css';

const base_url = "http://message-list.appspot.com/";

function App() {
  const [messages, setMessages] = useState([]);
  const [pageToken, setPageToken] = useState();

  const fetchMessages = () => {
    const fetch_url = !pageToken ? base_url + "messages" : base_url + "messages" + "?pageToken=" + pageToken; 
    fetch(fetch_url)
    .then(res => res.json())
    .then(response => {
      setPageToken(response.pageToken);
      setMessages(messages.concat(response.messages));
    })
    .catch(err=> console.log(err));
  };

  useEffect(() => fetchMessages(), []);

  const deleteMessage = (id) => {
    setMessages(messages.filter((message, index) => index !== id));
  }

  return (
    <React.Fragment>
      <Header />
      <div className="cards-container">
        <InfiniteScroll
            dataLength={messages ? messages.length : 0}
            next={fetchMessages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
          {messages && messages.map((message, index) => <CardComponent message={message} id={index} key={index} deleteMessage={deleteMessage}/>)}
        </InfiniteScroll>
      </div>
    </React.Fragment>
  );
}

export default App;
