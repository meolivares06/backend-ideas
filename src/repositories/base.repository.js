class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async getAll() {
    return await this.model.find();
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;


  // findById(id: number): Promise<T | null>
  // findAll(): Promise<T[]>
  // save(entity: T): Promise<T>
  // delete(id: number): Promise<void>

  // metodos del dominio
  // findByEmail(email: string): Promise<T | null>
  // findWithRelations()
  // count()

  // metodos de paginacion
  // findPaginated(page: number, limit: number): Promise<{ data: T[]; total: number }>

  // si hay transacciones
  // beginTransaction(): Promise<Transaction>
  // commitTransaction(transaction: Transaction): Promise<void>
  // rollbackTransaction(transaction: Transaction): Promise<void>

  // metodos personalizados paa el negocio
  // findActiveUsers(): Promise<T[]>
  // findUsersByRole(role: string): Promise<T[]>