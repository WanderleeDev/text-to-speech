import './style.css'
import Render from './class/render'
import App from './components/App'
import Speaker from './class/speecher'

const renderHtml = new Render('#app')
renderHtml.renderContent(App(), 'beforeend')
const speaker = new Speaker('#textBox')

document.addEventListener('DOMContentLoaded', () => {
  speaker.btnSpeak.onclick = function () {
    speaker.speak()
  }
})
