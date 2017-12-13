# Migrating from anchor-ui v4.x to v5
In this version we updated to React v16, added Portal for PopOver, updated to emojione v3, refactored and restyled Message, replaced dangerouslySetInnerHTML with html-react-parser and adjusted some styling to 8dp grid.

## React v16
React v16 is needed to use Portal to it's fullest. Without this version of React the Component just renders the children within it's parent.
```bash
$ npm i -S react@16.0.0 react-dom@16.0.0
```

## PopOver
This component now uses the React v16 createPortal function. To make sure this works React v16 is needed. Read the above paragraph to see how.

> *Note: to have your website's font in PopOver font-family style needs to be on html in `index.css`*

## IconMenu for Message
If you are using an IconMenu on your Message Component you will have to pass a full IconMenu component instead of an array of MenuItems.
```jsx
/* v5 uses iconMenu prop */
<Message
  iconMenu={
    <IconMenu>
      <MenuItem />
      ...
    </IconMenu>
  }
  ...
/>

/* v4.x */
<Message
  menuItems={[
    <MenuItem />,
    ...
  ]}
  ...
/>
```

## MessageList
Renamed prop addRef to listRef and renamed scrollDown method to scrollToBottom.
```jsx
/* v5 uses listRef prop */
<MessageList
  listRef={(node) => { this.messageList = node; }}
  ...
/>

/* v4.x */
<MessageList
  addRef={(node) => { this.messageList = node; }}
  ...
/>
```

```jsx
/* v5 with added list ref methods */
this.messageList.scrollDown => this.messageList.scrollToBottom
```

## Styling
Some styling might be slightly adjusted. Below a list of Components that are affected. If you passed override styles to one of these Components u might want to check and see if they're still the same.

- AdminBadge
- Alert
- AppHeader
- Badge
- Banner
- Button
- Card
- Message

## Removed Message type typing
This version of the method component is no longer supported within our API. Remove all references to this type of Message.
