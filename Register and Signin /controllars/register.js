import usersRg from "../models/register.js";

const Users = async (req, res) => {
  const userdata = req.body;

  try {
    const check = await usersRg.findOne({ password: userdata.password });

    if (check) {
      return res.status(200).json({
        message: "User already exists",
      });
    }

    const newUser = new usersRg({
      email: userdata.email,
      password: userdata.password,
    });

    const result = await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      data: result,
    });

  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export default Users;
