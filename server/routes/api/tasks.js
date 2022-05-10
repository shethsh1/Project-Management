const router = require("express").Router();
const { User } = require("../../db/models");
const { Project } = require("../../db/models");
const { Status } = require("../../db/models")
const { Task } = require("../../db/models")
const { User_Project } = require("../../db/models");
const { Op } = require("sequelize");

// create task
router.post("/", async (req, res, next) => {
    try {
        if (!req.user) {
            return res.sendStatus(403)
        }

        const id = req.user.id
        const { projectId, statusId, type, content } = req.body

        const checkFound = await User_Project.findOne({
            where: {
                projectId: projectId,
                userId: id
            }
        })



        if (checkFound === null) {
            return res.sendStatus(403)
        }

        const checkStatus = await Status.findOne({
            where: {
                id: statusId
            }
        })

        if (checkStatus === null) {
            return res.sendStatus(403)
        }

        const task = await Task.create({
            projectId: projectId,
            statusId: statusId,
            type: type,
            content: content
        })

        res.status(200).json({ task })

    } catch (err) {
        next(err)
    }
})

// get tasks

router.get("/:projectId", async (req, res, next) => {
    try {
        if (!req.user) {
            return res.sendStatus(403)
        }

        const id = req.user.id
        const projectId = req.params.projectId

        const checkFound = await User_Project.findOne({
            where: {
                projectId: projectId,
                userId: id
            }
        })

        if (checkFound === null) {
            return res.sendStatus(403)
        }



        const statuses = await Status.findAll()
        const tasks = await Task.findAll({
            where: {
                projectId: projectId
            }
        })



        res.status(200).json({ tasks, statuses })



    } catch (err) {
        next(err)
    }
})

// updateTask
router.patch("/", async (req, res, next) => {
    try {
        if (!req.user) {
            return res.sendStatus(403)
        }

        const id = req.user.id
        const { taskId, statusId, projectId } = req.body

        const checkFound = await User_Project.findOne({
            where: {
                projectId: projectId,
                userId: id
            }
        })

        if (checkFound === null) {
            return res.sendStatus(403)
        }

        const task = await Task.findOne({
            where: {
                id: taskId
            }
        })

        if (task === null || task.statusId === statusId) {
            return res.sendStatus(403)
        }

        task.statusId = statusId
        task.save()
        res.sendStatus(204)

    } catch (err) {
        next(err)
    }
})

module.exports = router;