package app.romail.moodle_plus_plus.repositories;

import app.romail.moodle_plus_plus.dto.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long> {

}