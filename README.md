# Anchor UI

UI kit for chat engines with React

## Usage

Install from npm

[![NPM](https://nodei.co/npm/anchor-ui.png)](https://nodei.co/npm/anchor-ui/)

### Components

`withTheme` higherOrderComponent for providing theme color context

Usage:
```javascript
export default withTheme(YourComponent, '#1ba6c4');
```

Arguments:

| Name           | Type      | Required | Default | Description               |
|:---------------|:----------|:---------|:--------|:--------------------------|
| ChildComponent | Component | Yes      |         | Child component to render |
| color          | String    | Yes      | {}      | Theme color               |

---

`<Avatar />` used for rendering a user's profile image.

Props:

| Name  | Type   | Required | Default | Description                             |
|:------|:-------|:---------|:--------|:----------------------------------------|
| image | String | Yes      |         | Path to user's profile image            |
| style | Object | No       | {}      | Override the styles of the root element |

---

`<AppHeader />` the app's header.

Props:

| Name        | Type   | Required | Default | Description                              |
|:------------|:-------|:---------|:--------|:-----------------------------------------|
| text        | String | Yes      |         | Title text (your app's name)             |
| icon        | Node   | No       | null    | Icon (your app's logo)                   |
| rightButton | Node   | No       | null    | A button for the right side of the input |
| style       | Object | No       | {}      | Override the styles of the root element  |
| textStyle   | Object | No       | {}      | Override the styles of the root element  |
| iconStyle   | Object | No       | {}      | Override the styles of the root element  |

---

`<Badge />` used for notification counter.

Props:

| Name    | Type                 | Required | Default | Description                             |
|:--------|:---------------------|:---------|:--------|:----------------------------------------|
| content | String, Number, Node | Yes      |         | Content to be rendered                  |
| style   | Object               | No       | {}      | Override the styles of the root element |

---

`<Button />`

Props:

| Name       | Type     | Required | Default | Description                                     |
|:-----------|:---------|:---------|:--------|:------------------------------------------------|
| children   | Element  | Yes      |         | Button content                                  |
| iconButton | Boolean  | No       | false   | Switches between icon-button and normal button  |
| onClick    | Function | Yes      |         | Button onClick function                         |
| style      | Object   | No       | {}      | Override the styles of the root element         |

---

`<ChannelHeader />` a channel's header containing the channel name

Props:

| Name            | Type   | Required | Default | Description                             |
|:----------------|:-------|:---------|:--------|:----------------------------------------|
| name            | String | Yes      |         | Header content                          |
| style           | Object | No       | {}      | Override the styles of the root element |
| headerTextStyle | Object | No       | {}      | Override the styles of the text element |

---

`<EmptyState />` used for empty states

Props:

| Name        | Type     | Required | Default | Description                                 |
|:------------|:---------|:---------|:--------|:--------------------------------------------|
| headerText  | String   | Yes      |         | Header text                                 |
| bodyText    | String   | Yes      |         | Body text                                   |
| button      | Node     | No       | {}      | Render a call to action button              |
| style       | Object   | No       | {}      | Override the styles of the root element     |
| headerStyle | Object   | No       | {}      | Override the styles of the header text      |
| bodyStyle   | Object   | No       | {}      | Override the styles of the body text        |

---

`<List />`

Props:

| Name     | Type     | Required | Default | Description                             |
|:---------|:---------|:---------|:--------|:----------------------------------------|
| children | Node     | Yes      |         | List content                            |
| listRef  | Function | No       |         | Ref function to the <ul /> element      |
| style    | Object   | No       | {}      | Override the styles of the root element |

---

`<ListItem />`

Props:

| Name               | Type     | Required | Default | Description                                      |
|:-------------------|:---------|:---------|:--------|:-------------------------------------------------|
| primaryText        | String   | Yes      |         | The list item's primary text                     |
| secondaryText      | String   | Yes      |         | The list item's secondary text                   |
| active             | Boolean  | No       | false   | Add active styles to ListItem                    |
| onClick            | Function | Yes      |         | Click function for the root element              |
| style              | Object   | No       | {}      | Override the styles of the root element          |
| primaryTextStyle   | Object   | No       | {}      | Override the styles of the primaryText element   |
| secondaryTextStyle | Object   | No       | {}      | Override the styles of the secondaryText element |

---

`<Message />`

Props:

| Name               | Type           | Required | Default | Description                                                                                       |
|:-------------------|:---------------|:---------|:--------|:--------------------------------------------------------------------------------------------------|
| message            | Object         | Yes      |         | Mesage object containing: body, createdAt, username                                               |
| message.body       | String         | Yes      |         | The message's body text                                                                           |
| message.createdAt  | String, Date   | Yes      |         | Time when the message was created                                                                 |
| message.username   | String         | Yes      |         | The sender's username                                                                             |
| timeFormat         | String         | No       | 'HH:mm' | The [format](http://momentjs.com/docs/#/displaying/format/) in which to display message.createdAt |
| avatar             | String         | No       | ''      | Path to the user's profile image, will render <Avatar /> if supplied                              |
| myMessage          | Boolean        | No       | false   | Flag used to change message styles, set to true if the message belongs to the current user        |
| style              | Object         | No       | {}      | Override the styles of the root element                                                           |
| messageBodyStyle   | Object         | No       | {}      | Override the styles of the body element                                                           |
| messageHeaderStyle | Object         | No       | {}      | Override the styles of the header element                                                         |
| messageTimeStyle   | Object         | No       | {}      | Override the styles of the time element                                                           |
| emoji              | Boolean        | No       | false   | Enable emojione for messages                                                                      |

---

`<MessageInput />` text input for message

Props:

| Name        | Type     | Required | Default | Description                              |
|:------------|:---------|:---------|:--------|:-----------------------------------------|
| value       | String   | Yes      |         | The input's value                        |
| placeholder | String   | Yes      |         | The input's placeholder                  |
| onChange    | Function | Yes      |         | Change the input's value                 |
| sendMessage | Function | Yes      |         | Send a message                           |
| style       | Object   | No       | {}      | Override the styles of the root element  |
| inputStyle  | Object   | No       | {}      | Override the styles of the input element |
| maxLength   | Number   | No       | 500     | The input's max length                   |
| leftButton  | Node     | No       | null    | A button for the left side of the input  |
| inputRef    | Function | No       |         | Ref function to the <input /> element    |

---

`<ProfileCard />` used for rendering a user's profile details.

Props:

| Name     | Type   | Required | Default | Description                                                          |
|:---------|:-------|:---------|:--------|:---------------------------------------------------------------------|
| username | String | Yes      |         | The user's username                                                  |
| avatar   | String | Yes      |         | Path to the user's profile image, will render <Avatar /> if supplied |
| style    | Object | No       | {}      | Override the styles of the root element                              |

---

`<Input />` general input for forms

Props:

| Name        | Type     | Required | Default | Description                              |
|:------------|:---------|:---------|:--------|:-----------------------------------------|
| value       | String   | Yes      |         | The input's value                        |
| label       | String   | Yes      |         | The input's label                        |
| onChange    | Function | Yes      |         | Change the input's value                 |
| style       | Object   | No       | {}      | Override the styles of the root element  |
| inputStyle  | Object   | No       | {}      | Override the styles of the input element |
| labelStyle  | Object   | No       | {}      | Override the styles of the label element |
| maxLength   | Number   | No       | 500     | The input's max length                   |

---

## Installation

### src

Install `node_modules` used in `./src`:

```bash
$ npm i
```

Compile `./src` with Babel:

```bash
$ npm run compile
```

### examples

Install `node_modules` used in `./examples`:

```bash
$ cd examples && npm i
```

## Development

### src

To watch for changes in `./src` run:

```bash
$ npm run watch
```

Babel will compile `./src` on changes.

### examples

To start the webpack server run:

```bash
$ cd examples && npm run start
```

Webpack wil compile on changes in `./examples/src`.

## License

This project is licensed under the terms of the [MIT license](https://github.com/anchorchat/anchor-ui/blob/master/LICENSE).
