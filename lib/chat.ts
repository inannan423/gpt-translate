interface Props {
  key: string
  message: string
  api: string
}

const chatHandler = async ({ api, key, message }: Props): Promise<any> => {
  let responses = {
    st: 'error',
    data: 'error'
  }
  await fetch(api + '/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 1,
      max_tokens: 250
    })
  })
    .then(async (response) => await response.json())
    .then((data) => {
      responses = {
        st: 'success',
        data
      }
    }).catch((error) => {
      responses = {
        st: 'error',
        data: error
      }
    })
  return responses
}

export default chatHandler
