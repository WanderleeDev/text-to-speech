import ElementLocator from './elementLocator'

class Render extends ElementLocator {
  protected containerTarget!: HTMLElement
  private readonly positionsContent = ['beforebegin', 'afterbegin', 'beforeend', 'afterend']

  constructor (target: string) {
    super(target)
    this.containerTarget = this.getElementHTML()
  }

  private checkIsHTML (element: string): boolean {
    const parseDocument = new DOMParser().parseFromString(element, 'text/html')
    const isHtml = Array.from(parseDocument.body.childNodes)
      .some((node: ChildNode): boolean => node.nodeType === 1)

    return isHtml
  }

  private formatList (list: string[]): string {
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
    return formatter.format(list)
  }

  private checkPosition (position: string): boolean {
    return this.positionsContent.includes(position)
  }

  public renderContent (content: string, position: InsertPosition): void {
    if (!this.checkIsHTML(content)) {
      throw new Error('El contenido debe estar en formato string template HTML')
    }

    if (!this.checkPosition(position)) {
      throw new Error(`la posición: ${position} no es valida. Posiciones validas: ${this.formatList(this.positionsContent)}`)
    }

    this.containerTarget.insertAdjacentHTML(position, content)
  }
}

export default Render
