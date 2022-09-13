import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className="container">
      <table>
        <tbody>
            {
                items.map((item, index) => (
                    <Row  item={item} key={index}/>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
