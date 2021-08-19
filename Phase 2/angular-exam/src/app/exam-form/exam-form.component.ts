import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Question } from '../question.model';
import { QuestionService } from '../questions.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  examination:Array<Question> = [];
  curForm:FormGroup;
  selectedAnswers:Array<Question> = [];

  constructor(public form:FormBuilder, public questionSer:QuestionService) { 
    this.curForm = form.group({});
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionSer.getQuestionBank().subscribe(result=> {
      for (let q of result) {
        this.curForm.addControl(q.title, this.form.control(''));
        this.examination.push(q);
      }
    })
  }

  radioChange(event:MatRadioChange, data:any): void {
    //console.log(data[0].title);
    //console.log(event.value);
  }

  finishExam(examRef:NgForm): void {
    this.curForm = examRef.form.value;
    console.log(examRef.form.value); // Displays all answers
  }

}
