const mongoose = require('mongoose');
require('../app');
const { setupDatabase } = require('./fixtures/db');

const Room = require('../models/room');
const User = require('../models/user');

const {} = require('../utils/user');
const { createRoom } = require('../utils/room');

const { user0, user1, user2 } = require('./fixtures/users');

beforeEach(setupDatabase);

describe('Creating a room', () => {
  it("should create a new room if one doesn't exist", async () => {
    const adminId = new mongoose.Types.ObjectId();

    /* const mockRoom = {
      name: "MOCKROOM",
      admin: adminId,
      users: [],
      topic: "JavaScript",
    };
    createRoom(mockRoom); */
  });
});
