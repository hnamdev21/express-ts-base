import UnitOfWork from "../repositories/unitOfWork";

class AppService {
  public readonly unitOfWork: UnitOfWork;

  constructor(unitOfWork: UnitOfWork) {
    this.unitOfWork = unitOfWork;
  }
}

export default AppService;
