import axios from 'axios'

const url = 'https://franklin-design-system-api.rudygfl.now.sh/themes/'

const theme = {
  palette: {
    type: 'dark',
  },
}

export default axios({
  method: 'get',
  url,
  params: {
    groups_app_id: '5d1d5e8b968c5a28508c3260',
    groups_theme_id: '5d1d60bd56bc5e316d12e8ff',
  },
})
  .then(response => response.data)
  .catch(() => theme)
