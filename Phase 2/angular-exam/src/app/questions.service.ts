import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(public http:HttpClient) { }

    getQuestionBank():Observable<Question[]> {
        return this.http.get<Question[]>("/assets/questions.json");
    }
}
