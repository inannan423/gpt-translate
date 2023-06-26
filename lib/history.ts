export const addHistory = ({ originLanguageContent, translatedLanguageContent }: {
  originLanguageContent: string
  translatedLanguageContent: string
}): boolean => {
  try {
    // find the history in localStorage, if not, create a new one
    // eslint-disable-next-line
    const history = JSON.parse(localStorage.getItem('gpt-translate-history') as any || '[]')
    // push the new history to the array
    history.push({
      originLanguageContent,
      translatedLanguageContent
    })
    // save the history to localStorage
    localStorage.setItem('gpt-translate-history', JSON.stringify(history))
    return true
  } catch (e) {
    return false
  }
}

export const getHistory = (): Array<{
  originLanguageContent: string
  translatedLanguageContent: string
}> => {
  try {
    // find the history in localStorage, if not, create a new one
    // eslint-disable-next-line
    const res = JSON.parse(localStorage.getItem('gpt-translate-history') as any || '[]')
    return res
  } catch (e) {
    return []
  }
}
