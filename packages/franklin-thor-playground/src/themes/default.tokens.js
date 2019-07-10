// import green from '@material-ui/core/colors/green'
// import orange from '@material-ui/core/colors/orange'
// import red from '@material-ui/core/colors/red'
import axios from 'axios'

const url = 'https://franklin-design-system-api.rudygfl.now.sh/themes/'

axios({
  method: 'get',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
  },
  url,
  data: {
    groups_app_id: '5d1d5e8b968c5a28508c3260',
    groups_theme_id: '5d1d60bd56bc5e316d12e8ff',
  },
}).then(response => console.log('this is the response', response))

const tokens = {
  palette: {
    type: 'dark',
    themeName: 'Franklin Templeton',
  },
}

export default tokens
