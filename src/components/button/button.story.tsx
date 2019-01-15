import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import * as cx from "classnames";

import { Classes, Intent } from "../../";
import { Button } from "./button";

storiesOf("Button", module)
  .add("normal", () => (
    <div>
      <Button
        label={text("Label", "Default")}
      />
      <Button
        intent={Intent.WARNING}
        label="Warning"
      />
      <Button
        intent={Intent.SUCCESS}
        label="Success"
      />
      <Button
        intent={Intent.DANGER}
        label="Danger"
      />
      <Button
        label="With Right Icon"
        rightElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        label="With Left Icon"
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
    </div>
  ))
  .add("small", () => (
    <div>
      <Button
        className={Classes.SMALL}
        label={text("Label", "Default")}
      />
      <Button
        className={Classes.SMALL}
        intent={Intent.WARNING}
        label="Warning"
      />
      <Button
        className={Classes.SMALL}
        intent={Intent.SUCCESS}
        label="Success"
      />
      <Button
        className={Classes.SMALL}
        intent={Intent.DANGER}
        label="Danger"
      />
      <Button
        className={Classes.SMALL}
        label="With Right Icon"
        rightElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        className={Classes.SMALL}
        label="With Left Icon"
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
    </div>
  ))
  .add("minimal", () => (
    <div>
      <Button
        className={Classes.MINIMAL}
        label={text("Label", "Default")}
      />
      <Button
        className={Classes.MINIMAL}
        intent={Intent.WARNING}
        label="Warning"
      />
      <Button
        className={Classes.MINIMAL}
        intent={Intent.SUCCESS}
        label="Success"
      />
      <Button
        className={Classes.MINIMAL}
        intent={Intent.DANGER}
        label="Danger"
      />
      <Button
        className={Classes.MINIMAL}
        label="With Right Icon"
        rightElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        className={Classes.MINIMAL}
        label="With Left Icon"
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        className={Classes.MINIMAL}
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
    </div>
  ))
  .add("small + minimal", () => (
    <div>
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        label={text("Label", "Default")}
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        intent={Intent.WARNING}
        label="Warning"
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        intent={Intent.SUCCESS}
        label="Success"
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        intent={Intent.DANGER}
        label="Danger"
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        label="With Right Icon"
        rightElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        label="With Left Icon"
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
      <Button
        className={cx([Classes.MINIMAL, Classes.SMALL])}
        leftElement={(<span className="pickericons pickericons-texas" />)}
      />
    </div>
  ));
