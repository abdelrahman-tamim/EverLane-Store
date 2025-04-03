"use client"

export default function error({error}:{error:any}) {
  return (
    <div>
        {error.message}
    </div>
  )
}
