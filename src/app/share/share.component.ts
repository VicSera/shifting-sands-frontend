import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormService} from '../service/form.service';
import {FormDTO} from '../dto/form-dto';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  writeId: string;
  writeLink: string;
  readId: string;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.formService.getNewForm().subscribe(
      (formDTO: FormDTO) => {
        this.writeId = formDTO.writeId;
        this.readId = formDTO.readId;
        this.writeLink = 'www.localhost:4200/form/' + this.writeId;
      }
    );
  }

}
