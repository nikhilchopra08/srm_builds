import { Request, Response, Router } from "express";
import { prismaClient } from "../db";
import { RequestInstallationSchema } from "../types";

const router = Router();

// Hardcoded userId for testing/development
const DEFAULT_USER_ID = "0412e867-f4e7-4037-9dcf-cfb6c4736657";

// Request an installation
router.post("/", async (req: Request, res: Response): Promise<any> => {
    const body = req.body;
    const parsedData = RequestInstallationSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(400).json({ message: "Invalid input", errors: parsedData.error.errors });
    }

    try {
        // Create the installation request
        const installation = await prismaClient.installation.create({
            data: {
                ...parsedData.data,
                userId: DEFAULT_USER_ID, // Add the hardcoded userId
            },
        });

        return res.status(201).json(installation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch all installations for the default user
router.get("/", async (req: Request, res: Response): Promise<any> => {
    try {
        const installations = await prismaClient.installation.findMany({
            where: { userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });
        return res.json(installations);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch a single installation by ID (for the default user)
router.get("/:id", async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    try {
        const installation = await prismaClient.installation.findFirst({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });

        if (!installation) {
            return res.status(404).json({ message: "Installation not found" });
        }

        return res.json(installation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Update an installation (for the default user)
router.put("/:id", async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const body = req.body;
    const parsedData = RequestInstallationSchema.partial().safeParse(body);

    if (!parsedData.success) {
        return res.status(400).json({ message: "Invalid input", errors: parsedData.error.errors });
    }

    try {
        const updatedInstallation = await prismaClient.installation.update({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
            data: parsedData.data,
        });
        return res.json(updatedInstallation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Delete an installation (for the default user)
router.delete("/:id", async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    try {
        await prismaClient.installation.delete({
            where: { id, userId: DEFAULT_USER_ID }, // Filter by the hardcoded userId
        });
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export const installationRouter = router;