# ecom-eng-resource

This repository contains general development guidance on developing the project. Make sure you follow every conventions mentioned in this repo. Any points are subject to change on the basis of decisions among the team.

## GENERAL GUIDANCE

- provide a separate config file (or collect several config files into `config` folder) for any configurations
- _NEVER_ commit sensitive information to the repo, use environment variable / `.secret` file that is not committed to repository, so that we do not publish our sensitive credentials
- collect constants that are used in many files into separate (and obviously named n located)

## List of backend services

The services are proxied by kong as router, load balancer and authentication layer. All the services will be deployed through Docker and Kubernetes implementation. The services are:

- Kong: uses cassandra
- Product: uses Spring-Java and mysql (may use GRPC for between-microservice communication later on)
- User: uses Nodejs and MongoDb (may use GRPC for between-microservice communication later on)
  `tutorial: https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb`
- Transaction Service: Uses Go, Postgre and GRPC. Should implement mutex
- Recommendation system: uses python and mysql
- Search: uses GO/NodeJs and Elastic Search
- Chat : uses Firebase. Initial plan is to use it for CS (Customer Service) chat.
  `tutorial: https://medium.com/flutter-community/building-a-chat-app-with-flutter-and-firebase-from-scratch-9eaa7f41782e`
- Message Broker: ?

## Clients

- Mobile: Built with flutter
- Web: will implement WPA
