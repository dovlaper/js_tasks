var doktor1 = new Doktor("Milan","Grozdanic","zubar");
console.log(dateMakeup(new Date()) + " Doktor Milan kreiran");

var pacijent1 = new Pacijent("Dragan","Aleksic","2004995838292","323122");
console.log(dateMakeup(new Date()) + " Pacijent Dragan kreiran");

pacijent1.odaberiDoktora(doktor1);
console.log(dateMakeup(new Date()) + " Pacijent Dragan odabrao doktora Milana za svog doktora");
var promise1 = doktor1.zakaziPregled(pacijent1);
promise1
    .then((pacijent) => Ustanova.pregledi[doktor1] = new NivoSecera(300, new Date("2019-03-25T12:00:00Z")))
    .catch(alert);
console.log(dateMakeup(new Date()) + " Preged zakazan");

var pregledKrv = new KrvniPritisak(300,200,100);

doktor1.zakaziPregled(pacijent1)
    .then((pacijent) => Ustanova.pregledi[doktor1] = pregledKrv)
    .catch(alert);
console.log(dateMakeup(new Date()) + " Preged zakazan");

pacijent1.obaviPregled(pregledKrv);
console.log(dateMakeup(new Date()) + " Pregled obavljen");

function dateMakeup(date){
    var options = {
        hour: "numeric", minute: "numeric", second: "numeric", hour12: false, timeZone: "Europe/Belgrade"
    };
    var formaterTime = new Intl.DateTimeFormat("sr-RS", options);
    var vreme = formaterTime.format(date);
    var formaterDate = new Intl.DateTimeFormat("sr-RS");
    var datum = formaterDate.format(date);
    return datum + " " + vreme;
}