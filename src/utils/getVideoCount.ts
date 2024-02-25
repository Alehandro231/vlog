import { EContentType, IContent } from "../types/contentTypes"

export const getVideoCount = (children?: IContent[]): number => {
    if (!children) {
        return 0
    }

    let summ = 0
    if (Array.isArray(children)) {
        const stack = [...children]
        while (stack.length) {
            const child = stack.pop()
            if (child?.type === EContentType.VIDEO) {
                summ += 1
            }

            if (child?.children && Array.isArray(child.children)) {
                stack.push(...child.children)
            }
        }
    }

    return summ
}
