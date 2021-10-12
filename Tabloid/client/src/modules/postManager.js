import { getToken } from "./authManager";

const apiUrl = "/api/post";


export const getAllPost = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("An unknown error occurred while trying to get posts.");
          }
        });
      });
    };


    export const getPostByUserId = (id) => {
      return getToken().then((token) => {
        return fetch(`${apiUrl}/userpost/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("An unknown error occurred while trying to get posts.");
          }
        });
      });
    };