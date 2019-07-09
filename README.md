# MCQ-Question-Authoring-Component

The objective is to build a Component which could facilitate authoring of Questions, which is language agnostic and could be used anywhere.

## Behaviour

A MCQ based question rendering webcomponet using angualr element which will take the props and render a question of mcq type ,can be used across all tech stack

## How to build

1. npm install
2. npm run build
3. npm run package
4. ng serve

## External use
 Can be used as 
```html
<mcq-component
  title="Question title"
  text="markdown based questiontext which can have codesnippet too"
  hint="hint text to be display for the question"
  options="it must have an  array of object,each object contais id and name property as options"
></mcq-component>
```
**Note: options property as array of object as name key and optionsText must be sanem as {key :'', optionText:''}** 

## Event Access

```js
   <script>
      const mcqcomponent = document.querySelector("mcq-component");
      mcqcomponent.addEventListener("action", event => {
        console.log(`action emitted ${event.detail}`);
      });
    </script>
```
