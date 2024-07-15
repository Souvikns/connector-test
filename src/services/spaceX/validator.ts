import { Ajv } from 'ajv'

export default class Validator {
  private scheme = {
    type: 'object',
    additionalProperties: true,
    required: ['id', 'company', 'country', 'flickr_images', 'cost_per_launch'],
    properties: {
      id: {
        type: 'string',
      },
      company: {
        type: 'string',
      },
      country: {
        type: 'string',
      },
      flickr_images: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      cost_per_launch: {
        type: 'number',
      },
    },
  }
  validate: Function
  constructor() {
    const ajv = new Ajv()
    this.validate = ajv.compile(this.scheme)
  }
}
