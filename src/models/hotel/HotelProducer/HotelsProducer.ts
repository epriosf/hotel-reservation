import type { Hotel, HotelCost } from '@/models/hotel/interfaces/Hotel'
import { type HotelProvider } from '@/models/hotel/interfaces/HotelProvider'
import { FormatType } from '@/models/hotel/enums/FormatType'
import { UserType } from '@/models/hotel/enums/UserType'
import { HotelProducerFromJSON } from '@/models/hotel/HotelProducer/HotelProducerFromJSON'

const formatTypeToProviderMap: Record<FormatType, HotelProvider> = {
  [FormatType.JSON]: new HotelProducerFromJSON()
}

export class HotelsProducer {
  private dataProvider: HotelProvider

  constructor(formatData: FormatType) {
    this.dataProvider = this.createDataProvider(formatData)
  }

  createDataProvider(formatType: FormatType): HotelProvider {
    const provider = formatTypeToProviderMap[formatType]
    if (provider) {
      return provider
    }
    throw new Error(`Invalid format type: ${formatType}`)
  }

  async fetchHotels(): Promise<Hotel[]> {
    return this.dataProvider.fetchHotels()
  }

  getLowestCostHotel(dates: Date[], userType: UserType, hotels: Hotel[] | null): HotelCost {
    return this.dataProvider.getLowestCostHotel(dates, userType, hotels)
  }
}
