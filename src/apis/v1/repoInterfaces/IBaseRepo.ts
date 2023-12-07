interface IBaseRepo<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
  create(data: T): Promise<boolean>;
  update(id: string, data: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export default IBaseRepo;
