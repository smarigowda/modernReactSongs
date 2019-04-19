export const songsList = () => {
    return [
        {
            title: 'Naaku Tanti',
            duration: '4:50'
        },
        {
            title: 'Naguva Nayana',
            duration: '3:30'
        },
        {
            title: 'Car Car',
            duration: '4:20'
        },
        {
            title: 'Ondu Malebillu',
            duration: '5:25'
        },
        {
            title: 'Male Nintu Hoda Mele',
            duration: '5:35'
        }
    ]
}
export const selectedSong = (selectedSong = null, action) => {
    switch(action.type) {
        case 'SELECT_SONG':
            return action.payload;
    }
    return selectedSong;
}
