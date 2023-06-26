const useApi = (): { api: string, key: string } => {
  // 如果是客户端
  if (typeof window !== 'undefined') {
    return {
      api: localStorage.getItem('gpt-translate-api') ?? 'https://api.openai.com/v1/',
      key: localStorage.getItem('gpt-translate-key') ?? ''
    }
  } else {
    return {
      api: '',
      key: ''
    }
  }
}

export default useApi
