import { create } from "zustand";

interface GameStore {
    selectedGenreId : number | null,
    selectedPlatformId : number | null,
    searchValue : string,
    setSelectedGenre : (selectedGenreId : number) => void ,
    setSelectedPlatform : (selectedPlatformId: number) => void
    setsearchValue : (searchvalue: string) => void
}


const useGameStore = create<GameStore>(set=>({
    selectedGenreId : null,
    selectedPlatformId : null,
    searchValue: '',
    setSelectedGenre: (selectedGenreId)=>set(() => ({selectedGenreId : selectedGenreId })),
    setSelectedPlatform : (selectedPlatformId) => ({selectedPlatformId : selectedPlatformId}),
    setsearchValue: (searchValue) => set (()=>({searchValue: searchValue}))
}))

export default useGameStore;