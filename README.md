<h3 align="center">
  ignite lab - Notification service
</h3>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<img alt="Ignite Lab" src="https://user-images.githubusercontent.com/17517028/208758320-ca1c868d-46fb-4e1f-b6d3-43872429a4a5.png" />

# 🔔 About this project

The purpouse of this project is handle notifications, it basicaly implements the following use cases:

- Create a notification
- Mark a notification as read or unread
- Get notifications from a recipient
- Count the notifications from a recipient

This application was built using microservice architecture. And as a opportunity to learn more about data streams, it works with Apache Kafka. 


## Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
 </p>

### Apache Kafka

Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation.

To learn more about Kafka, check the [oficial site](https://kafka.apache.org/intro).
 
## How to run it?

Clone the repository to your machine. The project contains two folders:

- kafka-producer - the Kafka producer
- notifications-service - the service (Kafka consumer)

The project setup must be done for both directories.

Install the dependencies:

```bash
$ npm install
```

Both folders contains a `.env` with sensitive information, as the credentials for the Kafka cluster.

Copy the `.env.example` file and change it's content to your environment. 

*kafka-producer*

After the creation of the `.env` file, the application is ready to run.

It will dispatch a event, a new notification, which will be received by the consumer. You can change the message content and do it how many times you want.

```bash
$ node producer.js
```

*notifications-service*

After the creation of the `.env` file, it's time to setup the database. So run the migration:

```bash
$ npx prisma migrate dev
```

If the configuration is ready and connected to the database, let's start the application:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API routes

Inside server folder, there is a file called `Notification-routes.json`. This file contains all the requests provided by the API.

Import it on Insomnia and it's ready to use.

# 📝 License

This project is under MIT license.
