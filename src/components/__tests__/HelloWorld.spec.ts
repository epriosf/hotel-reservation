import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HotelSystem from '../HotelSystem.vue'

describe('Hotel Reservation System', () => {
  it('renders properly', () => {
    const wrapper = mount(HotelSystem, { props: { msg: 'Hotel Reservation System' } })
    expect(wrapper.text()).toContain('Hotel Reservation System')
  })
})
