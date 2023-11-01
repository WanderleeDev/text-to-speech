import { type IDataControls } from '../../interfaces/IDataControls.interface'

const ControlsBox = (data: IDataControls): string => {
  return (`
  <div class="w-full relative grid sm:grid-cols-[1fr_auto] gap-8 row-start-1 col-start-1" 
    id="${data.group}">
    <div class="rounded-3xl bg-white/20 pr-3">
      <label class="text-xs absolute -top-5 left-4 font-medium tracking-wider"
      for="${data.configSelect.idTag}">
        ${data.configSelect.attrName}:
      </label>
      <select class="rounded-3xl p-3 bg-transparent w-full h-full" 
        name="${data.configSelect.attrName}"
        aria-label="${data.configSelect.attrName}" 
        id="${data.configSelect.idTag}">
        ${
          (data.optionsSelect != null)
          ? data.optionsSelect.map(option => (
              `<option value=${option.code}>
                ${option.name}
              </option>`
            )).join('')
          : '<option value="empty">The list of languages ​​was not found</option>'
        }
      </select>
    </div>
    <button class="bg-second-red/60 py-3 p-9 rounded-3xl font-semibold tracking-widest hover:scale-95 active:scale-105 transition-transform"
      aria-label="${data.configButton.attrName}"
      title="${data.configButton.attrName}"
      id="${data.configButton.idTag}" 
      type="button">
      ${data.configButton.textBtn}
    </button>
  </div>
  `)
}

export default ControlsBox
