import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import * as cx from "classnames";

import { Classes } from "../../";

storiesOf("Elevation", module)
  .add("normal", () => (
    <div>
      <div
        className={cx([Classes.ELEVATION1, Classes.FILL])}
        style={{
          height: "50px",
          backgroundColor: "#fff",
        }}
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <div
        className={cx([Classes.ELEVATION2, Classes.FILL])}
        style={{
          height: "50px",
          backgroundColor: "#fff",
        }}
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <div
        className={cx([Classes.ELEVATION3, Classes.FILL])}
        style={{
          height: "50px",
          backgroundColor: "#fff",
        }}
      />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <div
        className={cx([Classes.FILL, select("Elevation", {
          1: Classes.ELEVATION1,
          2: Classes.ELEVATION2,
          3: Classes.ELEVATION3,
        })])}
        style={{
          height: "50px",
          backgroundColor: "#fff",
        }}
      />
    </div>
  ));
