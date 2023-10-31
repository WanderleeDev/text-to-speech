import './style.css'
import Render from './class/render'
import App from './components/App'
import Speaker from './class/speecher'

const renderHtml = new Render('#app')
renderHtml.renderContent(App(), 'beforeend')

document.addEventListener('DOMContentLoaded', () => {
  const speaker = new Speaker('#textBox')
  const triggerSpeaker = speaker.btnSpeak
  console.log(triggerSpeaker)
  triggerSpeaker.onclick = function () {
    speaker.speak()
  }
})
