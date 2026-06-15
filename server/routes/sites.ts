import { RequestHandler } from "express";

// Mock sites database
const mockSites = [
  {
    id: "site-1",
    name: "North Field Platform A",
    location: "North Sea",
    latitude: 56.2671,
    longitude: 1.9845,
    company: "OilCorp International",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "site-2",
    name: "Gulf of Mexico Rig 7",
    location: "Gulf of Mexico",
    latitude: 27.8581,
    longitude: -91.2871,
    company: "OilCorp International",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "site-3",
    name: "Middle East Operations Base",
    location: "Arabian Peninsula",
    latitude: 25.2048,
    longitude: 55.2708,
    company: "OilCorp International",
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

export const handleGetSites: RequestHandler = (req, res) => {
  try {
    res.json(mockSites);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sites" });
  }
};

export const handleGetSiteById: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const site = mockSites.find((s) => s.id === id);

    if (!site) {
      res.status(404).json({ message: "Site not found" });
      return;
    }

    res.json(site);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch site" });
  }
};

export const handleCreateSite: RequestHandler = (req, res) => {
  try {
    const { name, location, latitude, longitude, company, status } = req.body;

    if (!name || !location || latitude === undefined || longitude === undefined) {
      res.status(400).json({ message: "Required fields missing" });
      return;
    }

    const newSite = {
      id: `site_${Date.now()}`,
      name,
      location,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      company: company || "Unknown Company",
      status: status || "active",
      createdAt: new Date().toISOString(),
    };

    mockSites.push(newSite);
    res.status(201).json(newSite);
  } catch (error) {
    res.status(500).json({ message: "Failed to create site" });
  }
};
