export const selectSong = title => {
    return {
        type: 'SELECT_SONG',
        payload: {
            title
        }
    }
}