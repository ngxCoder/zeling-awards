import { useState } from 'react'
import CandidateModal from './CandidateModal'
import './CandidateSelector.css'
import { icons as FeatherIcons } from 'feather-icons'
import { useStore } from '@nanostores/react'
import { $selectedCandidateId } from '../store/voteStore'

interface CandidateSelectorProps {
  candidates: Candidate[]
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

  const selectedCandidateId = useStore($selectedCandidateId)

  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {candidates?.map((candidate) => {
        const { thumbnail_url, title, id } = candidate
        const isSelected = selectedCandidateId === id

        return (
          <div
            key={id}
            className={`candidate relative h-52 w-72 overflow-hidden bg-slate-600 ${
              isSelected && 'selected'
            }`}
            onClick={() => $selectedCandidateId.set(id)}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(87, 0, 15, 0.35)),url(${thumbnail_url})`
              }}
              className='image left-0 top-0 h-full w-full bg-cover bg-no-repeat'
            />

            <i
              dangerouslySetInnerHTML={{
                __html: FeatherIcons['check-circle'].toSvg({
                  width: 36,
                  height: 36,
                  class: 'selected-icon'
                })
              }}
              title='Seleccionado'
            />

            <div className='overlay-pink absolute left-0 top-0 hidden h-full w-full cursor-pointer items-center justify-center bg-neutral-900  text-white'>
              <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-black bg-opacity-60 text-4xl'>
                {title}

                <div className='flex gap-4'>
                  <i
                    dangerouslySetInnerHTML={{
                      __html: FeatherIcons.play.toSvg({
                        width: 36,
                        height: 36
                      })
                    }}
                    title='Ver video'
                    onClick={(e) => {
                      setIsCandidateVideoOpen({ open: true, candidate })
                      e.stopPropagation()
                    }}
                  />
                  <i
                    dangerouslySetInnerHTML={{
                      __html: FeatherIcons['external-link'].toSvg({
                        width: 36,
                        height: 36
                      })
                    }}
                    title='Abrir en una nueva pestaña'
                    onClick={(e) => {
                      window.open(candidate.url)
                      e.stopPropagation()
                    }}
                  />
                </div>
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
