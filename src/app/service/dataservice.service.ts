import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  // private host : string = "http://api.schoolxlk.tk/api/";
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  getBreadCrumbs(){
    return breadcrumb;
  }

  setGrade(id,name){
    breadcrumb.id_g = id;
    breadcrumb.name_g = name;
    this.setSubject(0,"-");
    this.setChapter(0,"-");
    this.setModule(0,"-");
  }

  setSubject(id,name){
    breadcrumb.id_s = id;
    breadcrumb.name_s = name;
    this.setChapter(0,"-");
    this.setModule(0,"-");
  }

  setChapter(id,name){
    breadcrumb.id_c = id;
    breadcrumb.name_c = name;
    this.setModule(0,"-");
  }

  setModule(id,name){
    breadcrumb.id_m = id;
    breadcrumb.name_m = name;
  }

  setRating(id,rating){
    if (rating === 4) {
      
    } else if (rating === 3) {
      
    } else if (rating === 2) {
      
    } else if (rating === 1) {
      
    } 
  }

  //Uncomment to setup API :KAZ

  // getSubjects(id){
  //   return this.http.get<dataOut>(this.host+"subjects/get/grade/"+id);
  // }

  // getChapters(id){
  //   return this.http.get<dataOut>(this.host+"chapters/get/subject/"+id);
  // }

  // getModules(id){
  //   return this.http.get<dataOut>(this.host+"modules/get/chapter/"+id);
  // }

  // getModuleVideos(id){
  //   return this.http.get<dataOut>(this.host+"materials/get/module/"+id);
  // }

  getSubjects(id){return [{"id": 1, "grade": 5, "name" : "Sample subject 01"},{"id": 2, "grade": 7, "name" : "Sample subject 02"},{"id": 3, "grade": 5, "name" : "Sample subject 03"},{"id": 4, "grade": 6, "name" : "Sample subject 04"},{"id": 5, "grade": 6, "name" : "Sample subject 05"},{"id": 6, "grade": 5, "name" : "Sample subject 06"},{"id": 7, "grade": 9, "name" : "Sample subject 07"},{"id": 8, "grade": 5, "name" : "Sample subject 08"},{"id": 9, "grade": 8, "name" : "Sample subject 09"},];}
  getChapters(id){return [{"id": 1, "name" : "Sample chapter 01"},{"id": 2, "name" : "Sample chapter 02"},{"id": 3, "name" : "Sample chapter 03"},{"id": 4, "name" : "Sample chapter 04"},{"id": 5, "name" : "Sample chapter 05"},{"id": 6, "name" : "Sample chapter 06"},{"id": 7, "name" : "Sample chapter 07"},{"id": 8, "name" : "Sample chapter 08"},{"id": 9, "name" : "Sample chapter 09"},];}
  getModules(id){return [{"id": 1, "name" : "Sample module 01"},{"id": 2, "name" : "Sample module 02"},{"id": 3, "name" : "Sample module 03"},{"id": 4, "name" : "Sample module 04"},{"id": 5, "name" : "Sample module 05"},{"id": 6, "name" : "Sample module 06"},{"id": 7, "name" : "Sample module 07"},{"id": 8, "name" : "Sample module 08"},{"id": 9, "name" : "Sample module 09"},];}
  getModuleVideos(id){return [{"id": 1 ,"name":"1.0 Lesson name will be displayed here", "video": "tPEE9ZwTmy0", "tutor": "Jason", "cun": 10, "und":5, "con":78, "dun":5},{"id": 2 ,"name":"2.0 Lesson name will be displayed here", "video": "cdwal5Kw3Fc", "tutor": "Jason", "cun": 16, "und":51, "con":8, "dun":51},{"id": 3 ,"name":"2.1 Lesson name will be displayed here", "video": "7-qGKqveZaM", "tutor": "Jason", "cun": 110, "und":53, "con":78, "dun":115},{"id": 1 ,"name":"1.0 Lesson name will be displayed here", "video": "tPEE9ZwTmy0", "tutor": "Jason", "cun": 10, "und":5, "con":78, "dun":5},{"id": 2 ,"name":"2.0 Lesson name will be displayed here", "video": "cdwal5Kw3Fc", "tutor": "Jason", "cun": 16, "und":51, "con":8, "dun":51},{"id": 3 ,"name":"2.1 Lesson name will be displayed here", "video": "7-qGKqveZaM", "tutor": "Jason", "cun": 110, "und":53, "con":78, "dun":115},{"id": 1 ,"name":"1.0 Lesson name will be displayed here", "video": "tPEE9ZwTmy0", "tutor": "Jason", "cun": 10, "und":5, "con":78, "dun":5},{"id": 2 ,"name":"2.0 Lesson name will be displayed here", "video": "cdwal5Kw3Fc", "tutor": "Jason", "cun": 16, "und":51, "con":8, "dun":51},{"id": 3 ,"name":"2.1 Lesson name will be displayed here", "video": "7-qGKqveZaM", "tutor": "Jason", "cun": 110, "und":53, "con":78, "dun":115},{"id": 1 ,"name":"1.0 Lesson name will be displayed here", "video": "tPEE9ZwTmy0", "tutor": "Jason", "cun": 10, "und":5, "con":78, "dun":5},{"id": 2 ,"name":"2.0 Lesson name will be displayed here", "video": "cdwal5Kw3Fc", "tutor": "Jason", "cun": 16, "und":51, "con":8, "dun":51},{"id": 3 ,"name":"2.1 Lesson name will be displayed here", "video": "7-qGKqveZaM", "tutor": "Jason", "cun": 110, "und":53, "con":78, "dun":115},{"id": 1 ,"name":"1.0 Lesson name will be displayed here", "video": "tPEE9ZwTmy0", "tutor": "Jason", "cun": 10, "und":5, "con":78, "dun":5},{"id": 2 ,"name":"2.0 Lesson name will be displayed here", "video": "cdwal5Kw3Fc", "tutor": "Jason", "cun": 16, "und":51, "con":8, "dun":51},{"id": 3 ,"name":"2.1 Lesson name will be displayed here", "video": "7-qGKqveZaM", "tutor": "Jason", "cun": 110, "und":53, "con":78, "dun":115},];}
  
}

const breadcrumb = {
  "id_g" : 0,
  "id_s" : 0,
  "id_c" : 0,
  "id_m" : 0,

  "name_g" : "-",
  "name_s" : "-",
  "name_c" : "-",
  "name_m" : "-"
};

interface dataOut{
  obj:Array<Object>
}