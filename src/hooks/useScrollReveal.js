import { useCallback, useEffect, useRef } from 'react'
import useReducedMotion from './useReducedMotion'

export default function useScrollReveal(opts = {}) {
    const reduced = useReducedMotion()
    const obsRef = useRef(null)
    useEffect(() => () => { obsRef.current?.disconnect() }, [])
    return useCallback(node => {
        if (!node) return
        if (reduced) { node.classList.add('is-visible'); return }
        if (!obsRef.current) {
            obsRef.current = new IntersectionObserver((entries, obs) => {
                entries.forEach(e => {
                    if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) }
                })
            }, { root: opts.root || null, rootMargin: opts.rootMargin || '0px 0px -80% 0px', threshold: opts.threshold || 0.1 })
        }
        obsRef.current.observe(node)
    }, [reduced, opts.root, opts.rootMargin, opts.threshold])
}
