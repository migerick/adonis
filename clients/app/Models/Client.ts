import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { schema } from '@adonisjs/validator/build/src/Schema'
import { rules } from '@adonisjs/validator/build/src/Rules'
import {beforeSave} from "@adonisjs/lucid/build/src/Orm/Decorators";
import { isBefore, differenceInYears } from 'date-fns'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public surname: string

  @column({ columnName: 'mother_surname' })
  public motherSurname: string

  @column()
  public birthdate: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static get validator() {
    return schema.create({
      name: schema.string({ trim: true }, [rules.required(), rules.maxLength(100)]),
      surname: schema.string({ trim: true }, [rules.required(), rules.maxLength(100)]),
      motherSurname: schema.string.optional({ trim: true }, [rules.maxLength(100)]),
      birthdate: schema.date({}, [rules.required()]),
    })
  }

  @beforeSave()
  public static async validateAge(client: Client) {
    const now = new Date()
    if (isBefore(client.birthdate, now) && differenceInYears(now, client.birthdate) >= 18) {
      return true
    } else {
      throw new Error('the client must be at least 18 years old.')
    }
  }
}
