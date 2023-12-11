let employee: {
    id: number,
    name: string,
    // if optional name
    // name?: string
    retire: (date: Date) => void
} = {
        id: 1,
        name: 'Mosh',
        retire: (date: Date) =>{
        console.log(date)
    }
}