import { createPortal } from 'react-dom'
import { ReactPortal, useState, useRef, useEffect } from 'react'

export function ClientPortal({ children }: { children: JSX.Element }): ReactPortal | null {
    const ref = useRef<HTMLDivElement>()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector('#modal')
        setMounted(true)
    }, [])

    return mounted ? createPortal(children, ref.current) : null
}

export default function Modal({
    isOpen,
    children,
    setClose
}: {
    isOpen: boolean
    children: JSX.Element
    setClose: () => void
}): JSX.Element {
    if (!isOpen) return <></>
    return (
        <ClientPortal>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-overLay">
                <div className="flex items-center justify-center w-screen h-screen ">
                    <div className="relative w-max bg-white rounded">
                        <button
                            onClick={() => setClose()}
                            className="absolute focus:outline-none right-2 top-2 px-3 py-3"
                        >
                            <img alt="Close modal" src="/icons/close.svg" className='h-7 w-7' />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </ClientPortal>
    )
}
