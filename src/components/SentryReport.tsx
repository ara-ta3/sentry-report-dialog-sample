import * as React from "react"

export const SentryReport: React.FC<{
    onClick: () => void
}> = ( (props) => {
  return (
    <div>
        <button onClick={props.onClick}>Click</button>
    </div>
  )

})
