/*
 * @Author: your name
 * @Date: 2020-02-03 10:47:49
 * @LastEditTime: 2020-02-24 09:04:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-media/app/controller/backend.js
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller Backend
 */
class BackendController extends Controller {

  /**
   * @summary backend login
   * @description login Api, success return access_token or 401
   * @router POST /api/v1/backend/login
   * @request body authorize_login *login
   * @response 200 base_response ok
   */
  async login() {
    let {login, password} = this.ctx.request.body;
    let {ctx} = this;
    let adminuser = await ctx.service.backend.authorize(login,password);
    
    if (adminuser) {
      let token = await ctx.service.backend.genToken({login:adminuser.login, nickname:adminuser.nickname, user_id:adminuser.id});
      ctx.status = 200;
      ctx.body = this.ctx.helper.JsonFormat_ok({access_token:token});
    }else{
      ctx.status = 401;
    }
  }

  /**
   * @summary backend login
   * @description login Api, success return access_token or 401
   * @consumes application/x-www-form-urlencoded
   * @router POST /api/v1/backend/login2
   * @request formData string *login login account
   * @request formData string *password login password
   * @response 200 base_response ok
   */

  async login2() {
    let {login, password} = this.ctx.request.body;
    let {ctx} = this;
    let adminuser = await ctx.service.backend.authorize(login,password);

    if (adminuser) {
      let token = await ctx.service.backend.genToken({login:adminuser.login, nickname:adminuser.nickname, user_id:adminuser.id});
      ctx.status = 200;
      ctx.body = this.ctx.helper.JsonFormat_ok({access_token:token});
    }else{
      ctx.status = 401;
    }
  }
}

module.exports = BackendController;