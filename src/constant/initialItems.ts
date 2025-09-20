export const initialItems = new Array(9_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 9_999_998,
    }
})