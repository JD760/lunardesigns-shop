export type itemData = {
    title: string,
    id: number,
    price: number,
    searchTags: searchTags,
    img: string
}

export type filterOption ={
    label: string,
    checked: boolean,
    category: string
}

export type CheckboxType = {
    category: string,
    element: JSX.Element
}

export type BasketItemType = {
    title: string,
    price: number,
    info: string,
    img: string
}

type searchTags = {
    type: string,
    size: string,
    style: string[],
    colour: string[]
}

