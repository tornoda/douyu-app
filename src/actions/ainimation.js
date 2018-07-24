export const ANIMATION = 'ANIMATION'

export const doAnimation = (name, style) => ({
    type: ANIMATION + style.type,
    style
})

export const HIDE_SHOW_GIFT = 'HIDE_SHOW_GIFT'