import { AutofillHints, DragStartBehavior, MaxLengthEnforcement, TextCapitalization, TextDirection, TextField as ITextField, TextFieldStyle, TextInputAction, TextInputType, ToolbarOptions } from "../component";
import { Component } from "./component";
export { ITextField };

export class TextField extends Component<ITextField> {
  autocorrect(autocorrect: boolean) {
    this.model.autocorrect = autocorrect;
    return this;
  }
  autofillHints(autofillHints: AutofillHints) {
    this.model.autofillHints = autofillHints;
    return this;
  }
  autofocus(autofocus: boolean) {
    this.model.autofocus = autofocus;
    return this;
  }
  buildCounter(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("buildCounter", action, props);
  }
  style(style: TextFieldStyle) {
    this.model.style = style;
    return this;
  }
  dragStartBehavior(dragStartBehavior: DragStartBehavior) {
    this.model.dragStartBehavior = dragStartBehavior;
    return this;
  }
  enabled(enabled: boolean) {
    this.model.enabled = enabled;
    return this;
  }
  enableInteractiveSelection(enableInteractiveSelection: boolean) {
    this.model.enableInteractiveSelection = enableInteractiveSelection;
    return this;
  }
  expands(expands: boolean) {
    this.model.expands = expands;
    return this;
  }
  keyboardType(keyboardType: TextInputType) {
    this.model.keyboardType = keyboardType;
    return this;
  }
  maxLength(maxLength: number) {
    this.model.maxLength = maxLength;
    return this;
  }
  maxLengthEnforcement(maxLengthEnforcement: MaxLengthEnforcement) {
    this.model.maxLengthEnforcement = maxLengthEnforcement;
    return this;
  }
  maxLines(maxLines: number) {
    this.model.maxLines = maxLines;
    return this;
  }
  minLines(minLines: number) {
    this.model.minLines = minLines;
    return this;
  }
  obscureText(obscureText: boolean) {
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
  readOnly(readOnly: boolean) {
    this.model.readOnly = readOnly;
    return this;
  }
  showCursor(showCursor: boolean) {
    this.model.showCursor = showCursor;
    return this;
  }
  textCapitalization(textCapitalization: TextCapitalization) {
    this.model.textCapitalization = textCapitalization;
    return this;
  }
  textDirection(textDirection: TextDirection) {
    this.model.textDirection = textDirection;
    return this;
  }
  textInputAction(textInputAction: TextInputAction) {
    this.model.textInputAction = textInputAction;
    return this;
  }
  toolbarOptions(toolbarOptions: ToolbarOptions) {
    this.model.toolbarOptions = toolbarOptions;
    return this;
  }
  name(name: string) {
    this.model.name = name;
    return this;
  }

  static new(value: string): TextField {
    return new TextField({
      type: "textfield",
      value: value,
    });
  }
}
