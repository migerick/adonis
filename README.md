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

In each microservice run the following command:

```bash
node ace serve --watch
```

## Usage

- Run migrations

```bash
node ace migration:run
```

- Run seeds

```bash
node ace db:seed
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

- Run migrations

```bash
docker-compose exec client node ace migration:run
```

- Run seeds

```bash
docker-compose exec client node ace db:seed
```

## Routes
Client routes

| Method | Route | Description |
| --- | --- | --- |
| GET | /clients | Get all clients |
| GET | /clients/?page=1 | Get all clients with pagination |
| GET | /clients/:id | Get a client by id |
| POST | /clients | Create a client |
| PUT | /clients/:id | Update a client by id |
| DELETE | /clients/:id | Delete a client by id |

Data analysis routes

| Method | Route | Description |
| --- | --- | --- |
| GET | /data-analysis | Get all data analysis |


## API Documentation
- [Postman](https://elements.getpostman.com/redirect?entityId=8084707-7c29bb23-86fc-4320-847b-d73cc416452d&entityType=collection)
- [Swagger](https://app.swaggerhub.com/apis-docs/migerick/promart-challenge/1.0.0)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
- [Miguel Flores](https://www.linkedin.com/in/miguelflores-ing/)
