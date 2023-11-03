import Microphone from '../MicrophoneBtn/Microphone'
//  import bars from '../../img/bars.svg'

const TextBox = (): string => {
  return (`
    <div class="relative">
    <textarea
      class="bg-white/25 backdrop-blur-md w-full resize-none min-h-[18rem] p-4 rounded-xl my-8 placeholder:text-gray-200 font-medium" 
      id="textBox"
      aria-label="write your text that you want to be read"
      placeholder="Write your text ...">
        
      </textarea>
      ${Microphone()}
    </div>
  `)
}

export default TextBox
