import ElementLocator from './elementLocator'

class Speaker extends ElementLocator {
  speech = new SpeechSynthesisUtterance()
  btnSpeak!: HTMLElement

  constructor (target: string) {
    super(target)
    this.btnSpeak = this.getChildReference('#btn-speak')
  }

  public speak (): void {
    const textArea = this.elementReference as HTMLTextAreaElement
    this.speech.text = textArea.value.trim()
    console.log(textArea.value)
    console.log(this.speech)
    window.speechSynthesis.speak(this.speech)
  }
}

export default Speaker
