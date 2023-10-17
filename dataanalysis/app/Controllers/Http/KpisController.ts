// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import axios, {AxiosResponse} from "axios";


interface Client {
  id: number
  name: string
  surname: string
  motherSurname: string
  birthdate: Date
}

interface Kpis {
  averageAge: number
  ageStdDeviation: number
}

export default class KpisController {
  public async index({response}) {
    try {
      const responseClient: AxiosResponse = await axios.get('http://localhost:3333/clients')
      const clients: Client[] = responseClient.data

      const averageAge: number = clients.reduce((accumulate: number, client: Client) => {
        const age = new Date().getFullYear() - new Date(client.birthdate).getFullYear()
        return accumulate + age
      }, 0) / clients.length

      const ageStdDeviation: number = Math.sqrt(clients.reduce((accumulate: number, client: Client) => {
        const age = new Date().getFullYear() - new Date(client.birthdate).getFullYear()
        return accumulate + Math.pow(age - averageAge, 2)
      }, 0) / clients.length)

      const kpis: Kpis = {
        averageAge: averageAge,
        ageStdDeviation: ageStdDeviation,
      }

      return response.ok(kpis)
    } catch (error) {
      return response.internalServerError({message: error.message})
    }
  }
}



