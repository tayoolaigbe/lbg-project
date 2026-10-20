import express from "express";
import accountsControllers from "../controllers/accountsControllers.js";

const Router = express.Router();

Router.route("/accounts")
  .get(accountsControllers.getAllAccounts)
  .post(accountsControllers.createAccount)

Router.route("/accounts/:id")
  .get(accountsControllers.getAccountById)
  .put(accountsControllers.updateAccountById)
  .delete(accountsControllers.deleteAccountById)

export default Router;