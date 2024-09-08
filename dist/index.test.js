"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.test.ts
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./index"));
const vitest_1 = require("vitest");
(0, vitest_1.describe)('User API Endpoints', () => {
    (0, vitest_1.it)('should fetch all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/users');
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.length).toBe(2);
    }));
    (0, vitest_1.it)('should fetch a user by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/users/1');
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.name).toBe('Alice');
    }));
    (0, vitest_1.it)('should return 404 for a non-existing user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/users/999');
        (0, vitest_1.expect)(response.status).toBe(404);
    }));
    (0, vitest_1.it)('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = { name: 'Charlie' };
        const response = yield (0, supertest_1.default)(index_1.default).post('/users').send(newUser);
        (0, vitest_1.expect)(response.status).toBe(201);
        (0, vitest_1.expect)(response.body.name).toBe('Charlie');
    }));
    (0, vitest_1.it)('should update a user by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = { name: 'Alice Updated' };
        const response = yield (0, supertest_1.default)(index_1.default).put('/users/1').send(updatedUser);
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.name).toBe('Alice Updated');
    }));
});
