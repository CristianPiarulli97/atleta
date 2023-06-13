import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../atleta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/model/atleta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atleta-insert',
  templateUrl: './atleta-insert.component.html',
  styleUrls: ['./atleta-insert.component.css']
})

export class AtletaInsertComponent implements OnInit
{
  errorMessage: string = '';
  constructor(private atletaService: AtletaService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
  
  }

  atletaInsert:Atleta = {
    id:0,
    nome:'',
    cognome: '',
    dataUltimaGara: new Date(),
    inAttivita: false,
    numeroMedaglie:0
  }

  save(atletaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.atletaInsert));
    if (atletaForm.valid) {
      this.atletaService.create(this.atletaInsert).subscribe({
        next: libroItem => this.atletaInsert = libroItem,
        complete: () => this.router.navigate([`atleta/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
