import { useEffect, useRef } from 'react'
import './CandidateModal.css'

interface CandidateModalProps {
  isOpen: boolean
  onClose?: () => void
  candidate?: Candidate
}

export default function CandidateModal({
  isOpen,
  onClose,
  candidate
}: CandidateModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const modalElement = modalRef.current
    if (modalElement) {
      isOpen ? modalElement.showModal() : modalElement.close()
    }
  }, [isOpen])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      onClose && onClose()
    }
  }

  if (!candidate) return null

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className='flex h-2/3 w-2/3 flex-col gap-4 bg-carnation-950 p-5 text-white'
    >
      <h3 className='text-3xl font-semibold'>{candidate.title}</h3>
      <hr className=' border-cotton-candy' />
      <iframe
        width='100%'
        height='100%'
        src={candidate.url + '?parent=localhost&autoplay=1'}
        title={candidate.title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>

      <div className='flex justify-end gap-5'>
        <button
          type='button'
          className='min-w-28 px-3 py-1 text-2xl text-cotton-candy ring-2  ring-cotton-candy'
          onClick={onClose}
        >
          Cerrar
        </button>
        <button
          type='button'
          className='min-w-28 bg-cotton-candy px-3 py-1 text-2xl text-black-pearl ring-2 ring-cotton-candy'
        >
          Votar
        </button>
      </div>
    </dialog>
  )
}
