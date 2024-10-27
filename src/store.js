import { proxy } from 'valtio'

const state = proxy({
  colors: [
    '#FFD700',  // Giallo Orion (Gold Yellow)
    '#CC0000',  // Rosso Mars (Bright Red)
    '#DA291C',  // Rosso Bia (Deep Red)
    '#FEFEFE',  // Bianco Isis (Pure White)
    '#0A0A0A',  // Nero Noctis (Gloss Black)
    '#007F0E',  // Verde Mantis (Bright Green)
    '#FF6F00',  // Arancio Borealis (Vibrant Orange)
    '#006E6D',  // Blu Cepheus (Light Blue)
    '#1A1A1A',  // Nero Pegaso (Metallic Black)
    '#8B00FF',  // Viola Parsifae (Deep Purple)
    '#483D8B',  // Viola Ophelia (Dark Blue Purple)
    '#2E4053',  // Blu Hera (Dark Blue)
    '#85C1E9',  // Blu Caelum (Light Sky Blue)
    '#DFFF00',  // Verde Scandal (Lime Green)
  ],
  selectedColor: '#FF6F00',

})

export { state }
