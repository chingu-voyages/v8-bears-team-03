# devbev

Developer focused social media platform that allows developers to share their current beverage choice.

## Setup a Development Environment

To get your development environment running:

1. Install MongoDB. See documentation at [MongoDB](https://www.mongodb.com/download-center/community)

2. Clone this repository

```
    git clone git@github.com:chingu-voyages/v8-bears-team-03.git
```

3. Install dependencies

```
    # from the root folder
    npm install --prefix client/ && npm install --prefix api/
```

4. Start your development environment

```
    # from the client folder
    npm start
    # from the api folder
    npm start
```

5. Seed the database with test data

```
    # from the root folder
    node ./api/utilities/seed.js
```

## Built With

- [React](https://reactjs.org/) - Front-end JavaScript framework
- [Express](https://expressjs.com/) - NodeJS framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Authors

- [johnmeade-webdev](https://github.com/johnmeade-webdev) - _Contributor & Project Manager_
- [Jc7j](https://github.com/Jc7j) - _Contributor_
- [SDBowen](https://github.com/SDBowen) - _Contributor_
- [starrs33d](https://github.com/starrs33d) - _Contributor_
