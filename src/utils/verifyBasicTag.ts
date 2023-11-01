const verifyBasicTag = (tag: HTMLButtonElement | HTMLDivElement | null): boolean => {
  return tag === null || !((tag instanceof HTMLButtonElement) || (tag instanceof HTMLDivElement))
}

export default verifyBasicTag
