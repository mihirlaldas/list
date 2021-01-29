import React from 'react'

const List = ({items}: {items: Array<string>}): JSX.Element => {
    return items.length ? <ul>{items.map(i => <li key={i}>{i}</li>)}</ul> : <span>no items</span>
}

export default List
