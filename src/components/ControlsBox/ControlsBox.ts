import { type IDataControls } from '../../interfaces/IDataControls.interface'

const ControlsBox = (data: IDataControls): string => {
  return (`
  <div class="w-full relative grid sm:grid-cols-[1fr_auto] gap-8 row-start-1 col-start-1" 
    id="${data.group}">
    <label class="rounded-3xl bg-white/20 pr-3 focus-within:outline focus-within:outline-1 focus-within:border-2 focus-within:border-black outline-1 border-2 border-transparent" for="${data.configSelect.idTag}">
      <span class="text-xs absolute -top-5 left-4 font-medium tracking-wider">
        ${data.configSelect.attrName}:
      </span>
      <select class="rounded-3xl p-3 bg-transparent w-full h-full focus:outline-none" 
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
    </label>
    <button class="relative bg-second-red/60 py-3 p-9 rounded-3xl font-semibold tracking-widest hover:scale-95 active:scale-105 transition-transform select-none"
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
