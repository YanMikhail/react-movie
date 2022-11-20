import {useEffect, useState} from "react";

export function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), 500)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}
