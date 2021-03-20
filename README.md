# IFrame and shadow dom Example
### select h1 inside the first shadow
```javascript
document.querySelector('#containerrr').shadowRoot.querySelector('h1').getBoundingClientRect()
```

### select h1 inside the shadow inside the second iframe
```javascript
document.querySelectorAll('iframe')[1].contentWindow.document.querySelector("#shadowwcontainer").shadowRoot.querySelector('h1').getBoundingClientRect()
```

# How to see ALL events of a page in Chrome Developer Tools?
Simply run monitorEvents(object [, events]) in your console, e.g. monitorEvents(document.body, "dragenter") or for all events monitorEvents(document.body).
To stop it run unmonitorEvents(document.body).
