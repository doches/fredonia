import * as React from "react";
import * as cx from "classnames";
import {
  Classes,
} from "../../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
} from "@fortawesome/pro-regular-svg-icons";

export interface ICheckboxProps {
  className?: string;
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  intent?: string;
  label?: string;
  id: string;
}

export interface ICheckboxState {
  value: boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  public state: ICheckboxState;
  constructor(props: ICheckboxProps) {
    super(props);

    this.state = {
      value: !!props.checked,
    };
  }

  public render() {
    return (
      <div className={Classes.CHECKBOX}>
        <input
          className={cx([this.props.className, this.props.intent])}
          name={this.props.name}
          checked={this.props.checked}
          type="checkbox"
          value={this.state.value ? 1 : 0}
          onChange={this.onChange}
          id={this.props.id}
        />
        <label
          htmlFor={this.props.id}
        >
          {this.props.label || ""}
        </label>
        {this.state.value && (<FontAwesomeIcon icon={faCheck} />)}
      </div>
    );
  }

  public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.checked,
    });

    if (this.props.onChange) {
      this.props.onChange(event.target.checked);
    }
  }
}
