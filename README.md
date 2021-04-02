# Ima Miru

## Team Expectations

[Team expectations](https://docs.google.com/document/d/1-BP6pJGGFY257Gr6nUtwKtcV-lZshNnJbscVe1zi6fA/edit?usp=sharing)

## Schema

``` 
const Show = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    plot: { type: String, required: true },
    imgURL: { type: String, required: true }
  },
  { timestamps: true }
)
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    isAdmin: {trype: String, required: true},
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)
```

## Component Diagram

[Component Hierarchy](https://whimsical.com/anime-app-HD2Nfou3HbiM3ggBuLpDpH)

## Overview

Ima Miru (translates to "watch now") is an application where users can browse various anime shows and gather details on them. Users who sign up will be able to add a new show to the list of shows that are currently on the app. Users will also be able to save shows of interest in a section called Watchlist. Watchlist will display the shows that the user has saved as a reminder to check them out in the future.

## MVP

- Teamwork
- React Client (Front End) w/ at least 6 components
- Server Back End with full CRUD
- Authentication
- Styled with CSS (Flexbox and Grid)
- Media Queries for desktop and mobile
- Linting
- Deploy front end to Netlify
- Deploy front end to Heroku

## Post MVP

- Watchlist screen / Add to Watchlist button
- Sorting 
