import { useState } from "react"

export function useListForm<T>() {
    const [list, setList] = useState<T[]>([])
    const addToList = (item: T) => {
        setList([...list, item])
    }
    const removeFromList = (index: number) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    return { list, addToList, removeFromList }
}