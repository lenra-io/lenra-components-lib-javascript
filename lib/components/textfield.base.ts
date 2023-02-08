import { TextField as ITextField } from '../component'
import { Component } from './component';

export { ITextField }

export class TextFieldBaseImpl extends Component<ITextField> {
    autocorrect(autocorrect: ITextField['autocorrect']) {
        this.model.autocorrect = autocorrect;
        return this;
    }
    autofillHints(autofillHints: ITextField['autofillHints']) {
        this.model.autofillHints = autofillHints;
        return this;
    }
    autofocus(autofocus: ITextField['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    buildCounter(buildCounter: ITextField['buildCounter']) {
        this.model.buildCounter = buildCounter;
        return this;
    }
    style(style: ITextField['style']) {
        this.model.style = style;
        return this;
    }
    dragStartBehavior(dragStartBehavior: ITextField['dragStartBehavior']) {
        this.model.dragStartBehavior = dragStartBehavior;
        return this;
    }
    enabled(enabled: ITextField['enabled']) {
        this.model.enabled = enabled;
        return this;
    }
    enableInteractiveSelection(enableInteractiveSelection: ITextField['enableInteractiveSelection']) {
        this.model.enableInteractiveSelection = enableInteractiveSelection;
        return this;
    }
    expands(expands: ITextField['expands']) {
        this.model.expands = expands;
        return this;
    }
    keyboardType(keyboardType: ITextField['keyboardType']) {
        this.model.keyboardType = keyboardType;
        return this;
    }
    maxLength(maxLength: ITextField['maxLength']) {
        this.model.maxLength = maxLength;
        return this;
    }
    maxLengthEnforcement(maxLengthEnforcement: ITextField['maxLengthEnforcement']) {
        this.model.maxLengthEnforcement = maxLengthEnforcement;
        return this;
    }
    maxLines(maxLines: ITextField['maxLines']) {
        this.model.maxLines = maxLines;
        return this;
    }
    minLines(minLines: ITextField['minLines']) {
        this.model.minLines = minLines;
        return this;
    }
    obscureText(obscureText: ITextField['obscureText']) {
        this.model.obscureText = obscureText;
        return this;
    }
    onAppPrivateCommand(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onAppPrivateCommand", action, props); }
    onChanged(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChanged", action, props); }
    onEditingComplete(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onEditingComplete", action, props); }
    onSubmitted(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onSubmitted", action, props); }
    onTap(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onTap", action, props); }
    readOnly(readOnly: ITextField['readOnly']) {
        this.model.readOnly = readOnly;
        return this;
    }
    showCursor(showCursor: ITextField['showCursor']) {
        this.model.showCursor = showCursor;
        return this;
    }
    textCapitalization(textCapitalization: ITextField['textCapitalization']) {
        this.model.textCapitalization = textCapitalization;
        return this;
    }
    textDirection(textDirection: ITextField['textDirection']) {
        this.model.textDirection = textDirection;
        return this;
    }
    textInputAction(textInputAction: ITextField['textInputAction']) {
        this.model.textInputAction = textInputAction;
        return this;
    }
    toolbarOptions(toolbarOptions: ITextField['toolbarOptions']) {
        this.model.toolbarOptions = toolbarOptions;
        return this;
    }
    name(name: ITextField['name']) {
        this.model.name = name;
        return this;
    }
}
