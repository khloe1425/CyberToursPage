import axios from "axios"
export const getAllTour = async () => {
    let data = await axios({
        method: 'GET',
        url: 'https://course-api.com/react-tours-project'
    })
    return data.data
}
export const deleteTour = (tourList, id) => {
    return tourList.filter((item) => item.id !== id)
}