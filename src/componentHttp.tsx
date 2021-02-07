import React, {useEffect, useState} from 'react';

export interface ListItem {
  description: string
  complete: boolean
}

export type List = Array<ListItem>

const ComponentHttp = () => {
  const [list, setList] = useState<List | null>(null)
  const [isNetworkFailure, setNetworkFailure] = useState(false)

  useEffect(() => {
    fetch("/list")
      .then((response) => response.json().then((json: List) => setList(json)))
      .catch((error) => setNetworkFailure(true))
  }, [])

  if (isNetworkFailure)
    return <p>Error loading, network failure</p>
  else if (list === null || typeof list === "undefined")
    return <p>Loading...</p>
  else
    return <div>
      <ul>
        {list.map(
          (item, index) => <li key={index}>
            {item.description}
            <input type="checkbox" checked={item.complete} readOnly/>
          </li>
        )}
      </ul>
    </div>
}

export default ComponentHttp
