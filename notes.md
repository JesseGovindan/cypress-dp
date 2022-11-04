# Lessons learnt
## Custom HTML Validation
### Setting a custom validation message
- It is possible to set custom validation message on an input tag using the setCustomValidity method
- The validation message can then be reset by calling setCustomValidity with an empty string
- It is important to reset the custom validity message before the form is submitted.
### Determining the type of error or warning on an invalid input tag
- onInvalid listener can be added to the element
- element contains a getValidityState that can be inspected to figure out what the browser deemed wrong with the input

## Aria Roles
- It is better to add/use aria roles to identify elements than adding custom classes/ids
- aria roles also make your site more usable to the differently abled
