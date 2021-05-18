const models = require("../models");
const Account = models.Account;

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json({
      accounts,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error getting accounts",
      },
    });
  }
};

const createAccount = async (req, res) => {
  const { name, holder, identification, accountNumber, userId } = req.body;
  try {
    const account = await Account.create({
      name,
      holder,
      identification,
      accountNumber,
      userId,
    });
    res.json({
      account,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error creating a menu",
      },
    });
  }
};

const updateAccount = async (req, res) => {
  const id = req.params.id;

  const { name, holder, identification, accountNumber, accountEmail, userId } =
    req.body;

  try {
    const accountFound = await Account.findByPk(id);

    if (accountFound == null) {
      return res.status(400).json({
        msg: "Account not found",
      });
    }

    if (name !== undefined) {
      accountFound.name = name;
    }

    if (holder !== undefined) {
      accountFound.holder = holder;
    }

    if (identification !== undefined) {
      accountFound.identification = identification;
    }

    if (accountNumber !== undefined) {
      accountFound.accountNumber = accountNumber;
    }

    if (accountEmail !== undefined) {
      accountFound.accountEmail = accountEmail;
    }

    if (userId !== undefined) {
      accountFound.userId = userId;
    }

    const accountSaved = await accountFound.save();

    res.json({
      accountSaved,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error updating an account",
      },
    });
  }
};

const deleteAccount = async (req, res) => {
  const id = req.params.id;

  try {
    const account = await Account.findOne({
      where: { id },
    });
    if (account == null) {
      return res.status(400).json({
        msg: "Account not found",
      });
    }

    await account.destroy();
    res.json({
      message: `Account with id ${id} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: `Internal server error deleting account with id ${id}`,
      },
    });
  }
};

module.exports = {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
};
