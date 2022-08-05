import axios from "axios";

export async function getData() {
    const user1 = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    console.log("user", user1, "post", post1);
}

getData();