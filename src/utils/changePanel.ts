import verifyBasicTag from './verifyBasicTag'

const changePanel = (): void => {
  const btnChange: HTMLButtonElement | null = document.querySelector('#changeControlBtn')
  const languagePanel: HTMLDivElement | null = document.querySelector('#ctrlPanel-language')
  const voicePanel: HTMLDivElement | null = document.querySelector('#ctrlPanel-voice')
  const titleBox: HTMLDivElement | null = document.querySelector('#titleBox')

  const listElements = [btnChange, languagePanel, voicePanel, titleBox]
  const btnChangeHandler = (): void => {
    languagePanel?.classList.toggle('animate-scale')
    voicePanel?.classList.toggle('animate-scale')

    if (voicePanel !== null && titleBox !== null) {
      voicePanel?.matches('.animate-scale')
        ? (titleBox.textContent = 'Speech To Text')
        : (titleBox.textContent = 'Text To Speech')
    }
  }

  for (let i = 0; i < listElements.length; i++) {
    if (verifyBasicTag(listElements[i])) {
      console.error('Los elementos de: listElements no ser de tipo null')
      return
    }
  }

  languagePanel?.classList.add('animate-scale')
  btnChange?.addEventListener('click', btnChangeHandler)
}

export default changePanel
