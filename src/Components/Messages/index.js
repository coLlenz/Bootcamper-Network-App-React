import React from 'react'
import css from './message.module.css'
import io from "socket.io-client"

const connection = io("http://localhost:5000")



const Messages = () => {


    var socket = io()
    const button = document.querySelector("button");
    const ul = document.querySelector("ul");
    const message = document.querySelector("#m")
    
function handleClick(e) {
e.preventDefault();
socket.emit("chat message", message.value);
console.log(message.value)
        }

    socket.on("chat message", displayMsg);
    function displayMsg(msg) {
        const li = document.createElement("li");
        li.innerText = msg;
        ul.appendChild(li)
    }


    return (
        <div className={css.div}>
           <ul id={css.messages}></ul>
    <form action="">
      <input id={css.m} autocomplete="off" /><button onSubmit={() => {handleClick()}}>Send</button>
    </form>
        </div>
    )
    }

export default Messages