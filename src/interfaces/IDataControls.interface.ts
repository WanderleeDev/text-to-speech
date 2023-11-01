import { type ILanguage } from './ILanguage'

export interface IDataControls {
  group: string
  configButton: IButtonData
  configSelect: ISelectData
  optionsSelect?: ILanguage[]
}

interface ISelectData {
  idTag: string
  attrName: string
}

interface IButtonData extends ISelectData {
  textBtn: string
}
