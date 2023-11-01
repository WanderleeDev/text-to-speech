import ControlsBox from './ControlsBox'
import { type IDataControls } from '../../interfaces/IDataControls.interface'
import languages from '../../language/languages'

const ContainerControls = (): string => {
  const contentControls: IDataControls[] = [
    {
      group: 'ctrlPanel-voice',
      configSelect: {
        idTag: 'voice-selector',
        attrName: 'Voice selector'
      },
      configButton: {
        idTag: 'btn-speak',
        attrName: 'listen text',
        textBtn: 'Listen'
      }
    },
    {
      group: 'ctrlPanel-language',
      configSelect: {
        idTag: 'language-selector',
        attrName: 'Language selector'
      },
      configButton: {
        idTag: 'btn-listen',
        attrName: 'Start Listening',
        textBtn: 'Start Listening'
      },
      optionsSelect: languages
    }
  ]

  return (`
    <div class="grid gap-8 ">
      ${contentControls.map(control => ControlsBox(control)).join('')}
    </div>
  `)
}

export default ContainerControls
