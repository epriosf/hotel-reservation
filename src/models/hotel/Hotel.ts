export interface Hotel {
  id: string
  name: string
  location: string
  phone: string
  website: string
  rate: number
  weekdayPrice: number[]
  weekendPrice: number[]
  calculatePrice(): number
  getHotel(): void
}
