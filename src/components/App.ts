// import ControlsBox from './ControlsBox/ControlsBox'
import TextBox from './TextBox/TextBox'
import ContainerControls from './ControlsBox/ContainerControls'
import Footer from './Footer/Footer'

const App = (): string => {
  return (`
    <main class="text-white w-container-resp justify-self-center px-4 self-end">
      <h1 class="text-3xl font-medium text-center flex flex-wrap gap-2 justify-center mb-6 sm:text-5xl">
        <div id="titleBox">
          Text To Speech 
        </div>
        <span class="text-second-red block sm:font-black relative after:absolute after:h-[0.2rem] after:rounded-md after:w-full after:bg-current after:left-0 after:bottom-[-.5rem] sm:after:bottom-[-1rem]">
          Converter
        </span> 
      </h1>
      ${TextBox()}
      ${ContainerControls()}
    </main>
    ${Footer()}
  `).trim()
}

export default App
