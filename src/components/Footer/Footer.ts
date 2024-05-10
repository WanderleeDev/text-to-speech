import viteLogo from '../../img/vite.svg'
import typescriptLogo from '../../img/typescript.svg'
import tailwindLogo from '../../img/tailwindcss.svg'

const Footer = (): string => {
  const listIcons = [
    {
      name: 'vite',
      href: viteLogo
    },
    {
      name: 'typescript',
      href: typescriptLogo
    },
    {
      name: 'tailwind',
      href: tailwindLogo
    }
  ]

  return (`
  <footer class="flex flex-col gap-4 items-center justify-center self-end pb-8">
    <div class="text-gray-200 text-xs flex justify-center flex-col items-center">
      <p>
      developed by 
      <a class="text-white rounded-md font-medium underline text-sm"
        href="https://github.com/WanderleeDev" 
        target="_blank" 
        rel="noopener noreferrer">
        WanderleeDev
      </a> 
      </p>
      <p>
        inspired by the
        <a class="text-white rounded-md font-medium underline text-sm"
        href="https://www.youtube.com/watch?v=3oDNqHZ7UKY" 
        target="_blank" 
        rel="noopener noreferrer">
          GreatStack
      </a>
        project
      </p>
    </div>

    <div class="flex gap-4">
    ${listIcons.map(icon => (
      `<img class="aspect-square hover:opacity-50 w-8 h-8" src=${icon.href} alt='${icon.name} logo' loading="lazy">`
    )).join('')}
    </div>
  </footer>
  `)
}

export default Footer
