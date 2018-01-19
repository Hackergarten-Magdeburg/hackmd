'use strict'
// external modules
var md5 = require('blueimp-md5')
var Sequelize = require('sequelize')
var scrypt = require('scrypt')

// core
var logger = require('../logger')
var letterAvatars = require('../letter-avatars')

module.exports = function (sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.TEXT,
      unique: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        Group.belongsToMany(models.User, {
          through: {
            model: models.GroupUser,
            unique: false,
          },
          foreignKey: 'groupId',
          constraints: false
        })
        Group.hasMany(models.Note, {
          foreignKey: 'groupId',
          constraints: false
        })
      }
    }
  })

  return Group
}
