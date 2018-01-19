'use strict'
// external modules
var md5 = require('blueimp-md5')
var Sequelize = require('sequelize')
var scrypt = require('scrypt')

// core
var logger = require('../logger')
var letterAvatars = require('../letter-avatars')

module.exports = function (sequelize, DataTypes) {
  var GroupUser = sequelize.define('GroupUser', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.UUID
    },
    groupId: {
      type: Sequelize.UUID
    }
  })
  return GroupUser
}
