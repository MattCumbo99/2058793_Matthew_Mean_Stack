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
  correctAnswers:Array<Question> = [];
  totalCorrect:number = 0;
  examDone:boolean = false;

  constructor(public form:FormBuilder, public questionSer:QuestionService) { 
    this.curForm = form.group({});
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  // Loads the question bank to the form
  loadQuestions(): void {
    this.questionSer.getQuestionBank().subscribe(result=> {
      for (let q of result) {
        this.curForm.addControl(q.title, this.form.control(''));
        this.examination.push(q);
      }
    });
  }

  radioChange(event:MatRadioChange, data:any): void {
    //console.log(data[0].title);
    //console.log(event.value);
  }

  finishExam(examRef:NgForm): void {
    let spot:number = 0;
    // Go through each question
    Object.keys(examRef.value).forEach(key => {
      //console.log(examRef.value[key]); // Get selected answer from key

      // Check for correct answers
      if (this.examination[spot].correctAns == examRef.value[key]) {
        this.correctAnswers.push(this.examination[spot]); // Add correct answer to bank
      }
      spot++;
    });
    this.totalCorrect = this.correctAnswers.length;
    this.examDone = true;

  }

}
