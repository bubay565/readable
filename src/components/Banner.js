import React from 'react'

export default function Banner() {
  return(
    <div className="header">

    </div>
  )
}
categories = {
    "categories": [
        {
            "name": "react",
            "path": "react"
        },
        {
            "name": "redux",
            "path": "redux"
        },
        {
            "name": "udacity",
            "path": "udacity"
        }
    ]
}

var posts = [
    {
        "id": "8xf0y6ziyjabvozdd253nd",
        "timestamp": 1467166872634,
        "title": "Udacity is the best place to learn React",
        "body": "Everyone says so after all.",
        "author": "thingtwo",
        "category": "react",
        "voteScore": 6,
        "deleted": false
    },
    {
        "id": "6ni6ok3ym7mf1p33lnez",
        "timestamp": 1468479767190,
        "title": "Learn Redux in 10 minutes!",
        "body": "Just kidding. It takes more than 10 minutes to learn technology.",
        "author": "thingone",
        "category": "redux",
        "voteScore": -5,
        "deleted": false
    }
]

var action = {
  "id": "6ni6ok3ym7mf1p33lnezxxxxx",
  "timestamp": 1468479767190,
  "title": "Learn Redux in 30 minutes!",
  "body": "Just kidding. It takes more than 30 minutes to learn technology.",
  "author": "thingone",
  "category": "redux",
  "voteScore": 0,
  "deleted": false
}

function reduceUp(posts, action){
  var nuArr = [];
  posts.map(post => {
    if(post.id === action.id){
      post.body = action.body;
      post.title = action.title;
    }
    return post;
    nuArr.push(post);
  })
  return nuArr;
}

function reduceNew(state, action){
  return state.concat(action);
}
const reducedNew = reduceNew(posts, action);
const reducedUp = reduceUp(posts, action);

console.log(reducedNew);
console.log(reducedUp);
