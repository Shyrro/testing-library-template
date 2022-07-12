import { useRef, useLayoutEffect, useState } from 'react'
import Avatar from 'components/Avatar'

function App() {
  const dialog = useRef<HTMLDialogElement>(null)
  // const dialog: any = document.getElementById('dialogid')
  const [open, setOpen] = useState(dialog?.current?.open)

  useLayoutEffect(() => {
    if (dialog.current) {
      if (open) dialog?.current.show()
      else dialog?.current.close()
    }
  }, [open])

  return (
    <div className="bg-red">
      {/* <dialog id="dialogid">Coucou</dialog> */}
      <dialog ref={dialog}>Coucou</dialog>
      <button onClick={() => setOpen(!open)}>toggle</button>
    </div>
  )
}

export default App
