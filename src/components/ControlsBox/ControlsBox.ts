const ControlsBox = (): string => {
  return (`
  <div class="w-full grid sm:grid-cols-[1fr_8rem] gap-8">
    <select class="rounded-3xl p-3" 
      name="param" 
      id="select-param">
      <option value="">
        Default
      </option>
    </select>
    <button class="bg-second-red p-3 rounded-3xl font-semibold tracking-widest hover:scale-95 active:scale-105 transition-transform"
      aria-label="listen text"
      title="listen text"
      id="btn-speak" 
      type="button">
      Listen
    </button>
  </div>
  `)
}

export default ControlsBox
