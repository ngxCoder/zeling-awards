import { useState } from 'react'
import CandidateModal from './CandidateModal'
import './CandidateSelector.css'

interface CandidateSelectorProps {
  candidates?: Candidate[]
}

export default function CandidateSelector({
  candidates
}: CandidateSelectorProps) {
  const [isCandidateVideoOpen, setIsCandidateVideoOpen] = useState<{
    open: boolean
    candidate?: Candidate
  }>({
    open: false,
    candidate: undefined
  })
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {candidates?.map((candidate) => {
        const { thumbnail_url, title, id } = candidate

        return (
          <div
            key={id}
            className='candidate relative h-52 w-72 overflow-hidden bg-slate-600'
            onClick={() => setIsCandidateVideoOpen({ open: true, candidate })}
          >
            <div
              style={{ backgroundImage: `url(${thumbnail_url})` }}
              className='image left-0 top-0 h-full w-full bg-cover bg-no-repeat'
            />
            <div className='overlay-pink absolute left-0 top-0 hidden h-full w-full cursor-pointer items-center justify-center bg-neutral-900 text-4xl text-white'>
              <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
                {title}
              </div>
            </div>
          </div>
        )
      })}

      <CandidateModal
        candidate={isCandidateVideoOpen.candidate}
        isOpen={isCandidateVideoOpen.open}
        onClose={() =>
          setIsCandidateVideoOpen({ open: false, candidate: undefined })
        }
      />
    </div>
  )
}
