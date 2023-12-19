import React from 'react'
import Item from './Item';
const Exercise1_3_2_props = () => {
    const list = [
        {
            title : "title 1 " , content : "content 1 "
        },
        {
            title : "title 2 " , content : "content 2 "
        },
        {
            title : "title 3 " , content : "content 3 "
        },
    ]
  return (
    <div>
      {list.map((item , i) => {
        return <Item title = {item.title} content = {item.content} key = {i}/>
      })}
    </div>
  )
}

export default Exercise1_3_2_props ;
