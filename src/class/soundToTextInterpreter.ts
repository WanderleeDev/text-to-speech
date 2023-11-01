import ElementLocator from './elementLocator'

class SoundToTextInterpreter extends ElementLocator {
  recognition = new webkitSpeechRecognition()

  constructor () {
    super('#app')
    this.recognition.onresult = (event) => {
      const result = event.results[0]
      if (result.isFinal) {
        const alternative = result[0]
        console.log('Transcripción alternativa: ', alternative.transcript)
      }
    }
  }

  startRecognition (): void {
    this.recognition.start()
  }

  stopRecognition (): void {
    this.recognition.stop()
  }
}

export default SoundToTextInterpreter
