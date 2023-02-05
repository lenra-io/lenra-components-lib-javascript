import { TextField as ITextField } from "../component";
import { Component } from "./component";
export { ITextField };

export class TextField extends Component<ITextField> {
  autocorrect(autocorrect) {
    this.model.autocorrect = autocorrect;
    return this;
  }
  autofillHints(autofillHints) {
    this.model.autofillHints = autofillHints;
    return this;
  }
  autofocus(autofocus) {
    this.model.autofocus = autofocus;
    return this;
  }
  buildCounter(buildCounter) {
    this.model.buildCounter = buildCounter;
    return this;
  }
  style(style) {
    this.model.style = style;
    return this;
  }
  dragStartBehavior(dragStartBehavior) {
    this.model.dragStartBehavior = dragStartBehavior;
    return this;
  }
  enabled(enabled) {
    this.model.enabled = enabled;
    return this;
  }
  enableInteractiveSelection(enableInteractiveSelection) {
    this.model.enableInteractiveSelection = enableInteractiveSelection;
    return this;
  }
  expands(expands) {
    this.model.expands = expands;
    return this;
  }
  keyboardType(keyboardType) {
    this.model.keyboardType = keyboardType;
    return this;
  }
  maxLength(maxLength) {
    this.model.maxLength = maxLength;
    return this;
  }
  maxLengthEnforcement(maxLengthEnforcement) {
    this.model.maxLengthEnforcement = maxLengthEnforcement;
    return this;
  }
  maxLines(maxLines) {
    this.model.maxLines = maxLines;
    return this;
  }
  minLines(minLines) {
    this.model.minLines = minLines;
    return this;
  }
  obscureText(obscureText) {
    this.model.obscureText = obscureText;
    return this;
  }
  onAppPrivateCommand(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onAppPrivateCommand", action, props);
  }
  onChanged(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onChanged", action, props);
  }
  onEditingComplete(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onEditingComplete", action, props);
  }
  onSubmitted(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onSubmitted", action, props);
  }
  onTap(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onTap", action, props);
  }
  readOnly(readOnly) {
    this.model.readOnly = readOnly;
    return this;
  }
  showCursor(showCursor) {
    this.model.showCursor = showCursor;
    return this;
  }
  textCapitalization(textCapitalization) {
    this.model.textCapitalization = textCapitalization;
    return this;
  }
  textDirection(textDirection) {
    this.model.textDirection = textDirection;
    return this;
  }
  textInputAction(textInputAction) {
    this.model.textInputAction = textInputAction;
    return this;
  }
  toolbarOptions(toolbarOptions) {
    this.model.toolbarOptions = toolbarOptions;
    return this;
  }
  name(name) {
    this.model.name = name;
    return this;
  }

  static new(value): TextField {
    return new TextField({
      type: "textfield",
      value: value,
    });
  }
}
