let _pregledi = {};

class Ustanova{

    static get pregledi(){ return _pregledi; }

    static sacuvajPregled(pregled, doktor){
        pregledi[pregled] = doktor;
    }

    static obrisiPregled(pregled){
        delete this.pregledi[pregled];
    }

}

class Osoba{
	constructor(ime, prezime){
  	this.ime =ime;
    this.prezime = prezime;
  }
}

class Doktor extends Osoba{

	constructor(ime, prezime, specijalnost){
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.pacijenti = [];
    }

    zakaziPregled(pacijent) {
        return new Promise( (resolve, reject) => {
            if(this.pacijenti.includes(pacijent)){
                resolve(pacijent);
            }
            else{
                reject(new Error("Pacijent " + pacijent['ime'] + " " + pacijent['prezime'] + " nije pacijent doktora " + this.ime + " " + this.prezime));
            }
        } );
    }
}

class Pacijent extends Osoba{

	constructor(ime, prezime, jmbg, brojKartona){
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
		this.doktor = null;
    }

    odaberiDoktora(doktor){
        this.doktor = doktor;
        doktor.pacijenti.push(this);
    }

    obaviPregled(pregled){
        Ustanova.obrisiPregled(pregled);
    }
}

class Pregled{

    constructor(datumIVreme, pacijent){
        this.datumIVreme = datumIVreme;
        this.pacijent = pacijent;
    }
}

class KrvniPritisak extends Pregled{

    constructor(gornjaVrednost, donjaVrednost, puls){
        super(new Date());
        this.gornjaVrednost = gornjaVrednost;
        this.donjaVrednost = donjaVrednost;
        this.puls = puls;
    }

}

class NivoSecera extends Pregled{

    constructor(vrednost, vremePoslednjegObroka){
        super(new Date());
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
    }

}

class NivoHolesterola extends Pregled{

    constructor(vrednost, vremePoslednjegObroka){
        super(new Date());
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
    }

}