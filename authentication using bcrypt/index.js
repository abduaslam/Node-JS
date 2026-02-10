import express from "express";
import bcrypt from "bcrypt";

const PORT = 5000;
const app = express();

app.use(express.json());

const users = [];
// get users 
app.get("getdata",(req,res)=>{
    res.json(
        `the users are ${users.email}`
    )
})

app.post("/create", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user already exists
    const findUser = users.find((user) => user.email === email);

    if (findUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    users.push({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
