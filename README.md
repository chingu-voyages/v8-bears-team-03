![devbev logo](https://raw.githubusercontent.com/chingu-voyages/v8-bears-team-03/dev/client/src/images/og-image.jpg)

# devbev

Developer focused social media platform that allows developers to share their current beverage choice.

## Setup a Development Environment

To get your development environment running:

1. Install and run MongoDB. See documentation at [MongoDB](https://www.mongodb.com/download-center/community)

2. Clone this repository

```
    git clone git@github.com:chingu-voyages/v8-bears-team-03.git
```

3. Run the setup shell script

```
    cd v8-bears-team-03/
    sh setup
```

##### Steps below are run with the setup script in the step above.

4. Start your development environment

```
    # from the client folder
    npm start
    # from the api folder
    npm start
```

5. Setup variables config.json

```
    # from the api folder
    cp config_example.json config.json
```

6. Seed the database with test data

```
    # from the root folder
    node ./api/utilities/seed.js
```

7. Run tests

```
    # from the api folder
    npm run test
```

## Built With

- [React](https://reactjs.org/) - Front-end JavaScript framework
- [Express](https://expressjs.com/) - NodeJS framework
- [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Attribution

- devbev logo - [ICONFINDER](https://www.iconfinder.com/) [(license)](https://creativecommons.org/licenses/by-sa/3.0/)

## Authors

- [johnmeade-webdev](https://github.com/johnmeade-webdev) - _Contributor & Project Manager_
- [Jc7j](https://github.com/Jc7j) - _Contributor_
- [SDBowen](https://github.com/SDBowen) - _Contributor_
- [starrs33d](https://github.com/starrs33d) - _Contributor_
