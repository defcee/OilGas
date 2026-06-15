import { RequestHandler } from "express";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: "field_worker" | "hse_officer";
  siteId: string;
}

// Mock user database - replace with actual database
const mockUsers: Record<string, any> = {
  "test@example.com": {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    password: "password123", // In production, use bcrypt
    role: "field_worker",
    siteId: "site-1",
  },
};

// Mock token generation - use JWT in production
function generateMockToken(userId: string): string {
  return `token_${userId}_${Date.now()}`;
}

export const handleLogin: RequestHandler = (req, res) => {
  try {
    const { email, password } = req.body as LoginRequest;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password required" });
      return;
    }

    const user = mockUsers[email];
    if (!user || user.password !== password) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    if (!user.siteId) {
      res.status(403).json({ message: "User not assigned to any site" });
      return;
    }

    const token = generateMockToken(user.id);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        siteId: user.siteId,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

export const handleRegister: RequestHandler = (req, res) => {
  try {
    const { name, email, password, role, siteId } = req.body as RegisterRequest;

    if (!name || !email || !password || !role || !siteId) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    if (mockUsers[email]) {
      res.status(409).json({ message: "Email already registered" });
      return;
    }

    // Create new user
    const userId = `user_${Date.now()}`;
    mockUsers[email] = {
      id: userId,
      name,
      email,
      password,
      role,
      siteId,
    };

    const token = generateMockToken(userId);
    res.status(201).json({
      token,
      user: {
        id: userId,
        name,
        email,
        role,
        siteId,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

export const handleGetMe: RequestHandler = (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ message: "No token provided" });
      return;
    }

    // In production, verify JWT token
    res.json({ message: "Authenticated" });
  } catch (error) {
    res.status(500).json({ message: "Authentication check failed" });
  }
};
