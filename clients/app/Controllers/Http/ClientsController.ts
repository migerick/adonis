// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ request, response }) {
    const page = request.input('page', 1)
    const perPage = 10

    const posts = await Client.query().paginate(page, perPage)

    return response.ok(posts)
  }

  public async store({ request, response }) {
    const payload: Client = await request.validate({ schema: Client.validator })
    console.log(payload)

    const client: Client = new Client()
    client.name = payload.name
    client.surname = payload.surname
    client.motherSurname = payload.motherSurname
    client.birthdate = new Date(payload.birthdate)

    await client.save()

    // const client: Client = await Client.create(payload)
    console.log("+++++++++++++++++++++++++++++++++++++++++++==",client)
    return response.ok(client)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const client: Client = await Client.findOrFail(id)
    if (!client) {
      return response.notFound({ message: 'Post not found' })
    }

    return response.ok(client)
  }

  public async update({ request, params, response }) {
    const payload: Client = await request.validate({ schema: Client.validator })

    const { id }: { id: Number } = params

    const client: Client = await Client.findOrFail(id)
    if (!client) {
      return response.notFound({ message: 'Post not found' })
    }

    payload.birthdate = new Date(payload.birthdate)
    client.merge(payload)
    await client.save()

    await client.save()

    return response.ok(client)
  }

  public async destroy({ params, response }) {
    const { id }: { id: Number } = params

    const client: Client = await Client.findOrFail(id)
    if (!client) {
      return response.notFound({ message: 'Post not found' })
    }

    await client.delete()

    return response.ok({ message: 'Post deleted successfully.' })
  }
}
