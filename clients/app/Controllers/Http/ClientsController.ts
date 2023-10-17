// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({request, response}) {
    try {
      const page = request.input('page')

      let clients: Client[]
      if (page) {
        const perPage = 10
        clients = await Client.query().paginate(page, perPage)
      } else {
        clients = await Client.all()
      }

      return response.ok(clients)
    } catch (e) {
      return response.internalServerError({message: e.message})
    }
  }

  public async store({request, response}) {
    try {
      const payload: Client = await request.validate({schema: Client.validator})

      const client: Client = new Client()
      client.name = payload.name
      client.surname = payload.surname
      client.motherSurname = payload.motherSurname
      client.birthdate = new Date(payload.birthdate)

      await client.save()

      return response.ok(client)
    } catch (e) {
      return response.internalServerError({message: e.message})
    }
  }

  public async show({params, response}) {
    try {
      const {id}: { id: Number } = params

      const client: Client = await Client.findOrFail(id)
      if (!client) {
        return response.notFound({message: 'Post not found'})
      }

      return response.ok(client)
    } catch (e) {
      return response.internalServerError({message: e.message})
    }
  }

  public async update({request, params, response}) {
    try {
      const payload: Client = await request.validate({schema: Client.validator})

      const {id}: { id: Number } = params

      const client: Client = await Client.findOrFail(id)
      if (!client) {
        return response.notFound({message: 'Post not found'})
      }

      payload.birthdate = new Date(payload.birthdate)
      client.merge(payload)
      await client.save()

      await client.save()

      return response.ok(client)
    } catch (e) {
      return response.internalServerError({message: e.message})
    }
  }

  public async destroy({params, response}) {
    try {
      const {id}: { id: Number } = params

      const client: Client = await Client.findOrFail(id)
      if (!client) {
        return response.notFound({message: 'Post not found'})
      }

      await client.delete()

      return response.ok({message: 'Client deleted'})
    } catch (e) {
      return response.internalServerError({message: e.message})
    }
  }
}
