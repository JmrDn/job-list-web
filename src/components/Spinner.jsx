import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const override = {
        display: 'block',
        margin: '100px auto',
    }
  return (
    <ClipLoader
    loading={loading}
    color='#ebeb28'
    cssOverride={override}
    size={100}
    />
  )
}

export default Spinner
