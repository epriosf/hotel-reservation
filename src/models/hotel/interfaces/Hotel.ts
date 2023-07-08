export interface Hotel {
  id: string
  name: string
  location: string
  phone: string
  website: string
  rate: number
  weekdayPrice: BookingPrice
  weekendPrice: BookingPrice
}
export interface BookingPrice {
  regularPrice: number
  rewardPrice: number
}
export interface HotelCost {
  hotel: Hotel
  price: number
}
