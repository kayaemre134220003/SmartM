"use strict"

var NodeHelper = require("node_helper")
var logGW = (...args) => { /* do nothing */ }

module.exports = NodeHelper.create({
  start: function () {
    
  },

  socketNotificationReceived: function (noti, payload) {
    switch (noti) {
      case "INIT":
        console.log("[GATEWAY] Gateway Version:", require('./package.json').version, "rev:", require('./package.json').rev)
        this.initialize(payload)
      break
    }
  },

  initialize: async function (config) {
    this.config = config
    if (this.config.debug) logGW = (...args) => { console.log("[GATEWAY]", ...args) }
  }
})
