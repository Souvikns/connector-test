import axios from 'axios'
import { Rocket, RocketResponse } from './types'
import Validator from './validator'
import { RocketsError } from './error'

export class SpaceXService {
  private validator = new Validator()

  async getRocketById(id: string) {
    const client = axios.create()

    try {
      const { data } = await client.get<RocketResponse>(
        `https://api.spacexdata.com/v4/rockets/${id}`
      )
      const isValid = this.validator.validate(data)
      if (!isValid) {
        throw new RocketsError('Invalid Response', 500)
      }
      const rocket = this.mapRocketResponse(data)
      return rocket
    } catch (error) {
      throw new RocketsError('Invalid spaceX API response', 500)
    }
  }

  private mapRocketResponse(response: RocketResponse): Rocket {
    const { id, company, country, flickr_images, cost_per_launch } = response
    return {
      id,
      company: company,
      country,
      main_image: flickr_images?.[0] || '',
      cost_per_launch: {
        amount: cost_per_launch,
        currency: 'USD',
      },
    }
  }
}
