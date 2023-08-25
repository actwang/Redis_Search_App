

import React, { useState } from 'react'

const SearchForm = () => {

    const [hits, setHits] = useState([]);

    const search = async(e) =>{
        const q = e.target.value;

        if (q.length > 2){
            const params = new URLSearchParams({ q });

            const res = await fetch('/api/search?'+ params);
            console.log(res);
            const result = await res.json();
            console.log(result);
            setHits(result['cars']);
        }
    }

  return (
    <div>
        <input onChange={search} type='text' />
        <ul>
            {
                hits.map((hit) => {
                    <li key={hit.entityId}>
                        {hit.make} {hit.model}
                    </li>
                })
            }
        </ul>
    </div>
  );
}

export default SearchForm