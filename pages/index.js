import React, { useContext, useState } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const router = useRouter();
  const { username, setUsername, secret, setSecret, myName } =
    useContext(Context);

  function onSubmit(e) {
    e.preventDefault();
    if (!username || !secret) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "95eb7d2f-26ed-488d-874b-974ed5ee34a7" } }
      )
      .then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Text Me</div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
