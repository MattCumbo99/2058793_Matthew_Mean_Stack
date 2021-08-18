import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../questions.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  constructor(public questionSer:QuestionService) { }

  ngOnInit(): void {
  }

  loadQuestions(): void {
    
  }

  finishExam(examRef:NgForm): void {
    let exam = examRef.value;
  }

}
