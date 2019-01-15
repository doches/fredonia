import * as React from "react";
import * as cx from "classnames";
import {
  Classes,
} from "../../";

import "./button.less";

export interface IButtonProps {
  label?: string;
  className?: string;
  intent?: string;
  rightElement?: React.ReactElement<any>;
  leftElement?: React.ReactElement<any>;
  onClick?: () => void;
}

export class Button extends React.Component<IButtonProps, {}> {
  public render() {
    return (
      <button
        className={cx([Classes.BUTTON, this.props.className, this.props.intent])}
        onClick={this.onClick}
      >
        {this.props.leftElement}
        {this.props.leftElement && this.props.label && (" ")}
        {this.props.label}
        {(this.props.leftElement || this.props.label) && this.props.rightElement && (" ")}
        {this.props.rightElement}
      </button>
    );
  }

  public onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
}
