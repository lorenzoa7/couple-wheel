import * as C from '../styles'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedCircle({ showAnimatedCircle, initialTop = 0, initialLeft = 0, destinationTop = 0, destinationLeft = 0, theme = 'zinc' }) {
    return (
        <AnimatePresence
            initial={false}
            mode='wait'
            onExitComplete={() => null}
        >
            {showAnimatedCircle && (
                <C.AnimatedCostCircle
                    theme={theme}
                    initial={{ top: initialTop, left: initialLeft, opacity: 0, scale: 1.05 }}
                    animate={{ top: destinationTop - 1, left: destinationLeft, opacity: 1 }}
                    whileHover={{ opacity: 0.5 }}
                    exit={{ top: initialTop, left: initialLeft, opacity: 0 }}
                />
            )}
        </AnimatePresence>
    )
}