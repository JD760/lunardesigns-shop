export type item = {
    title: string,
    id: number,
    price: number,
    searchTags: searchTag,
    img: string
}

type searchTag = {
    type: string,
    size: string,
    style: string[],
    colour: string[]
}