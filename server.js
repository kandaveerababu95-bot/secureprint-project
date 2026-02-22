app.post("/signup", async (req, res) => {
    const { username, email, phone, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ username, email, phone, password });
    await newUser.save();

    res.json({ success: true, message: "Signup successful" });
});
