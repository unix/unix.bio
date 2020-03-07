import ms from 'ms'
import BLOG from '../blog.config'

export const msToString = time => {
  const str = ms(time, { long: true })
  if (!BLOG.cn) return `${str} ago`
  return str
    .replace('days', '天')
    .replace('day', '天')
    .replace('minutes', '分钟')
    .replace('minute', '分钟')
    .replace('hour', '小时')
    .replace('hours', '小时')
    .replace('seconds', '秒')
    + '之前'
}
