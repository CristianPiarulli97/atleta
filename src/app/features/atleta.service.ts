import { Injectable } from '@angular/core';
import { Atleta } from '../model/atleta';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  private listaAtleti: Atleta[] = [
    { id: 1, nome: 'Ciro', cognome: "Immobile", dataUltimaGara: new Date('2020-3-1'), inAttivita: true,numeroMedaglie:2 },
    { id: 2, nome: 'Alessio', cognome: "Romagnoli", dataUltimaGara: new Date('1999-1-28'), inAttivita: false,numeroMedaglie:2 },
    { id: 3, nome: 'Luis', cognome: "Alberto", dataUltimaGara: new Date('2008-7-21'), inAttivita: false,numeroMedaglie:2 },
    { id: 4, nome: 'Sergej', cognome: "Milinkovic", dataUltimaGara: new Date('2019-11-11'), inAttivita: true,numeroMedaglie:2 },
    { id: 5, nome: 'Nicolo', cognome: "Casale", dataUltimaGara: new Date('1970-08-15'), inAttivita: false,numeroMedaglie:2 },
    { id: 6, nome: 'Mattia', cognome: "Zaccagni", dataUltimaGara: new Date('2002-4-2'), inAttivita: false,numeroMedaglie:2 }
  ]
  constructor() { }

  listaAll(): Observable<Atleta[]> {
    let atleti = of(this.listaAtleti);
    return atleti;
  }

  findById(id: number): Observable<Atleta | undefined> {
    let atleta = this.listaAtleti.find(element => element.id === id)
    return of(atleta);
  }

  create(atletaInput: Atleta): Observable<Atleta> {
    const newId: number = Math.max.apply(Math, this.listaAtleti.map(atletaItem => atletaItem.id ? atletaItem.id : 1));
    atletaInput.id = newId + 1;
    this.listaAtleti.push(atletaInput);
    return of(atletaInput);
  }
  
}
