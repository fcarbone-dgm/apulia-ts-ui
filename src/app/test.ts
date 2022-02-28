
// interface ISlot {
//   project: Project;
//   employee: Employee;
//   date: string;
//   hours: number;
// }

// class BaseEntity {
//   id: number = 0;
//   name: string = '';
// }

// class Project extends BaseEntity {
// }

// class Employee extends BaseEntity {
// }

// class Slot implements ISlot {
//   project: Project = new Project();
//   employee: Employee = new Employee();
//   date: string = '';
//   hours: number = 0;
//   static getHashBy(by: string[], slot: ISlot): string {
//     let key = "";
//     by.forEach((val: string) => (val==="date")?key+=slot.date:key+=slot[val].id);
//     return key;
//   }
// }

// let data: ISlot[] = [
//   {
//     "project": { "id": 1, "name": "Mars Rover" },
//     "employee": { "id": 1, "name": "Mario" },
//     "date": "2021-08-26T22:00:00.000Z",
//     "hours": 5
//   },
//   { "project": { "id": 2, "name": "Manhattan" },
//   "employee": { "id": 2, "name": "Giovanni" },
//   "date": "2021-08-30T22:00:00.000Z", "hours": 3
//   },
//   { "project": { "id": 1, "name": "Mars Rover" },
//   "employee": { "id": 1, "name": "Mario" },
//   "date": "2021-08-31T22:00:00.000Z", "hours": 3
//   },
//   { "project": { "id": 1, "name": "Mars Rover" },
//   "employee": { "id": 3, "name": "Lucia" },
//   "date": "2021-08-31T22:00:00.000Z", "hours": 3
//   },
//   { "project": { "id": 2, "name": "Manhattan" },
//   "employee": { "id": 1, "name": "Mario" },
//   "date": "2021-08-26T22:00:00.000Z", "hours": 2
//   },
//   { "project": { "id": 2, "name": "Manhattan" },
//   "employee": { "id": 2, "name": "Giovanni" },
//   "date": "2021-08-31T22:00:00.000Z", "hours": 4 }
// ]

// function aggregate(aggregateBy: string[] = ['project','employee','date']): ISlot[] {
//   let result: any = {};
//   let entry: ISlot;
//   let key: string;
//   data.forEach((elem: ISlot) => {
//     key = Slot.getHashBy(aggregateBy,elem);
//     entry = {} as ISlot;
//     if(key in result) {
//       result[key].hours += elem.hours;
//     } else {
//       result[key] = elem;
//     }
//   });
//   return Object.values(result);
// }

// let by: string[] = process.argv.slice(2);
// console.log((by.length)?aggregate(by):data);


// interface IDate {
//   label: string;
// }

// class CustomDate extends Date implements IDate {
//   get label(): string {
//     return (this as Date).toISOString();
//   }
// }

// interface IHours {
//   label: string;
// }

// class CustomNumber extends Number implements IHours {
//   get label(): string {
//     return this.toString();
//   };
// }
