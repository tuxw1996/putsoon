/*
 * @Author: your name
 * @Date: 2020-02-06 13:47:04
 * @LastEditTime: 2020-02-23 11:15:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-media/backend-console/build-stuff/models/media.js
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    firstname: DataTypes.STRING,
    ext: DataTypes.STRING,
    query_params: DataTypes.STRING,
    signature: DataTypes.STRING,
    file_hash: DataTypes.STRING,
    mime: DataTypes.STRING,
    status: DataTypes.STRING,
    bucket: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    // associations can be defined here
  };
  return Media;
};