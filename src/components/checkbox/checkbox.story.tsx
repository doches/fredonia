import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as cx from "classnames";

import { Classes, Intent } from "../../";
import { Checkbox } from "./checkbox";

import "./checkbox.less";

storiesOf("Checkbox", module)
  .add("normal", () => (
    <div>
      <Checkbox id={"1"} />
      <Checkbox id={"2"} checked={true} />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <Checkbox id={"3"} className={Classes.LARGE} />
      <Checkbox id={"4"} className={Classes.LARGE} checked={true} />
      <div style={{marginBottom: "10px", display: "block"}}/>
      <Checkbox id={"5"} className={Classes.LARGE} label="with label" />
      <Checkbox id={"6"} className={Classes.LARGE} checked={true} label="with label" />
      <div style={{marginBottom: "10px", display: "block"}}/>
    </div>
  ));
