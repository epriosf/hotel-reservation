import { defineStore } from 'pinia'
import { getHotels } from '@/models/hotel/HotelService'
import { Hotel } from '@/models/hotel/Hotel'
export const useHotelStore = defineStore('hotel', {
  state: (): { hotels: Hotel[] } => {
    return {
      hotels: [] as Hotel[]
    }
  },
  getters: {
    hotelsDetail: (state) => state.hotels
  },
  actions: {
    getHotels() {
      this.hotels = getHotels()
      return this.hotels
    }
  }
})
