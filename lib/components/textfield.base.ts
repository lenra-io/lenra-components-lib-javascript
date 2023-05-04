import { TextField as ITextField } from '../component'
import { Component } from './component';

export { ITextField }

export class TextFieldBaseImpl extends Component<ITextField> {
    /**
     * Whether to enable the autocorrection
     */
    autocorrect(autocorrect: ITextField['autocorrect']) {
        this.model.autocorrect = autocorrect;
        return this;
    }
    /**
     * The type of this text input to provide autofill hints.
     */
    autofillHints(autofillHints: ITextField['autofillHints']) {
        this.model.autofillHints = autofillHints;
        return this;
    }
    /**
     * Whether this Textfield should be focused initially.
     */
    autofocus(autofocus: ITextField['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    /**
     * Callback that generates a custom counter view.
     */
    buildCounter(buildCounter: ITextField['buildCounter']) {
        this.model.buildCounter = buildCounter;
        return this;
    }
    /**
     * The style of the Textfield.
     */
    style(style: ITextField['style']) {
        this.model.style = style;
        return this;
    }
    /**
     * Determines the way that drag start behavior is handled.
     */
    dragStartBehavior(dragStartBehavior: ITextField['dragStartBehavior']) {
        this.model.dragStartBehavior = dragStartBehavior;
        return this;
    }
    /**
     * Whether the text field is enabled.
     */
    enabled(enabled: ITextField['enabled']) {
        this.model.enabled = enabled;
        return this;
    }
    /**
     * Whether to enable user interface options to change the text selection.
     */
    enableInteractiveSelection(enableInteractiveSelection: ITextField['enableInteractiveSelection']) {
        this.model.enableInteractiveSelection = enableInteractiveSelection;
        return this;
    }
    /**
     * Whether the TextField is sized to fill its parent.
     */
    expands(expands: ITextField['expands']) {
        this.model.expands = expands;
        return this;
    }
    /**
     * The type of the keyboard to use for editing the text.
     */
    keyboardType(keyboardType: ITextField['keyboardType']) {
        this.model.keyboardType = keyboardType;
        return this;
    }
    /**
     * The maximum number of characters to allow in the text field.
     */
    maxLength(maxLength: ITextField['maxLength']) {
        this.model.maxLength = maxLength;
        return this;
    }
    /**
     * Determines how the maxLength limit should be enforced.
     */
    maxLengthEnforcement(maxLengthEnforcement: ITextField['maxLengthEnforcement']) {
        this.model.maxLengthEnforcement = maxLengthEnforcement;
        return this;
    }
    /**
     * The maximum number of lines to show at one time.
     */
    maxLines(maxLines: ITextField['maxLines']) {
        this.model.maxLines = maxLines;
        return this;
    }
    /**
     * The minimum number of lines to occupy on the screen.
     */
    minLines(minLines: ITextField['minLines']) {
        this.model.minLines = minLines;
        return this;
    }
    /**
     * Whether to hide the text being edited.
     */
    obscureText(obscureText: ITextField['obscureText']) {
        this.model.obscureText = obscureText;
        return this;
    }
    /**
     * This is used to receive a private command from the input method.
     */
    onAppPrivateCommand(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onAppPrivateCommand", action, props); }
    /**
     * Callback when the user changes the text field value.
     */
    onChanged(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChanged", action, props); }
    /**
     * Callback when the user finishes editing the text field.
     */
    onEditingComplete(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onEditingComplete", action, props); }
    /**
     * Callback when the user tells he is done editing the text field.
     */
    onSubmitted(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onSubmitted", action, props); }
    /**
     * Callback when the user taps on the text field.
     */
    onTap(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onTap", action, props); }
    /**
     * Whether the text can be changed.
     */
    readOnly(readOnly: ITextField['readOnly']) {
        this.model.readOnly = readOnly;
        return this;
    }
    /**
     * Whether to show the cursor.
     */
    showCursor(showCursor: ITextField['showCursor']) {
        this.model.showCursor = showCursor;
        return this;
    }
    /**
     * Configures how the platform keyboard will select an uppercase or lowercase keyboard.
     */
    textCapitalization(textCapitalization: ITextField['textCapitalization']) {
        this.model.textCapitalization = textCapitalization;
        return this;
    }
    /**
     * The direction of the text.
     */
    textDirection(textDirection: ITextField['textDirection']) {
        this.model.textDirection = textDirection;
        return this;
    }
    /**
     * The type of the action button to use for the keyboard.
     */
    textInputAction(textInputAction: ITextField['textInputAction']) {
        this.model.textInputAction = textInputAction;
        return this;
    }
    /**
     * Configuration of toolbar options
     */
    toolbarOptions(toolbarOptions: ITextField['toolbarOptions']) {
        this.model.toolbarOptions = toolbarOptions;
        return this;
    }
    /**
     * The name that will be used in the form.
     */
    name(name: ITextField['name']) {
        this.model.name = name;
        return this;
    }
}
