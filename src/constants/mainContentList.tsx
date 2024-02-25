import { CardImages } from '../components'
import { EContentType, IContent } from '../types/contentTypes'
import { egyptParts } from './content/egypt/egyptParts'

export const mainContentList: IContent[] = [
    {
        id: 'egypt',
        name: 'Египет, Хургада',
        type: EContentType.SECTION,
        cardImage: <CardImages imageName='egypt' />,
        description: 'Видео о моем путешествии по Египту в январе 2024 года',
        children: egyptParts
    },
]
