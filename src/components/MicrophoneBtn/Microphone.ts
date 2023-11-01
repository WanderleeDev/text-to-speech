const Microphone = (): string => {
  return (`
  <button class="absolute bottom-12 right-2 bg-second-red/60 p-3 rounded-[50%] hover:scale-95 active:scale-105 transition-transform"
    type="button"
    aria-label="microphone button"
    title="voice dictation">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" 
      stroke-width="1.5" 
      stroke="currentColor" 
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  </button>
  `)
}
//  bg-gray-700 animate-pulse
export default Microphone
