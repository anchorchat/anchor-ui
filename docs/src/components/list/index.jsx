import React, { Component } from 'react';
import _ from 'lodash';
import faker from 'faker';
import List from '../../../../dist/list';
import ListItem from '../../../../dist/list-item';
import Button from '../../../../dist/button';
import { IconClose } from '../../../../dist/icons';
import colors from '../../../../dist/settings/colors';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

class ListDoc extends Component {
  state = {
    amount: 10,
    users: []
  }

  componentDidMount() {
    this.renderItems(this.state.amount);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { amount } = this.state;

    if (nextState.amount && amount !== nextState.amount) {
      this.renderItems(nextState.amount);
    }
  }

  renderItems = (amount) => {
    const users = _.times(amount, (index) => ({
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
    })

    return this.setState({
      users,
      amount
    });
  }

  render() {
    const { amount, users } = this.state;
    const componentData = _.find(components, component => component.displayName === 'List');

    const style = {
      paper: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '20px',
        margin: '0 0 20px 0'
      },
      list: {
        height: '400px',
        width: '100%',
        overflowY: 'hidden'
      },
      button: { margin: '10px' }
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
          <div>
            <p style={style.button}>Render # items</p>
            <Button style={style.button} onClick={() => this.renderItems(100)}>
              <p>100</p>
            </Button>
            <Button style={style.button} onClick={() => this.renderItems(1000)}>
              <p>1000</p>
            </Button>
            <Button style={style.button} onClick={() => this.renderItems(10000)}>
              <p>10000</p>
            </Button>
            <Button style={style.button} onClick={() => this.renderItems(1e6)}>
              <p>1000000 (Heavy)</p>
            </Button>
          </div>
          <Paper style={style.paper}>
            <List
              style={style.list}
              header={`${amount} items in list`}
            >
              {users.map(user => (
                <ListItem
                  key={user.userId}
                  primaryText={user.username}
                  secondaryText={user.message}
                  avatar={user.avatar}
                  onClick={() => {}}
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
