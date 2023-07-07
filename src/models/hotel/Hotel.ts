export class Hotel {
  private _id: string
  private _name: string
  private _location: string
  private _phone: string
  private _website: string
  private _rate: number
  private _weekdayPrice: number[]
  private _weekendPrice: number[]

  constructor(
    id: string,
    name: string,
    location: string,
    phone: string,
    website: string,
    rate: number,
    weekdayPrice: number[],
    weekendPrice: number[]
  ) {
    this._id = id
    this._name = name
    this._location = location
    this._phone = phone
    this._website = website
    this._rate = rate
    this._weekdayPrice = weekdayPrice
    this._weekendPrice = weekendPrice
  }

  get id(): string {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get location(): string {
    return this._location
  }

  set location(value: string) {
    this._location = value
  }

  get phone(): string {
    return this._phone
  }

  set phone(value: string) {
    this._phone = value
  }

  get website(): string {
    return this._website
  }

  set website(value: string) {
    this._website = value
  }

  get rate(): number {
    return this._rate
  }

  set rate(value: number) {
    this._rate = value
  }

  get weekdayPrice(): number[] {
    return this._weekdayPrice
  }

  set weekdayPrice(value: number[]) {
    this._weekdayPrice = value
  }

  get weekendPrice(): number[] {
    return this._weekendPrice
  }

  set weekendPrice(value: number[]) {
    this._weekendPrice = value
  }
}
