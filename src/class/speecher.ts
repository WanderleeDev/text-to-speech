import ElementLocator from './elementLocator'

class Speaker extends ElementLocator {
  speech = new SpeechSynthesisUtterance()
  listVoices: SpeechSynthesisVoice[] = []
  btnSpeak: HTMLElement
  voiceSelector: HTMLSelectElement

  constructor (target: string) {
    super(target)
    this.btnSpeak = this.getChildReference('#btn-speak')
    this.voiceSelector = this.getChildReference('#voice-selector') as HTMLSelectElement
    //  inicializa las opciones del SELECT TAG (voiceSelector)
    this.getAllVoices()
  }

  public speak (): void {
    const textArea = this.elementReference as HTMLTextAreaElement
    this.speech.text = textArea.value.trim()
    window.speechSynthesis.speak(this.speech)
  }

  public changeVoiceModel (): void {
    this.voiceSelector.addEventListener('change', () => {
      const newModel = this.listVoices.filter(voice => {
        return voice.name === this.voiceSelector.value
      })
      this.speech.voice = newModel[0]
    })
  }

  private getAllVoices (): void {
    //  Agregamos un evento escucha a speechSynthesis (pertenece al objeto window), usando el evento voiceschanged
    speechSynthesis.addEventListener('voiceschanged', () => {
      //  Se dispara cuando el navegador inicialice la lista, en ese momento obtenemos la data y la guardamos en la propiedad listVoices
      this.listVoices = window.speechSynthesis.getVoices()
      this.initializeSelector()
    })
  }

  private initializeSelector (): void {
    if (this.listVoices.length !== 0) {
      //  Ponemos por defecto el primer tipo de voz a usar al objeto speech (opcional ya que el browser pondrá una por defecto)
      // *opcional* this.speech.voice = this.listVoices[0]
      //  Recorre la lista y por cada una crea un tag <option> que representa cada opción de la lista y esta siendo agregado a un tag <select>
      this.listVoices.forEach((voice, i) => {
        const option = new Option(voice.name, voice.name)
        option.dataset.voiceIndex = i.toString()
        this.voiceSelector.options[i] = option
      })
      this.changeVoiceModel()
    } else {
      //  Solo crea y agrega un tag de <option> con el mensaje de error
      this.voiceSelector.options[0] = new Option('The browser does not have voice models')
    }
  }
}

export default Speaker

/**
 * Otra forma de obtener la lista de voces:
 *
 * Se crea la función para obtener la lista usado el método getVoices del objeto speechSynthesis perteneciente a window y también la lógica de negocio para la lista

  function showVoiceList (): void {
    const voices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices()
    console.log(voices) //  solo para verificar
    //
    //  --lógica a realizar cuando este habilitada la lista completa--
    //
  }

  verificamos si el objeto window --> speechSynthesis tiene el propiedad "onvoiceschanged"
  Este se dispara cuando  se activa en evento "voiceschanged" osea cuando el navegador carga la lista

  De existir "onvoiceschanged" le asignamos la función creada : showVoiceList, ahora esta se dispara cuando se ejecute el evento "voiceschanged"

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = showVoiceList
  }

  *Asi siempre obtendremos la lista cuando este cargada y realizaremos la lógica deseada
 */
