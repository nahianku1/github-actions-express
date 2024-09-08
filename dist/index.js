"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Mock data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
// GET /users - Fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});
// GET /users/:id - Fetch a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id));
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.json(user);
});
// POST /users - Create a new user
app.post('/users', (req, res) => {
    const newUser = Object.assign({ id: users.length + 1 }, req.body);
    users.push(newUser);
    res.status(201).json(newUser);
});
// PUT /users/:id - Update a user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id));
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    user.name = req.body.name || user.name;
    res.json(user);
});
// Start the server
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
exports.default = app;
