import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Ninjas} from './../imports/api/ninjas';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let ninjas = Ninjas.find().fetch();
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} ninjas={ninjas}/>, document.getElementById('app'));
  });
});
