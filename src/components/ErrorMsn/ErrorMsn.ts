const ErrorMsn = (err: string): string => {
  return (`
  <div id="modal-error" class="fixed bottom-0 left-0 right-0 grid place-content-center gap-4 bg-gray-800  text-gray-100 py-4 px-8 min-h-[10rem]">
    <button id="btnDelete" class="absolute bg-second-red p-2 w-10 h-10 right-1 top-1 rounded-md font-medium text-lg grid place-content-center hover:scale-95 active:scale-105 transition-transform"
      aria-label="close modal"
      title="close modal">
      x
    </button>
    <p class="text-2xl text-second-red text-center">
      Oops an unexpected error has occurred!
    </p>
      <span class="text-center">
        ${err}
      </span>
  </div>`)
}

export default ErrorMsn
