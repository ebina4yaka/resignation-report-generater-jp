import { useState } from 'react'

export default function useDialogOpen(): {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
} {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return { isOpen, handleOpen, handleClose }
}
