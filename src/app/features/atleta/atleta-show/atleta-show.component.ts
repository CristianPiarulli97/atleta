import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../atleta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'app-atleta-show',
  templateUrl: './atleta-show.component.html',
  styleUrls: ['./atleta-show.component.css']
})
export class AtletaShowComponent implements OnInit {

  ngOnInit(): void {
    this.atlteService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(atleta => this.atletaShow = atleta);
  }

  constructor(private atlteService:AtletaService,private route: ActivatedRoute,private router: Router) {}

  atletaShow?:Atleta;

  onBack():void {
    this.router.navigate(['/atleta/list']);
  }

}
