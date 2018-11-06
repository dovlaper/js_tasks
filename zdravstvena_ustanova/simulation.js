class Logger {
  static log(data) {
    var date = dateMakeup(new Date());
    console.log(`[ ${date} ] ${data}`);
  }
}

var doktor1 = new Doctor(`Milan`, `Grozdanic`, `zubar`);
var pacijent1 = new Patient(`Dragan`, `Aleksic`, `2004995838292`, `323122`);
pacijent1.setDoctor(doktor1);
var promise1 = doktor1.setAppointment(pacijent1);
promise1
  .then(pacijent =>
    Institution.saveAppointment(
      new SugarLevel(300, new Date(`2019-03-25T12:00:00Z`)),
      doktor1
    )
  )
  .catch(alert);

var pregledKrv = new BloodPressure(300, 200, 100);
doktor1
  .setAppointment(pacijent1)
  .then(Institution.saveAppointment(pregledKrv, doktor1))
  .catch(alert);
pacijent1.doAppointment(pregledKrv);

function dateMakeup(date) {
  var options = {
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`,
    hour12: false,
    timeZone: `Europe/Belgrade`
  };
  var formaterTime = new Intl.DateTimeFormat(`sr-RS`, options);
  var vreme = formaterTime.format(date);
  var formaterDate = new Intl.DateTimeFormat(`sr-RS`);
  var datum = formaterDate.format(date);
  return `${datum} ${vreme}`;
}
