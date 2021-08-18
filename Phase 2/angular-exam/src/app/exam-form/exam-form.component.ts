import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface Question {
  id:string;
  title:string;
  ans1:string;
  ans2:string;
  ans3:string;
  ans4:string;
  correctAns:string;
}

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  finishExam(examRef:NgForm): void {
    let exam = examRef.value;

    alert(exam[1]);
  }

  examQuestions:Question[] = [
    {id:"question1", title:"When was the C programming language developed?", ans1:"1966", ans2:"1967", ans3:"1970", ans4:"1971", correctAns:"1970"},
    {id:"question2", title:"Who was the 38th president of the United States?", ans1:"John F. Kennedy", ans2:"Gerald R. Ford", ans3:"George H. W. Bush", ans4:"Jimmy Carter", correctAns:"Gerald R. Ford"},
    {id:"question3", title:"What is the name of the longest running TV show?", ans1:"The Simpsons", ans2:"Spongebob Squarepants", ans3:"Friends", ans4:"Seinfeld", correctAns:"The Simpsons"},
    {id:"question4", title:"Lorem ipsum...", ans1:"sed do eiusmod", ans2:"dolor sit amet", ans3:"quis nostrud exercitation", ans4:"ut enim ad", correctAns:"dolor sit amet"},
    {id:"question5", title:"What is the name of Blackbeard's ship?", ans1:"The Black Pearl", ans2:"Saber of Xebec", ans3:"Mayflower", ans4:"Queen Anne's Revenge", correctAns:"Queen Anne's Revenge"},
    {id:"question6", title:"Can a match box?", ans1:"Yes", ans2:"No", ans3:"No, but a tin can", ans4:" Yes, one beat Mike Tyson", correctAns:"No, but a tin can"},
    {id:"question7", title:"What is the 7th letter of the alphabet?", ans1:"G", ans2:"H", ans3:"I", ans4:"J", correctAns:"H"},
    {id:"question8", title:"What do you call a wingless fly?", ans1:"A flap", ans2:"A walk", ans3:"A plum", ans4:"Jason", correctAns:"A walk"},
    {id:"question9", title:"The answer is really big", ans1:"ANSWER", ans2:"really big", ans3:"Infinity", ans4:"An elephant", correctAns:"An elephant"},
    {id:"question10", title:"Who is NOT king of the pirates?", ans1:"Henry Every", ans2:"William Kidd", ans3:"Gol D. Roger", ans4:"Elizabeth Swann", correctAns:"William Kidd"}
  ];

}
