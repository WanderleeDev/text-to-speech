/* eslint-disable new-cap */
import ElementLocator from './elementLocator'
import ErrorMsn from '../components/ErrorMsn/ErrorMsn'
import { ErrorType } from '../interfaces/IErrorType.interface'

class VoiceRecognition extends ElementLocator {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  recognition = new webkitSpeechRecognition()
  btnListen!: HTMLButtonElement
  changeBtn!: HTMLButtonElement

  //  función destinada a un eventListener agrega estilos, deshabilita tags limpia el textBox para iniciar el reconocimiento
  recognitionHandle = (target: HTMLTextAreaElement): void => {
    this.recognition.start()
    this.btnListen.disabled = true
    this.btnListen.classList.add('disabled-btn')
    this.btnListen.classList.add('active:scale-100')
    this.btnListen.classList.add('hover:scale-100')
    this.btnListen.classList.add('hover:before:opacity-100')
    target.value = ' '
    target.disabled = true
    target.classList.add('bars-active')
  }

  //  función destinada a un eventListener usa el método cleanTextBoxStyles para restablecer estilos y funcionalidad de tags
  handleBtnShift = (target: HTMLTextAreaElement): void => {
    this.cleanTextBoxStyles(target)
    this.btnListen.removeEventListener('click', () => this.recognitionHandle)
    console.log('disabled')
  }

  //  inicializar el caja de Texto y configuración del objeto recognition y obtiene referencias de 2 tag button
  constructor () {
    super('#textBox')
    this.recognition.lang = 'es-ES'
    this.recognition.continuous = true
    this.recognition.interimResults = false
    this.btnListen = this.getChildReference('#btn-listen') as HTMLButtonElement
    this.changeBtn = this.getChildReference('#changeControlBtn') as HTMLButtonElement

    //  evento disparado cuando se inicia el reconocimiento de voz
    this.recognition.onstart = () => {
      console.log('Voice recognition has started.')
    }

    //  evento disparado cuando se procesa lo dictado
    this.recognition.onresult = (event: any): void => {
      const target = this.elementReference as HTMLTextAreaElement
      const resultado: string = event.results[0][0].transcript
      target.value = resultado
      this.cleanTextBoxStyles(target)
      this.addSwitchButtonHandler(target)
    }

    //  evento disparado cuando termina el reconocimiento de voz
    this.recognition.onend = () => {
      console.log('Voice recognition has finished.')
    }

    //  evento disparado cuando se suscita un error en el proceso
    this.recognition.onerror = (event: any) => {
      const target = this.elementReference as HTMLTextAreaElement
      console.error('An error has occurred: ' + event.error)
      this.cleanTextBoxStyles(target)
      this.handlerErrors(event)
      this.implementsError(this.handlerErrors(event))
      console.log(this.handlerErrors(event))
    }
  }

  //  método para pintar un modal que contiene un mensaje de error personalizado
  private implementsError (msn: string): void {
    //  verifica si el modal existe, en caso verdadero sale del método
    if (document.querySelector('#modal-error') !== null) return

    //  agrega el componte de modal error
    document.body.insertAdjacentHTML('beforeend', ErrorMsn(msn))
    //  guarda la referencia del btn delete del modal
    const btnDeleteModal: HTMLButtonElement | null = document.querySelector('#btnDelete')

    //  verifica que el tag no sea null y sea una instancia de HTMLButtonElement
    if (btnDeleteModal !== null && btnDeleteModal instanceof HTMLButtonElement) {
      //  eventListener para eliminar el modal
      const deleteHandler = (): void => btnDeleteModal.closest('#modal-error')?.remove()
      //  agrega el listener al btn delete del modal
      btnDeleteModal.addEventListener('click', deleteHandler)
    }
  }

  //  método para retirar estilo y habilitar la caja y botón cuando se detiene la escucha
  private cleanTextBoxStyles (target: HTMLTextAreaElement): void {
    this.btnListen.disabled = false
    this.btnListen.classList.remove('disabled-btn')
    this.btnListen.classList.remove('active:scale-100')
    this.btnListen.classList.remove('hover:scale-100')
    this.btnListen.classList.remove('hover:before:opacity-100')
    target.classList.remove('bars-active')
    target.disabled = false
    //  detiene la escucha o reconocimiento de voz
    this.recognition.stop()
  }

  //  método encargado de manejar los errores que fuera a suceder en el reconocimiento de voz
  private handlerErrors (event: { error: ErrorType }): string {
    switch (event.error) {
      case ErrorType.NoSpeech:
        return ('Sound was not received, please try again with the microphone close by.')

      case ErrorType.Network:
        return ('Network error, try again later')

      case ErrorType.AudioCapture:
        return ('Audio capture failed.')

      case ErrorType.NotAllowed:
        return ("You don't have voice recognition or microphone usage permissions, make sure you provide the necessary permissions and try again")

      default:
        return ('Internal error, try again later')
    }
  }

  //  agregar un evento escucha a un botón, se debe especificar el tag btn
  private addListenerHandler (target: HTMLTextAreaElement): void {
    this.btnListen.addEventListener('click', () => {
      this.recognitionHandle(target)
      this.changeBtn.removeEventListener('click', () => this.handleBtnShift)
    })
  }

  //  agregar un evento escucha a un botón, se debe especificar el tag btn, ademas usa el método cleanTextBoxStyles para limpiar estilos y habilitar botones deshabilitados
  private addSwitchButtonHandler (textArea: HTMLTextAreaElement): void {
    this.changeBtn.addEventListener('click', (): void => {
      this.cleanTextBoxStyles(textArea)
      this.btnListen.removeEventListener('click', () => this.recognitionHandle)
      console.log('disabled')
    })
  }

  //  método publico de entrada para poner en funcionamiento el recogimiento de voz activando los eventos de escucha de addListenerHandler y addSwitchButtonHandler
  public initRecognitionVoice (): void {
    const textArea = this.elementReference as HTMLTextAreaElement
    this.addListenerHandler(textArea)
    this.addSwitchButtonHandler(textArea)
  }
}

export default VoiceRecognition
