import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./Categories/CategoryList.js"
import { PostList } from "./Posts/PostList";
import { UserPostList } from "./Posts/UserPostList";
import { PostDetails } from "./Posts/PostDetail";

export default function ApplicationViews({ isLoggedIn }) {

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>
        <Route path="/categories"> 
        {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/posts">
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
          </Route>
        <Route path="/post/:postId(/d+)">
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
          </Route>

        <Route path="/myposts">
          {isLoggedIn ? <UserPostList /> : <Redirect to="/login" />}
          </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
};
