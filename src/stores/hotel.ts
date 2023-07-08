import { defineStore } from 'pinia'
import type { Hotel } from '@/models/hotel/interfaces/Hotel'
import { HotelsProducer } from '@/models/hotel/HotelProducer/HotelsProducer'
import { FormatType } from '@/models/hotel/enums/FormatType'

export const useHotelStore = defineStore('hotel', {
  state: (): { hotels: Hotel[] } => {
    return {
      hotels: []
    }
  },
  getters: {
    hotelsDetail: (state) => state.hotels
  },
  actions: {
    async getHotels() {
      const jsonProducer = new HotelsProducer(FormatType.JSON)
      this.hotels = await jsonProducer.fetchHotels()
      return this.hotels
    }
  }
})
