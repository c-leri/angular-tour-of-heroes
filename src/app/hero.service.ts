import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { catchError, Observable, of, tap } from "rxjs";

import { Hero } from "./hero";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  private heroesUrl = "api/heroes";

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log("fetched heroes")),
        catchError(this.handleError<Hero[]>("getHeroes", [])),
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero")),
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>("addHero")),
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>("deleteHero")),
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length
               ? this.log(`found heroes matching "${term}"`)
               : this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>(`searchHeroes`, [])),
    );
  }
}
