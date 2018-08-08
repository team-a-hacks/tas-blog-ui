import moment from 'moment'

moment.locale('ja', {
  weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
})

// 時間のformat
export const formattime = (date, format) => {
  const t = moment(date)
  return t.format(format)
}

// 日付のformat
export const formatdate = (date, format) => {
  const m = moment(date)
  return m.format(format)
}

// どれ位前に投稿されたか
export const someDaysAgo = (date) => {
  const year = yearsAgo(date)
  const month = monthAgo(date)
  const day = daysAgo(date)
  if (year !== 0) {
    return year + ' years ago'
  } else if (month !== 0) {
    return month + ' months ago'
  } else if (day !== 0) {
    return day + ' days ago'
  }
  const t = moment(date)
  return t.format('h:mm A')
}

// 何年たったか
export const yearsAgo = (date) => {
  const d = new Date(date)
  return moment().diff(d, 'years')
}

// 何ヶ月たったか
export const monthAgo = (date) => {
  const d = new Date(date)
  return moment().diff(d, 'month')
}

// 何日たったか
export const daysAgo = (date) => {
  const d = new Date(date)
  return moment().diff(d, 'days')
}