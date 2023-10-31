import ControlsBox from './ControlsBox/ControlsBox'
import TextBox from './TextBox/TextBox'

const App = (): string => {
  return (`
    <main class="text-white w-container-resp justify-self-center px-4">
      <h1 class="text-3xl font-medium text-center flex flex-wrap gap-2 justify-center mb-6 sm:text-5xl">
        Text To Speech 
        <span class="text-second-red block sm:font-black relative after:absolute after:h-[0.2rem] after:rounded-md after:w-full after:bg-current after:left-0 after:bottom-[-.5rem] sm:after:bottom-[-1rem]">
          Converter
        </span> 
      </h1>
      ${TextBox()}
      ${ControlsBox()}
    </main>
  `).trim()
}

export default App
