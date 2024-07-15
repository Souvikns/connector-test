export interface RocketResponse {
  id: string
  company: string
  country: string
  flickr_images: string[]
  cost_per_launch: number
  message?: string
}

export interface Rocket {
  id: string
  company: string
  country: string
  main_image: string
  cost_per_launch: {
    amount: number
    currency: string
  }
}
