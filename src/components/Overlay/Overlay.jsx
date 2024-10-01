import { state } from '../../store'
import './styles.css'
import { useSnapshot } from 'valtio'

export default function Overlay() {
  const { colors, selectedColor } = useSnapshot(state)

  return (
    <div className='overlay-wrapper'>
      <header>
        <h1>Mesh Transition Material</h1>
        <p>
          Created by anderson mancini
          <a
            onClick={() =>
              window.open(
                'https://github.com/ektogamat/mesh-transition-material'
              )
            }
          >
            {' - '}
            CHECK DOCUMENTATION
          </a>
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <button
            className='buy-button'
            onClick={() =>
              window.open(
                'https://www.patreon.com/andersonmancini/shop/meshtransitionmaterial-for-react-three-121382?source=storefront'
              )
            }
          >
            BUY NOW
          </button>
        </div>
      </header>
      <ul>
        {colors.map((color) => (
          <li
            key={color}
            style={{
              backgroundColor: color,
            }}
            className={selectedColor === color ? 'selected' : ''}
            onClick={() => (state.selectedColor = color)}
          ></li>
        ))}
      </ul>
    </div>
  )
}
