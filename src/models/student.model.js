const { query } = require("../db/dbConnect");

const Student = {
    async readAll(req, res) {
        try {
            const allStudents = "SELECT * FROM students";
            const { rows } = await query(allStudents);
            return res.send({ rows });
        } catch (err) {
            return res.send(err);
        }
    }
};

module.exports = Student;
