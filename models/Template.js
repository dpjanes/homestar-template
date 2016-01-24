/*
 *  Template.js
 *
 *  David Janes
 *  IOTDB
 *  YYYY-MM-DD
 */

var iotdb = require("iotdb");

exports.binding = {
    bridge: require('../TemplateBridge').Bridge,
    model: require('./Template.json'),
};
