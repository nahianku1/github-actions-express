// src/index.test.ts
import request from 'supertest';
import app from './index';
import { describe, expect, it } from 'vitest';

describe('User API Endpoints', () => {
  it('should fetch all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body.lengt).toBe(2);
  });

  it('should fetch a user by ID', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Alice');
  });

  it('should return 404 for a non-existing user', async () => {
    const response = await request(app).get('/users/999');
    expect(response.status).toBe(404);
  });

  it('should create a new user', async () => {
    const newUser = { name: 'Charlie' };
    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Charlie');
  });

  it('should update a user by ID', async () => {
    const updatedUser = { name: 'Alice Updated' };
    const response = await request(app).put('/users/1').send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Alice Updated');
  });
});
