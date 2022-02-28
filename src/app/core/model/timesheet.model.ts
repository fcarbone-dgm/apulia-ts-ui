export interface IBaseEntity {
  id: number;
  name: string;
}

export interface IProject extends IBaseEntity {}
export interface IEmployee extends IBaseEntity {}

export interface ISlot {
  project: IProject;
  employee: IEmployee;
  hours: number;
  date: Date;
}

export class Slot implements ISlot {
  project: IProject = {} as IProject;
  employee: IEmployee = {} as IEmployee;
  date: Date = new Date();
  hours: number = 0;

  static getHashBy(by: string[], entry: ISlot): string {
    let key = "";
    by.forEach((val: string) => {
      (val==="date")?key+=entry.date:key+=(entry[val as keyof ISlot] as IBaseEntity).id});
    return key;
  }
}
