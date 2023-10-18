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
cd clients
npm install

cd dataanalysis
npm install
```

- Create the .env file

Each microservice has its own .env file, you must copy the .env.example file and rename it to .env

```bash
cp .env.example .env
```

## Docker

- Run the container

Each microservice has its own docker-compose.yml file, you must run the following command in each microservice:


``Docker: Init database for then run migrations.``


```bash
docker-compose up
```

## Usage

In clients microservice, you must create the database and run the migrations and seeds.

- Run migrations

```bash
node ace migration:run
```

- Run seeds

```bash
node ace db:seed
```

- Run the project

In each microservice run the following command:

```bash
cd clients
node ace serve --watch

cd dataanalysis
node ace serve --watch
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
- [Swagger]()

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
- [Miguel Flores](https://www.linkedin.com/in/miguelflores-ing/)
