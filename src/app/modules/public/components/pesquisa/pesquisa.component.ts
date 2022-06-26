import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/service/movies.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  @Output()
  moreClicked = new EventEmitter();
  
  filmes: any;
  hour: string;

  constructor(private router: Router, private service : MoviesService) { }

  ngOnInit(): void {
  }

  pesquisa(pesquisar:string){
    console.log(pesquisar);
    this.service.getByTitle(pesquisar).subscribe((data: any) => {
      this.filmes = data.results;
    });
}

convertHour(minutos:any){
  const horas = Math.floor(minutos/ 60);
  const min = minutos % 60;
  const textoHoras = (`00${horas}`).slice(-2);
  const textoMinutos = (`00${min}`).slice(-2);
  this.hour = `${textoHoras}h ${textoMinutos}min`;
  return `${textoHoras}h ${textoMinutos}min`;
}

iconClicked(){
  this.moreClicked.emit(true);
}
}
