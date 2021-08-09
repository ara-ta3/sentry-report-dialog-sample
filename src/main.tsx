import * as React from "react"
import * as ReactDOM from "react-dom"
import { init as SentryInit, reportSentry } from "./Sentry";
import { SentryReport } from "./components/SentryReport";

SentryInit()

ReactDOM.render(
  <SentryReport onClick={() => {
    reportSentry(new Error("hoge"))
  }}/>,
  document.getElementById("root")
)
