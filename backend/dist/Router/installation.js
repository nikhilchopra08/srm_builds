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
Object.defineProperty(exports, "__esModule", { value: true });
exports.installationRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const types_1 = require("../types");
const router = (0, express_1.Router)();
// Hardcoded userId for testing/development
const DEFAULT_USER_ID = "0412e867-f4e7-4037-9dcf-cfb6c4736657";
// Request an installation
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedData = types_1.RequestInstallationSchema.safeParse(body);
    if (!parsedData.success) {
        return res.status(400).json({ message: "Invalid input", errors: parsedData.error.errors });
    }
    try {
        // Create the installation request
        const installation = yield db_1.prismaClient.installation.create({
            data: Object.assign(Object.assign({}, parsedData.data), { userId: DEFAULT_USER_ID }),
        });
        return res.status(201).json(installation);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// Fetch all installations for the default user
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const installations = yield db_1.prismaClient.installation.findMany({
            where: { userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });
        return res.json(installations);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// Fetch a single installation by ID (for the default user)
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const installation = yield db_1.prismaClient.installation.findFirst({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });
        if (!installation) {
            return res.status(404).json({ message: "Installation not found" });
        }
        return res.json(installation);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// Update an installation (for the default user)
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const parsedData = types_1.RequestInstallationSchema.partial().safeParse(body);
    if (!parsedData.success) {
        return res.status(400).json({ message: "Invalid input", errors: parsedData.error.errors });
    }
    try {
        const updatedInstallation = yield db_1.prismaClient.installation.update({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
            data: parsedData.data,
        });
        return res.json(updatedInstallation);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// Delete an installation (for the default user)
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield db_1.prismaClient.installation.delete({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });
        return res.status(204).send();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
exports.installationRouter = router;
