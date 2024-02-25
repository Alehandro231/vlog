import { CardImages } from '../../../components'
import { EContentType, IContent } from "../../../types/contentTypes"
import { hotel_and_other } from './hotel_and_other'

export const egyptParts: IContent[] = [
    {
        id: 'hotel_and_other',
        name: 'Про отель и прочее',
        type: EContentType.SECTION,
        cardImage: <CardImages imageName='hotel_and_other' />,
        description: 'Видео о отеле, аэропорте, покупки',
        children: hotel_and_other
    },
    {
        id: 'hotel_animation',
        name: 'Анимация в отеле',
        type: EContentType.SECTION,
        cardImage: <CardImages imageName='hotel_animation' />,
        description: 'Виды анимации в отеле. Записаны небольшие интересные отрезки',
        children: []
    }
]
