const express = require("express");
const expressBunyan = require("express-bunyan-logger");
const app = express();

const employees = [{
    id: 1,
    employeeName: "Umar Muneer",
    employeeTitle: "SA",
    employeeEmail: "umar.muneer@gmail.com",
    employeePhone: "+923005679588"
}, {
    id: 2,
    employeeName: "Usman Muneer",
    employeeTitle: "SSE",
    employeeEmail: "usman.muneer@gmail.com",
    employeePhone: "+923015679589"
}];

app.use(expressBunyan());

app.get("/", (req, res) => {
    res.json("OK");
});
app.get("/health", (req, res) => {
    res.json("OK");
})
app.get("/employees", (req, res) => {
    const pageLimit = req.query.pageLimit;
    const bodyLimit = req.query.bodyLimit;
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const employee = employees.find(employee => employee.id == req.params.id);
    console.log(employee, "###", req.params.id);
    res.json(employee);
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on ${port}`));