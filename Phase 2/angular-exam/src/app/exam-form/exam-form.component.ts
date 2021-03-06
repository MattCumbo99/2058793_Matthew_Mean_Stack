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
  endMsg:string = "";
  examDone:boolean = false;
  disabledForm:boolean = false;

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
        document.getElementById(examRef.value[key])!.setAttribute("style", "background: lightgreen;");
        document.getElementById(examRef.value[key])!.append(" (Correct Answer)");
      }
      else {
        // Incorrect answer
        document.getElementById(examRef.value[key])!.setAttribute("style", "background: crimson;");
        document.getElementById(examRef.value[key])!.append(" (Incorrect Answer)");
        // Correct answer
        document.getElementById(this.examination[spot].correctAns)!.setAttribute("style", "background: lightgreen;");
        document.getElementById(this.examination[spot].correctAns)!.append(" (Correct Answer)");
      }
      spot++;
    });
    this.totalCorrect = this.correctAnswers.length;
    if (this.totalCorrect < 7) {
      this.endMsg = "You failed.";
    }
    else {
      this.endMsg = "You passed!";
    }
    this.examDone = true;
    this.curForm = examRef.form;
    this.curForm.disable();
  }

}
