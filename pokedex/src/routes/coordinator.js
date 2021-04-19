export const goToHome = (history) => {
    history.push("/")
}

export const goToPokedex = (history) => {
    history.push("/pokedex")
}

export const goToDetails = (history, id) => {
    history.push(`/pokemon/${id}`)
}