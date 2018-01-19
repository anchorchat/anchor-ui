import React, { Component } from 'react';
import _ from 'lodash';
import faker from 'faker';
import List from '../../../../dist/list';
import ListItem from '../../../../dist/list-item';
import Select from '../../../../dist/select';
import MenuItem from '../../../../dist/menu-item';
import Input from '../../../../dist/input';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

class ListDoc extends Component {
  state = {
    amount: 10,
    index: 0,
    users: []
  }

  componentDidMount() {
    this.renderItems({}, this.state.amount);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { amount } = this.state;

    if (nextState.amount && amount !== nextState.amount) {
      this.renderItems({}, nextState.amount);
    }
  }

  scrollToIndex = (event) => {
    const { amount } = this.state;

    let index = Math.min(
      amount - 1,
      parseInt(event.target.value, 10)
    );

    if (_.isNaN(index)) {
      index = undefined;
    }

    this.setState({ index });
  }

  renderItems = (event, amount) => {
    const users = _.times(amount, () => ({
      userId: faker.random.uuid(),
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      message: faker.lorem.sentence()
    }));

    users.sort((a, b) => {
      const nameA = a.username.toUpperCase(); // ignore upper and lowercase
      const nameB = b.username.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    return this.setState({
      users,
      amount
    });
  }

  render() {
    const { amount, index, users } = this.state;
    const componentData = _.find(components, component => component.displayName === 'List');

    const style = {
      paper: {
        padding: '16px',
        margin: '0 0 16px 0'
      },
      list: {
        height: '400px',
        width: '100%',
        overflowY: 'hidden'
      },
      button: {
        margin: '10px'
      },
      input: {
        margin: '10px'
      },
      select: {
        width: '256px',
        marginRight: '16px'
      },
      flex: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '16px'
      }
    };

    return (
      <article className="page">
        <h1>List</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={example} title="Code example" />
        <section>
          <h1>Examples</h1>
          <section style={style.flex}>
            <Select
              value={amount}
              onChange={this.renderItems}
              label="Number of items"
              style={style.select}
            >
              <MenuItem value={100} text="100" />
              <MenuItem value={1000} text="1000" />
              <MenuItem value={10000} text="10000" />
              <MenuItem value={100000} text="100000" />
            </Select>
            <Input
              onChange={this.scrollToIndex}
              value={index || ''}
              type="number"
              label="Scroll to index"
              name="scroll-to-index"
              max={amount - 1}
            />
          </section>
          <Paper style={style.paper}>
            <List
              style={style.list}
              header={`${amount} items in list`}
              scrollToIndex={index}
            >
              {users.map(user => (
                <ListItem
                  key={user.userId}
                  primaryText={user.username}
                  secondaryText={user.message}
                  avatar={user.avatar}
                />
              ))}
            </List>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default ListDoc;
