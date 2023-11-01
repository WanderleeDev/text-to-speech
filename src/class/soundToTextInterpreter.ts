class VoiceRecognition {
  recognition: any

  constructor () {
    this.recognition = new webkitSpeechRecognition()
    this.recognition.lang = 'es-ES'
    this.recognition.continuous = true
    this.recognition.interimResults = false

    this.recognition.onstart = () => {
      console.log('El reconocimiento de voz ha comenzado.')
    }

    this.recognition.onresult = (event: any) => {
      const resultado = event.results[0][0].transcript
      console.log('Texto reconocido: ' + resultado)
    }

    this.recognition.onend = () => {
      console.log('El reconocimiento de voz ha finalizado.')
    }

    this.recognition.onerror = (event: any) => {
      console.error('Se ha producido un error: ' + event.error)
    }
  }

  public iniciarReconocimiento (): void {
    this.recognition.start()
  }

  public detenerReconocimiento (): void {
    this.recognition.stop()
  }
}

export default VoiceRecognition
