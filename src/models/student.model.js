const { query } = require("../db/dbConnect");

const Student = {
    async readAll(req, res) {
        const sort = "asc";
        // const params = [asc];
        try {
            const allStudents = 'SELECT * FROM students ORDER BY name ASC';
            const { rows } = await query(allStudents);
            return res.send({ rows });
        } catch (err) {
            return res.send(err);
        }
    }
};

module.exports = Student;
