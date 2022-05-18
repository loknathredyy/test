import React,{useState} from 'react'
import { TagCloud } from 'react-tagcloud'

export default function WordCloud1() {

  const data = [
    { value: 'jQuery', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'NPM', count: 11 },
  ]
  const options = {
    luminosity: 'dark',
    hue: 'rgb(1, 162, 76)',
  }


return (
  <div style={{width:'300px', marginLeft:'100px'}}>

  <TagCloud
    minSize={1}
    maxSize={55}
    tags={data}
    colorOptions={options}
  />
  </div>
)
}
