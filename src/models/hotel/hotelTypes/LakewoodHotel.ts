import type { Hotel } from '@/models/hotel/Hotel'

export class LakewoodHotel implements Hotel {
  constructor(
    public id: string,
    public name: string,
    public location: string,
    public phone: string,
    public website: string,
    public rate: number,
    public weekdayPrice: number[],
    public weekendPrice: number[]
  ) {}

  calculatePrice(): number {
    return 50
  }

  getHotel(): void {
    console.log('Hotel lake...')
  }
}
