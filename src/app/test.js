var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
        this.id = 0;
        this.name = '';
    }
    return BaseEntity;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Project;
}(BaseEntity));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(BaseEntity));
var Entry = /** @class */ (function () {
    function Entry() {
        this.project = new Project();
        this.employee = new Employee();
        this.date = '';
        this.hours = 0;
    }
    Entry.getHashBy = function (by, entry) {
        var key = "";
        by.forEach(function (val) { return (val === "date") ? key += entry.date : key += entry[val].id; });
        return key;
    };
    return Entry;
}());
var data = [
    {
        "project": { "id": 1, "name": "Mars Rover" },
        "employee": { "id": 1, "name": "Mario" },
        "date": "2021-08-26T22:00:00.000Z",
        "hours": 5
    },
    { "project": { "id": 2, "name": "Manhattan" },
        "employee": { "id": 2, "name": "Giovanni" },
        "date": "2021-08-30T22:00:00.000Z", "hours": 3
    },
    { "project": { "id": 1, "name": "Mars Rover" },
        "employee": { "id": 1, "name": "Mario" },
        "date": "2021-08-31T22:00:00.000Z", "hours": 3
    },
    { "project": { "id": 1, "name": "Mars Rover" },
        "employee": { "id": 3, "name": "Lucia" },
        "date": "2021-08-31T22:00:00.000Z", "hours": 3
    },
    { "project": { "id": 2, "name": "Manhattan" },
        "employee": { "id": 1, "name": "Mario" },
        "date": "2021-08-26T22:00:00.000Z", "hours": 2
    },
    { "project": { "id": 2, "name": "Manhattan" },
        "employee": { "id": 2, "name": "Giovanni" },
        "date": "2021-08-31T22:00:00.000Z", "hours": 4 }
];
function aggregate(aggregateBy) {
    if (aggregateBy === void 0) { aggregateBy = ['project', 'employee', 'date']; }
    var result = {};
    var entry;
    var key;
    data.forEach(function (elem) {
        key = Entry.getHashBy(aggregateBy, elem);
        entry = {};
        if (key in result) {
            result[key].hours += elem.hours;
        }
        else {
            result[key] = elem;
        }
    });
    return Object.values(result);
}
var by = process.argv.slice(2);
console.log((by.length) ? aggregate(by) : data);
