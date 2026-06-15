// Authentication
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: "field_worker" | "hse_officer";
  siteId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "hse_officer" | "field_worker";
  siteId: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Sites
export interface Site {
  id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  company: string;
  status: "active" | "inactive";
  createdAt: string;
}

// Waste Reports
export type WasteType = "drilling_mud" | "produced_water" | "drill_cuttings";

export interface WasteReport {
  id: string;
  siteId: string;
  userId: string;
  wasteType: WasteType;
  volume: number;
  description: string;
  gpsLat: number;
  gpsLng: number;
  mediaUrls?: string[];
  status: "pending" | "reviewed" | "approved" | "flagged";
  createdAt: string;
  updatedAt: string;
}

export interface CreateWasteReportRequest {
  siteId: string;
  wasteType: WasteType;
  volume: number;
  description: string;
  gpsLat: number;
  gpsLng: number;
  mediaUrls?: string[];
}

// Disposal Records
export type DisposalMethod = "injection_well" | "recycling" | "treatment_plant" | "solidification";

export interface DisposalRecord {
  id: string;
  wasteReportId: string;
  transporter: string;
  vehicleId: string;
  driverName: string;
  disposalMethod: DisposalMethod;
  status: "pending" | "in_transit" | "completed" | "verified";
  verifiedBy?: string;
  createdAt: string;
  updatedAt: string;
}

// Audit Logs
export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  metadata?: Record<string, any>;
  createdAt: string;
}

// API Responses
export interface ApiError {
  message: string;
  code?: string;
}

export interface DemoResponse {
  message: string;
}
