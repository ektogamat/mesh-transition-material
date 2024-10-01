import { proxy } from 'valtio'

const state = proxy({
  colors: ['#E2786F',
    '#45B3FA',
    '#8BC34A',
    '#F7DC6F',
    '#FFC107',
    '#7A00E6',
    '#E6DAC3',
    '#786C3B',
    '#9E9E9E',
    '#333333',
    '#FFFFFF',],
  selectedColor: '#ccc',

})

export { state }
