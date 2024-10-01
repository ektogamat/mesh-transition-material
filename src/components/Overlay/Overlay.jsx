import { state } from '../../store'
import './styles.css'
import { useSnapshot } from 'valtio'

export default function Overlay() {
  const { colors, selectedColor } = useSnapshot(state)

  return (
    <div className='overlay-wrapper'>
      <header>
        <h1>Mesh Transition Material</h1>
        <p> Created by anderson mancini</p>
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
