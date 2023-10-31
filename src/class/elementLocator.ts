class ElementLocator {
  protected elementReference!: HTMLElement

  constructor (target: string) {
    this.elementReference = this.getChildReference(target)
  }

  public getElementHTML (): HTMLElement {
    return this.elementReference
  }

  public cleanElement (): void {
    this.elementReference.textContent = ''
  }

  protected getChildReference (child: string): HTMLElement {
    const elementTarget: HTMLElement | null = document.querySelector(child)

    if (elementTarget === null || !(elementTarget instanceof HTMLElement)) {
      throw new Error(`No existe un elemento identificado con ${child}`)
    }

    return elementTarget
  }
}

export default ElementLocator
