import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import * as cx from "classnames";

import { Classes, Intent } from "../../";

storiesOf("Text Input", module)
  .add("normal", () => (
    <div>
      <input
        className={Classes.INPUT}
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT])}
        placeholder="placeholder"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Classes.FILL])}
        placeholder="fill"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Classes.LARGE])}
        placeholder="large"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Classes.SMALL])}
        placeholder="small"
      />
    </div>
  ))
  .add("intents", () => (
    <div>
      <input
        className={cx([Classes.INPUT])}
        placeholder="default"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Intent.WARNING])}
        placeholder="warning"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Intent.SUCCESS])}
        placeholder="success"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, Intent.DANGER])}
        placeholder="danger"
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <input
        className={cx([Classes.INPUT, select("Intent", {
          Default: "",
          Danger: Intent.DANGER,
          Warning: Intent.WARNING,
          Success: Intent.SUCCESS,
        }, "", "changeable-intent")])}
        placeholder="variable"
      />
    </div>
  ));
