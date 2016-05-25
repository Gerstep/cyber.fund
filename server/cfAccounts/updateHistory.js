const selectorService = require("../../imports/userFunds").selectorService;
const updateUserFunds = require("../../imports/userFunds/userHistory").updateUserFunds;
const handleArrayWithInterval = require("../../imports/api/handleArray").handleArrayWithInterval

const print = CF.Utils.logger.getLogger('FUNDS').print

function dealWithPopulars(){
  print("starting hourly funds recalculation (for lucky funds)", true)
  handleArrayWithInterval( _.pluck( Meteor.users.find(selectorService, {fields: {_id: 1}}).fetch(), '_id'), 8000, updateUserFunds)
}

function dealWithAll(){
  print("starting daily/3 funds recalculation (for all funds)", true)
  handleArrayWithInterval( _.pluck( Meteor.users.find({}, {fields: {_id: 1}}).fetch(), '_id'), 8000, updateUserFunds)
}

SyncedCron.add({
  name: 'hourly user history',
  schedule: function (parser) {
    return parser.cron('49 * * * *', false);
  },
  job: function () {
    dealWithPopulars();
  }
})



SyncedCron.add({
  name: 'daily user history',
  schedule: function (parser) {
    return parser.cron("17 1 * * *", false);
  },
  job: function () {
    dealWithAll();
  }
});

SyncedCron.add({
  name: 'daily user history 2',
  schedule: function (parser) {
    return parser.cron("17 9 * * *", false);
  },
  job: function () {
    dealWithAll();
  }
});

SyncedCron.add({
  name: 'daily user history 3',
  schedule: function (parser) {
    return parser.cron("17 17 * * *", false);
  },
  job: function () {
    dealWithAll();
  }
});

// dev test only
Meteor.startup(function(){
//  dealWithPopulars();
})
