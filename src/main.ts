import './style.css'
import Render from './class/render'
import Speaker from './class/speecher'
import changePanel from './utils/changePanel'
import App from './components/App'

const renderHtml = new Render('#app')
renderHtml.renderContent(App(), 'beforeend')
const speaker = new Speaker('#textBox')

document.addEventListener('DOMContentLoaded', () => {
  speaker.btnSpeak.onclick = function () {
    speaker.speak()
  }
  changePanel()
})
