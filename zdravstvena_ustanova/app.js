var _appointments = {};

class Institution {
  static get appointments() {
    return _appointments;
  }

  static saveAppointment(appointment, doctor) {
    this.appointments[appointment] = doctor;
  }

  static deleteAppointment(appointment) {
    delete this.appointments[appointment];
  }
}

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class Doctor extends Person {
  constructor(name, lastName, specialty) {
    super(name, lastName);
    this.specialty = specialty;
    this.patients = [];
    Logger.log(`Doktor ${name} kreiran`);
  }

  addPatient(patient) {
    this.patients.push(patient);
  }

  setAppointment(patient) {
    return new Promise((resolve, reject) => {
      if (this.patients.includes(patient)) {
        resolve(patient);
      } else {
        reject(
          new Error(
            `Pacijent ${patient[`name`]} ${
              patient[`lastName`]
            } nije pacijent Doctora ${this.name} ${this.lastName}`
          )
        );
      }
    });
  }
}

class Patient extends Person {
  constructor(name, lastName, jmbg, medicalCard) {
    super(name, lastName);
    this.jmbg = jmbg;
    this.medicalCard = medicalCard;
    this.doctor = null;
    Logger.log(`Pacijent ${name} kreiran`);
  }

  setDoctor(doctor) {
    this.doctor = doctor;
    this.doctor.addPatient(this);
    Logger.log(
      `Pacijent ${this.name} ${this.lastname} odabrao lekara ${doctor.name} ${
        doctor.lastname
      }`
    );
  }

  doAppointment(appointment) {
    Institution.deleteAppointment(appointment);
    Logger.log(`Pregled obavljen`);
  }
}

class Appointment {
  constructor(dateTime, patient) {
    this.dateTime = dateTime;
    this.patient = patient;
  }
}

class BloodPressure extends Appointment {
  constructor(upper, lower, pulse) {
    super(new Date());
    this.upper = upper;
    this.lower = lower;
    this.pulse = pulse;
    Logger.log(`Pregled kreiran`);
  }
}

class SugarLevel extends Appointment {
  constructor(value, timeLastMeal) {
    super(new Date());
    this.value = value;
    this.timeLastMeal = timeLastMeal;
    Logger.log('Pregled kreiran');
  }
}

class Cholesterol extends Appointment {
  constructor(value, timeLastMeal) {
    super(new Date());
    this.value = value;
    this.timeLastMeal = timeLastMeal;
    Logger.log('Pregled kreiran');
  }
}
