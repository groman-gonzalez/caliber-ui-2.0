import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from './type/batch';
import { BLocation } from './type/location';
import { Trainer } from './type/trainer';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * sets headers for recieving JSON objects
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/**
   * @ignore
   */
  const currentBatchUrl = 'http://localhost:9095/vp/batch/all/';


/*

The batch service handles all of the http client methods used to send and recieve data from the back-end.
 @author Anthony Jin, Juan Trejo, Will Bennet

 */
@Injectable({
  providedIn: 'root'
})

export class BatchService {


  url = 'http://localhost:9095';

  constructor(private http: HttpClient) { }

  // get all the batches from batch service
  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.url + '/vp/batch/all', { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), });
  }

  // get specific batch from batch service
  getBatch(batch: Batch): Observable<Batch> {
    return this.http.get<Batch>(this.url + 'all/batch/' + batch.batchId);
  }

  // get all batches by specified year from batch service
  getBatchesByYear(year: number): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.url + '/vp/batch/' + year);
  }

  // creates new batch in batch service
  postBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(this.url + '/all/batch/create', batch,
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  // updates specified batch in batch service
  putBatch(batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(this.url + '/all/batch/update', batch,
     { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  // deletes specified batch from batch service
  deleteBatch(batchId: number): Observable<Batch> {
    return this.http.delete<any>(this.url + '/all/batch/delete/' + batchId);
  }

  // gets all the skill types from skill type service
  getAllSkillTypes(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/types/skill/all');
  }

  // get all starting years from batch service
  getAllYears(): Observable<number[]> {
    return this.http.get<number[]>(this.url + '/valid_years');
  }

  // get all locations from location service
  getAllLocations(): Observable<BLocation[]> {
    return this.http.get<BLocation[]>('http://localhost:8040/all/location/all');
  }

  // get all trainers from user service
  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>('http://localhost:9085/all/trainer/all');
  }

  // get all trainee counts for batches in a year
  getTraineeCount(batches: number[]): Observable<number[][]> {
    return this.http.post<number[][]>('http://localhost:9085/all/count/', batches);
  }

  /**
   * gets batches from the batch controller usng a rest call
   */
  getBatches(): Observable<Array<Batch>> {
    /**
     * returns the list of batches
     */
    return this.http.get<Batch[]>(currentBatchUrl, httpOptions);
  }

}
