import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(student: Partial<Student>) {
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOne({ where: { id } });
  }

  update(id: number, student: Partial<Student>) {
    return this.studentRepository.update(id, student);
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
