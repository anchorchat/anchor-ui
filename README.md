# Anchor UI

UI kit for chat engines with React

## Usage

Install from npm

[![NPM](https://nodei.co/npm/anchor-ui.png)](https://nodei.co/npm/anchor-ui/)

### Components

`<Avatar />` used for rendering a user's profile image.

Props:

| Name  | Type   | Required | Default | Description                             |
|-------|--------|----------|---------|-----------------------------------------|
| image | String | Yes      |         | Path to user's profile image            |
| style | Object |          |         | Override the styles of the root element |

---

`<Badge />` used for notification counter.

Props:

| Name    | Type                 | Required | Default | Description                             |
|---------|----------------------|----------|---------|-----------------------------------------|
| content | String, Number, Node | Yes      |         | Content to be rendered                  |
| style   | Object               |          |         | Override the styles of the root element |

---

`<Button />`

Props:

| Name     | Type    | Required | Default | Description                             |
|----------|---------|----------|---------|-----------------------------------------|
| children | Element | Yes      |         | Button content                          |
| style    | Object  |          |         | Override the styles of the root element |

---

`<ChannelHeader />` a channel's header containing the channel name

Props:

| Name            | Type   | Required | Default | Description                             |
|-----------------|--------|----------|---------|-----------------------------------------|
| name            | String | Yes      |         | Button content                          |
| style           | Object |          |         | Override the styles of the root element |
| headerTextStyle | Object |          |         | Override the styles of the text element |

---

`<List />`

Props:

| Name     | Type   | Required | Default | Description                             |
|----------|--------|----------|---------|-----------------------------------------|
| children | Node   | Yes      |         | List content                            |
| style    | Object |          |         | Override the styles of the root element |

---

`<ListItem />`

Props:

| Name               | Type     | Required | Default | Description                                      |
|--------------------|----------|----------|---------|--------------------------------------------------|
| primaryText        | String   | Yes      |         | The list items primary text                      |
| secondaryText      | String   | Yes      |         | The list items secondary text                    |
| onClick            | Function | Yes      |         | Click function for the root element              |
| style              | Object   |          |         | Override the styles of the root element          |
| primaryTextStyle   | Object   |          |         | Override the styles of the primaryText element   |
| secondaryTextStyle | Object   |          |         | Override the styles of the secondaryText element |

---

`<Message />`

Props:

| Name               | Type           | Required | Default | Description                                                                                       |
|--------------------|----------------|----------|---------|---------------------------------------------------------------------------------------------------|
| message            | Object         | Yes      |         | Mesage object containing: body, createdAt, username                                               |
| message.body       | String         | Yes      |         | The message's body text                                                                           |
| message.createdAt  | String, Date   | Yes      |         | Time when the message was created                                                                 |
| message.username   | String         | Yes      |         | The sender's username                                                                             |
| timeFormat         | String         |          | 'HH:mm' | The [format](http://momentjs.com/docs/#/displaying/format/) in which to display message.createdAt |
| avatar             | String         |          |         | Path to the user's profile image, will render <Avatar /> if supplied                              |
| myMessage          | Boolean        |          | false   | Flag used to change message styles, set to true if the message belongs to the current user        |
| style              | Object         |          |         | Override the styles of the root element                                                           |
| messageBodyStyle   | Object         |          |         | Override the styles of the body element                                                           |
| messageHeaderStyle | Object         |          |         | Override the styles of the header element                                                         |
| messageTimeStyle   | Object         |          |         | Override the styles of the time element                                                           |

---

`<MessageInput />` text input for message

Props:

| Name        | Type     | Required | Default | Description                              |
|-------------|----------|----------|---------|------------------------------------------|
| value       | String   | Yes      |         | The list items primary text              |
| placeholder | String   | Yes      |         | The list items primary text              |
| onChange    | Function | Yes      |         | Change the input's value                 |
| sendMessage | Function | Yes      |         | Send a message                           |
| style       | Object   |          |         | Override the styles of the root element  |
| inputStyle  | Object   |          |         | Override the styles of the input element |

`<ProfileCard />` used for rendering a user's profile details.

Props:

| Name     | Type   | Required | Default | Description                             |
|----------|--------|----------|---------|-----------------------------------------|
| username | String | Yes      |         | The user's username                     |
| style    | Object |          |         | Override the styles of the root element |

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
