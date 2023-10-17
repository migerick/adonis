import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Client from 'App/Models/Client'

export default class extends BaseSeeder {
  public async run() {
    await Client.createMany([
      {
        name: 'Juan',
        surname: 'Perez',
        motherSurname: 'Gonzalez',
        birthdate: new Date("1990-02-01")
      },
      {
        name: 'Maria',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1995-10-01")
      },
      {
        name: 'Pedro',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("2000-02-01")
      },
      {
        name: 'Jose',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1997-02-01")
      },
      {
        name: 'Luis',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1998-02-01")
      },
      {
        name: 'Ana',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1996-02-01")
      },
      {
        name: 'Luisa',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("2002-02-01")
      },
      {
        name: 'Rosa',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1973-02-01")
      },
      {
        name: 'Ramon',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1986-02-01")
      },
      {
        name: 'Raul',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1979-02-01")
      },
      {
        name: 'Ricardo',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1980-02-01")
      },
      {
        name: 'Roberto',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1970-02-01")
      },
      {
        name: 'Erick',
        surname: 'Gonzalez',
        motherSurname: 'Perez',
        birthdate: new Date("1990-07-01")
      }
    ])
  }
}
