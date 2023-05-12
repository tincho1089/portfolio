import { Divider } from '@mui/material'
import { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './WordCloud.scss'

export const WordCloud = () => {
  const container = '.content'
  //   ['Java', 'React', 'mongoDB', 'Express', 'NodeJS', 'Redux', 'HTML5', 'CSS3', 'JS', 'Flask', 'Flutter', 'Dart', 'FireBase', 'MySQl', 'C++', 'C', 'Pythons', 'Django', 'Git', 'Ubuntu' ]
  const texts = [
    'Java',
    'React',
    'mongoDB',
    'Express',
    'NodeJS',
    'Redux',
    'HTML5',
    'CSS3',
    'JS',
    'Flask',
    'Flutter',
    'Dart',
    'FireBase',
    'MySQl',
    'C++',
    'C',
    'Python',
    'Django',
    'Git',
    'Ubuntu',
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const containers = document.querySelectorAll('.tagcloud')
    const containerArray = Array.from(containers)
    // evitamos que se renderice mas de una vez. Aparece mas de un tagcloud
    if (containerArray.length == 0) {
      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <div className='tagcloud-wrap'>
      <div className='main'>
        <span className='content'></span>
      </div>
    </div>
  )
}
