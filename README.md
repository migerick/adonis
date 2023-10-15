# Promart Challenge
Promart challenge, developed in AdonisJS as part of personal learning.

## Description project
This project is a challenge for Promart, it is developed in AdonisJS, it is a REST API that allows you to manage clients and reports of KPIs.
Both have microservices that allow you to manage the data of each one. 
- The client microservice allows you to manage the data of the clients, such as: 
  - name
  - surname (paternal surname)
  - mothers_surname (maternal surname)
  - birthdate. 
- The data analysis microservice allows you to manage the data of the KPIs, such as:
  - average_age (average age)
  - age_std_deviation (standard deviation of the age)

## Technologies used
- AdonisJS
- NodeJS
- MySQL
- Docker
- Docker Compose
- Git
- GitHub
- Postman
- AWS EC2

## Installation
- Clone the repository

```bash
# SSH
git clone git@github.com:migerick/adonis.git

# HTTPS
git clone https://github.com/migerick/adonis.git
```

- Install dependencies

```bash
npm install
```

- Create the .env file

```bash
cp .env.example .env
```

- Run the project

```bash
npm run dev
```

## Usage
- Create the database

```bash
npm run db:create
```

- Run migrations

```bash
npm run migration:run
```

- Run seeds

```bash
npm run seed
```

- Run the project

```bash
npm run dev
```

## Docker
- Build the image

```bash
docker-compose build
```

- Run the container

```bash
docker-compose up
```

- Create the database

```bash
docker-compose exec app npm run db:create
```

- Run migrations

```bash
docker-compose exec app npm run migration:run
```

- Run seeds

```bash
docker-compose exec app npm run seed
```

- Run the project

```bash
docker-compose exec app npm run dev
```

## Tests

```bash
npm run test
```

## Routes
Client routes

| Method | Route | Description |
| --- | --- | --- |
| GET | /clients | Get all clients |
| GET | /clients/:id | Get a client by id |
| POST | /clients | Create a client |
| PUT | /clients/:id | Update a client by id |
| DELETE | /clients/:id | Delete a client by id |

Data analysis routes

| Method | Route | Description |
| --- | --- | --- |
| GET | /data-analysis | Get all data analysis |


## API Documentation
- [Postman](https://documenter.getpostman.com/view/13263160/Tz5qZK7o)
- [Swagger](https://app.swaggerhub.com/apis-docs/migerick/promart-challenge/1.0.0)
- [AWS EC2](http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3333/docs)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
- [Miguel Flores](https://www.linkedin.com/in/miguelflores-ing/)
