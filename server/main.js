import {Meteor} from 'meteor/meteor';
import {Ninjas} from './../imports/api/ninjas';

Meteor.startup(function () {
  // Players.insert({
  //   name: 'Vikram',
  //   score: 99
  // });
  console.log(Ninjas.find().fetch());
});
