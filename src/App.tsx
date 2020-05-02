import React from "react";
import "./App.css";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import catalogJa from "./locales/ja.js";

i18n.load("ja", catalogJa.messages);
i18n.activate("ja");

const name = "foo";

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <h1>
          <Trans id="foo">hi {name}!</Trans>
        </h1>
      </div>
    </I18nProvider>
  );
}

export default App;
