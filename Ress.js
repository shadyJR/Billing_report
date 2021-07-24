import React from 'react'
import Outress from './Outress'

export default function Ress({ na}) {
    return (
        na.map(elm =>{
            return <Outress key={elm} elm={elm} />
        })
    )
}
